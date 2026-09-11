/**
 * HDK Güvenlik CRM - OneSignal & Mobil Push Bildirim Servisi
 * Next.js (App Router / Pages Router / Server Actions uyumlu)
 */

interface NotificationPayload {
  title: string;
  message: string;
  url?: string; // Tıklandığında açılacak sayfa (ör: "/admin")
  data?: Record<string, any>; // Ekstra parametreler
}

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID || "";
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || "";
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
  } else {
    console.log("[OneSignal] API anahtarları bekleniyor (.env.local)");
  }

  // 2. ntfy.sh Anlık Bildirim (Tamamlayıcı & Yedek kanal)
  try {
    const ntfyRes = await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Title": title,
        "Priority": "urgent",
        "Tags": "camera,bell",
        ...(url ? { "Actions": `view, Görüntüle, ${url}` } : {}),
      },
      body: message,
    });
    results.ntfy = { success: ntfyRes.ok };
  } catch (err) {
    console.error("[ntfy Error]", err);
  }

  return { success: true, details: results };
}
