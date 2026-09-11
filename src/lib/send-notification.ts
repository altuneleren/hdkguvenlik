/**
 * HDK Güvenlik CRM - OneSignal & Mobil Push Bildirim Servisi
 * Next.js (App Router / Pages Router / Server Actions uyumlu)
 */

interface NotificationPayload {
  title: string;
  message: string;
  url?: string; // Tıklandığında açılacak sayfa (ör: "http://www.hdkguvenlik.com/admin")
  data?: Record<string, any>; // Ekstra parametreler (leadId, phone, location vb.)
}

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID || "cf68e52e-508f-4495-8e08-4dd8a1e15bb2";
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || "os_v2_app_z5uoklsqr5cjldqijxmkdyk3wlifzp2ubicupqvgealy5yl754ahwuicezxo5dzdgpsujuaovfrct6upmoeisasiztsgr4ftfnr2tpq";
const NTFY_TOPIC = "hdk-guvenlik-leads";

/**
 * CRM Yöneticisinin telefonuna / Tüm kayıtlı admin cihazlarına bildirim gönderir
 */
export async function sendPushNotification({ title, message, url, data }: NotificationPayload) {
  const results: { onesignal?: any; ntfy?: any } = {};

  // 1. OneSignal Push Bildirimi (Eğer API anahtarları tanımlıysa)
  if (ONESIGNAL_APP_ID && ONESIGNAL_REST_API_KEY && ONESIGNAL_APP_ID !== "senin_onesignal_app_id") {
    try {
      const payload: Record<string, any> = {
        app_id: ONESIGNAL_APP_ID,
        included_segments: ["Total Subscriptions"], // Uygulamayı yükleyen admin cihazına gider
        headings: { tr: title, en: title },
        contents: { tr: message, en: message },
        priority: 10,
      };

      if (url) {
        payload.url = url;
      }

      if (data) {
        payload.data = data;
      }

      const response = await fetch("https://onesignal.com/api/v1/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Basic ${ONESIGNAL_REST_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("[OneSignal Success] Bildirim iletildi:", responseData.id);
        results.onesignal = { success: true, id: responseData.id };
      } else {
        console.error("[OneSignal Error]", responseData);
        results.onesignal = { success: false, error: responseData };
      }
    } catch (error) {
      console.error("[OneSignal Exception]", error);
      results.onesignal = { success: false, error };
    }
  }

  // 2. ntfy.sh Anlık Bildirim (JSON Gövdesi ile - Türkçe karakter ve emoji %100 güvenli)
  try {
    const actions: any[] = [];
    if (data?.phone) {
      const cleanPhone = String(data.phone).replace(/\s+/g, "");
      actions.push({
        action: "view",
        label: "📞 Müşteriyi Ara",
        url: `tel:${cleanPhone}`,
      });
    }
    if (url) {
      actions.push({
        action: "view",
        label: "🛡️ Admin Paneli",
        url: url,
      });
    }

    const ntfyPayload = {
      topic: NTFY_TOPIC,
      title: title,
      message: message,
      priority: 5, // 5 = urgent / high
      tags: ["camera", "bell"],
      actions: actions.length > 0 ? actions : undefined,
    };

    const ntfyRes = await fetch("https://ntfy.sh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(ntfyPayload),
    });

    results.ntfy = { success: ntfyRes.ok };
  } catch (err) {
    console.error("[ntfy Error]", err);
    results.ntfy = { success: false, error: err };
  }

  return { success: true, details: results };
}
