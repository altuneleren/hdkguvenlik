"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User, 
  Building2, 
  Video, 
  Calendar,
  MessageCircle
} from "lucide-react";

export default function InspectionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    propertyType: "Ev / Daire",
    systemType: "Güvenlik Kamerası (IP / Gece Görüşlü)",
    cameraCount: "1 - 4 Kamera",
    notes: "",
  });

  const propertyTypes = [
    "Ev / Daire",
    "Villa / Müstakil",
    "Ofis / İş Yeri",
    "Dükkan / Mağaza",
    "Fabrika / Depo",
    "Şantiye / Açık Alan",
  ];

  const systemTypes = [
    "Güvenlik Kamerası (IP / Gece Görüşlü)",
    "Hırsız Alarm Sistemi",
    "Kamera + Alarm Paketi",
    "Yangın Algılama & İhbar",
    "Görüntülü Diyafon / Geçiş Kontrol",
  ];

  const cameraCounts = [
    "1 - 4 Kamera",
    "5 - 8 Kamera",
    "9 - 16 Kamera",
    "16+ Kamera (Proje Bazlı)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = generateWhatsAppMessage();
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*HDK Güvenlik - Yeni Ücretsiz Keşif Talebi*\n\n` +
      `👤 *Ad Soyad:* ${formData.fullName}\n` +
      `📞 *Telefon:* ${formData.phone}\n` +
      `📍 *Konum / İlçe:* ${formData.location}\n` +
      `🏢 *Mekan Türü:* ${formData.propertyType}\n` +
      `🛡️ *İlgilenilen Sistem:* ${formData.systemType}\n` +
      `📹 *Tahmini Kamera Sayısı:* ${formData.cameraCount}\n` +
      (formData.notes ? `📝 *Not:* ${formData.notes}\n` : "");

    return `https://wa.me/905372568756?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="kesif-formu" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>%100 Ücretsiz & Taahhütsüz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ücretsiz Yerinde Keşif Talebi
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mekanınıza özel en doğru kamera ve güvenlik çözümlerini belirlemek için uzman mühendislerimiz adresinize gelsin, sıfır maliyetle projelendirsin.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Keşif Talebiniz Başarıyla Alındı!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                HDK Güvenlik uzman temsilcimiz verdiğiniz telefon numarası üzerinden en geç <strong>2 saat içinde</strong> sizinle iletişime geçerek randevu oluşturacaktır.
              </p>

              {/* Quick WhatsApp Share Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Bilgileri WhatsApp'tan da İlet</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-all"
                >
                  Yeni Form Doldur
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Ad Soyad */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Adınız Soyadınız *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Telefon Numarası */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Telefon Numaranız *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Konum / Adres */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Bulunduğunuz İl / İlçe veya Bölge *
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Örn: İstanbul / Kadıköy"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
              </div>

              {/* Mekan Türü ve İlgilenilen Sistem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Mekan Türü
                  </label>
                  <div className="relative">
                    <Building2 className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Tahmini Kamera Sayısı
                  </label>
                  <div className="relative">
                    <Video className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.cameraCount}
                      onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                    >
                      {cameraCounts.map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* İlgilenilen Güvenlik Sistemi */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  İhtiyaç Duyulan Güvenlik Çözümü
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {systemTypes.map((item) => {
                    const isSelected = formData.systemType === item;
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, systemType: item })}
                        className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "bg-red-600/20 border-red-500 text-white shadow-sm ring-1 ring-red-500/50"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {isSelected ? "✓ " : "• "}
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ek Notlar */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Ek Bilgi veya Özel Notlar (Opsiyonel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Kör noktalar, gece görüşü beklentisi, uzaktan cep telefonu izleme vb. detaylar..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Ücretsiz Keşif Talebini Gönder</span>
                </button>
              </div>

              {/* Trust markers under form */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Keşif tamamen ücretsizdir
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Hiçbir satın alma zorunluluğu yoktur
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Aynı gün randevu imkanı
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
