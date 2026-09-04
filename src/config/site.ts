export const SITE_CONFIG = {
  name: "HDK Güvenlik",
  phone: "+90 537 256 87 56",
  phoneRaw: "905372568756",
  email: "info@hdkguvenlik.com",
  // Vercel / sunucu ortam değişkenlerinden veya buradan yönetilebilir:
  // true: Ziyaretçilere yapım aşamasında gösterir. false: Siteyi herkese açar.
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== undefined
    ? process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
    : true,
};
