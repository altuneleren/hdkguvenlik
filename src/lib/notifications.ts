// HDK Güvenlik - Mobil Anlık Bildirim Servisi (Android Push & Telegram)

interface NotificationLead {
  fullName: string;
  phone: string;
  location: string;
  systemType: string;
  cameraCount: string;
  notes?: string;
  source?: string;
}

export const NTFY_TOPIC = "hdk-guvenlik-leads";

export async function sendPushNotification(lead: NotificationLead): Promise<{ success: boolean; error?: string }> {
  try {
    const rawPhone = lead.phone.replace(/\D/g, "");
    const formattedPhone = rawPhone.startsWith("0") ? `9${rawPhone}` : rawPhone.startsWith("90") ? rawPhone : `90${rawPhone}`;

    // 1. Android ntfy Push Notification (Sesli ve Eylem Butonlu Bildirim)
    const ntfyResponse = await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Title": `🚨 YENİ KEŞİF: ${lead.fullName}`,
        "Priority": "urgent", // En yüksek öncelik: Ekranı uyandırır, sesli ve titreşimli çalar
        "Tags": "camera,rotating_light,bell",
        "Actions": `view, 📞 Hemen Ara, tel:${lead.phone.replace(/\s+/g, "")}; view, 💬 WhatsApp, https://wa.me/${formattedPhone}; view, 🛡️ Admin Paneli, https://hdkguvenlik.com/admin`,
      },
      body: [
        `👤 Müşteri: ${lead.fullName}`,
        `📞 Telefon: ${lead.phone}`,
        `📍 Konum: ${lead.location}`,
        `🛡️ Paket: ${lead.systemType}`,
        `📹 Kamera: ${lead.cameraCount}`,
        lead.notes ? `📝 Not: ${lead.notes}` : "",
      ].filter(Boolean).join("\n"),
    });

    // 2. Telegram Bot Bildirimi (Eğer ortam değişkeni veya ayar varsa)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      const telegramText = 
        `🚨 *YENİ KEŞİF TALEBİ GELDİ!*\n\n` +
        `👤 *Müşteri:* ${lead.fullName}\n` +
        `📞 *Telefon:* [${lead.phone}](tel:${lead.phone.replace(/\s+/g, "")})\n` +
        `📍 *Konum:* ${lead.location}\n` +
        `🛡️ *Paket:* ${lead.systemType}\n` +
        `📹 *Kamera:* ${lead.cameraCount}\n` +
        (lead.notes ? `📝 *Not:* ${lead.notes}\n` : "");

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      }).catch((err) => console.error("Telegram send error:", err));
    }

    return { success: ntfyResponse.ok };
  } catch (error: any) {
    console.error("Push notification error:", error);
    return { success: false, error: error.message };
  }
}
