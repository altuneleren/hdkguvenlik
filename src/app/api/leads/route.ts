import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { sendPushNotification } from "@/lib/send-notification";

const DATA_FILE = path.join(process.cwd(), "src", "data", "leads.json");

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

async function getLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data) as Lead[];
  } catch (error) {
    // If file doesn't exist, create directory and return empty array
    const dir = path.dirname(DATA_FILE);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
    return [];
  }
}

async function saveLeads(leads: Lead[]): Promise<void> {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
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
      await sendPushNotification({
        title: "🔔 HDK Güvenlik CRM - Test Bildirimi",
        message: "OneSignal ve Android telefon bildirimi başarıyla test edildi!",
        url: "http://localhost:3000/admin",
      });
      return NextResponse.json({ success: true, message: "Test bildirimi telefona gönderildi!" });
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
    await saveLeads(leads);

    // OneSignal & Android uygulamasına anında sesli push bildirim gönder
    sendPushNotification({
      title: `🔔 Yeni Keşif Talebi: ${newLead.fullName}`,
      message: `${newLead.fullName} (${newLead.phone}) - ${newLead.systemType} için yeni keşif kaydı bıraktı.`,
      url: "http://localhost:3000/admin",
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
