import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import os from "os";
import initialLeadsData from "@/data/leads.json";
import { sendPushNotification } from "@/lib/send-notification";

interface Lead {
  id: string;
  fullName: string;
  phone: string;
  location: string;
  propertyType: string;
  systemType: string;
  cameraCount: string;
  notes?: string;
  status: "Beklemede" | "Arandı" | "Keşif Planlandı" | "Montaj Tamamlandı" | "İptal";
  createdAt: string;
  source?: string;
}

// Global in-memory cache to retain leads within the runtime process
declare global {
  var _hdkLeadsMemory: Lead[] | undefined;
}

const isServerless = Boolean(
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.NODE_ENV === "production"
);

// In serverless (e.g. Vercel), the root directory is read-only (EROFS).
// os.tmpdir() (/tmp) is the only writable directory on AWS Lambda / Vercel.
const DATA_FILE = isServerless
  ? path.join(os.tmpdir(), "leads.json")
  : path.join(process.cwd(), "src", "data", "leads.json");

// Optional: If Vercel KV / Upstash Redis is connected, sync leads persistently
async function getLeadsFromKv(): Promise<Lead[] | null> {
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!kvUrl || !kvToken) return null;

  try {
    const res = await fetch(`${kvUrl}/get/hdk_leads`, {
      headers: { Authorization: `Bearer ${kvToken}` },
      cache: "no-store",
    });
    const data = await res.json();
    if (data?.result) {
      return typeof data.result === "string" ? JSON.parse(data.result) : data.result;
    }
  } catch (err) {
    console.warn("[KV Read Warning]", err);
  }
  return null;
}

async function saveLeadsToKv(leads: Lead[]): Promise<boolean> {
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!kvUrl || !kvToken) return false;

  try {
    await fetch(`${kvUrl}/set/hdk_leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${kvToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leads),
    });
    return true;
  } catch (err) {
    console.warn("[KV Write Warning]", err);
    return false;
  }
}

async function getLeads(): Promise<Lead[]> {
  // 1. Try Vercel KV / Upstash if configured
  const kvLeads = await getLeadsFromKv();
  if (kvLeads && Array.isArray(kvLeads)) {
    globalThis._hdkLeadsMemory = kvLeads;
    return kvLeads;
  }

  // 2. Return in-memory cache if available
  if (globalThis._hdkLeadsMemory && Array.isArray(globalThis._hdkLeadsMemory)) {
    return globalThis._hdkLeadsMemory;
  }

  // 3. Try to read from writable DATA_FILE
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(data) as Lead[];
    globalThis._hdkLeadsMemory = parsed;
    return parsed;
  } catch {
    // 4. File doesn't exist yet, seed with initial leads bundled at build time
    const fallback = Array.isArray(initialLeadsData) ? (initialLeadsData as Lead[]) : [];
    globalThis._hdkLeadsMemory = fallback;

    // Non-blocking attempt to write to disk
    try {
      const dir = path.dirname(DATA_FILE);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(fallback, null, 2), "utf-8");
    } catch {
      // Ignore read-only or disk errors in serverless
    }

    return fallback;
  }
}

async function saveLeads(leads: Lead[]): Promise<void> {
  // Always update in-memory store
  globalThis._hdkLeadsMemory = leads;

  // Sync to KV if available
  await saveLeadsToKv(leads);

  // Safely write to disk without throwing EROFS to caller
  try {
    const dir = path.dirname(DATA_FILE);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    // If writing to process.cwd() failed due to read-only filesystem, try /tmp
    if (!DATA_FILE.startsWith(os.tmpdir())) {
      try {
        const tmpFile = path.join(os.tmpdir(), "leads.json");
        await fs.writeFile(tmpFile, JSON.stringify(leads, null, 2), "utf-8");
      } catch (tmpErr) {
        console.warn("[Storage Fallback Warning] Leads retained in memory:", tmpErr);
      }
    }
  }
}

// GET: List all leads with optional filtering
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search")?.toLowerCase();

    let leads = await getLeads();

    if (status && status !== "all") {
      leads = leads.filter((l) => l.status === status);
    }

    if (search) {
      leads = leads.filter(
        (l) =>
          l.fullName.toLowerCase().includes(search) ||
          l.phone.includes(search) ||
          l.location.toLowerCase().includes(search) ||
          l.systemType.toLowerCase().includes(search)
      );
    }

    // Sort newest first
    leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Create a new lead from Inspection Form, Configurator, or Chatbot
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Test bildirimi kontrolü
    if (body.isTest) {
      const notifyRes = await sendPushNotification({
        title: "🔔 HDK Güvenlik CRM - Test Bildirimi",
        message: "OneSignal ve Android telefon bildirimi başarıyla test edildi!",
        url: "https://hdkguvenlik.com/admin",
      });
      return NextResponse.json({
        success: true,
        message: "Test bildirimi işlendi!",
        details: notifyRes.details,
      });
    }

    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Ad Soyad ve Telefon alanları zorunludur." },
        { status: 400 }
      );
    }

    const leads = await getLeads();

    const newLead: Lead = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      fullName: body.fullName.trim(),
      phone: body.phone.trim(),
      location: body.location?.trim() || "Amasya (Belirtilmedi)",
      propertyType: body.propertyType || "Ev / Daire",
      systemType: body.systemType || "8 Kameralı AHD Set (28.000 ₺ - En Çok Satan)",
      cameraCount: body.cameraCount || "8 Kameralı Set",
      notes: body.notes?.trim() || "",
      status: "Beklemede",
      createdAt: new Date().toISOString(),
      source: body.source || "Keşif Formu",
    };

    leads.unshift(newLead);
    try {
      await saveLeads(leads);
    } catch (saveErr) {
      console.warn("[Save Warning - Non-blocking]:", saveErr);
    }

    // OneSignal & Android uygulamasına anında sesli push bildirim gönder
    sendPushNotification({
      title: `🔔 Yeni Keşif Talebi: ${newLead.fullName}`,
      message: `${newLead.fullName} (${newLead.phone}) - ${newLead.systemType} için yeni keşif kaydı bıraktı.`,
      url: "https://hdkguvenlik.com/admin",
      data: {
        leadId: newLead.id,
        phone: newLead.phone,
        location: newLead.location,
      },
    }).catch((err) => console.error("Push notification error:", err));

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PATCH: Update lead status or notes
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Lead ID gereklidir." }, { status: 400 });
    }

    const leads = await getLeads();
    const index = leads.findIndex((l) => l.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "Kayıt bulunamadı." }, { status: 404 });
    }

    if (status) leads[index].status = status;
    if (notes !== undefined) leads[index].notes = notes;

    await saveLeads(leads);

    return NextResponse.json({ success: true, lead: leads[index] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a lead
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Lead ID gereklidir." }, { status: 400 });
    }

    let leads = await getLeads();
    const initialLength = leads.length;
    leads = leads.filter((l) => l.id !== id);

    if (leads.length === initialLength) {
      return NextResponse.json({ success: false, error: "Kayıt bulunamadı." }, { status: 404 });
    }

    await saveLeads(leads);

    return NextResponse.json({ success: true, message: "Kayıt başarıyla silindi." });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
