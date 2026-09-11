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
    systemType: "8 Kameralı AHD Set (28.000 ₺ - En Çok Satan)",
    cameraCount: "8 Kameralı Set (En Çok Tercih Edilen)",
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
    "2 Kameralı AHD Set (12.500 ₺)",
    "4 Kameralı AHD Set (15.000 ₺)",
    "8 Kameralı AHD Set (28.000 ₺ - En Çok Satan)",
    "16 Kameralı AHD Set (55.000 ₺)",
    "Solar Panelli Kameralar (Elektriksiz & 4G)",
    "IP Kamera Sistemleri (PoE & 4K)",
    "8'li Dev Kampanya Seti (Monitör & Dolap Dahil)",
    "Kamera + Hırsız Alarm Paketi",
  ];

  const cameraCounts = [
    "2 Kameralı Set",
    "4 Kameralı Set",
    "8 Kameralı Set (En Çok Tercih Edilen)",
    "16 Kameralı Set",
    "16+ Kamera (Büyük Saha / Özel Proje)",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Arka planda veritabanına /api/leads API'sine kaydet (Admin paneline düşer)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Keşif Formu",
        }),
      });

      if (!res.ok) {
        throw new Error("Kayıt sırasında bir sorun oluştu.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Lead save error:", err);
      setSubmitError("Talebiniz kaydedilirken bir hata oluştu. Lütfen tekrar deneyin veya telefonla ulaşın.");
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full mb-3">
                  ✓ Talebiniz Yönetim Sistemimize Kaydedildi
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Keşif Talebiniz Başarıyla Alındı!
                </h3>
              </div>

              <div className="max-w-md mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Müşteri:</span>
                  <span className="font-bold text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">İletişim:</span>
                  <span className="font-mono text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Bölge / İlçe:</span>
                  <span className="text-white">{formData.location || "Amasya"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Seçilen Çözüm:</span>
                  <span className="font-medium text-emerald-400">{formData.systemType}</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                Talebiniz HDK Güvenlik teknik ekibimize iletilmiştir. Uzman temsilcimiz en kısa sürede telefon numaranızdan sizi arayarak keşif randevusunu oluşturacaktır.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      location: "",
                      propertyType: "Ev / Daire",
                      systemType: "8 Kameralı AHD Set (28.000 ₺ - En Çok Satan)",
                      cameraCount: "8 Kameralı Set (En Çok Tercih Edilen)",
                      notes: "",
                    });
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all cursor-pointer"
                >
                  Yeni Keşif Formu Doldur
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
                    placeholder="Örn: Amasya / Merkez"
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
                        onClick={() => {
                          let matchedCount = formData.cameraCount;
                          if (item.startsWith("2 Kameralı")) matchedCount = "2 Kameralı Set";
                          else if (item.startsWith("4 Kameralı")) matchedCount = "4 Kameralı Set";
                          else if (item.startsWith("8 Kameralı") || item.startsWith("8'li")) matchedCount = "8 Kameralı Set (En Çok Tercih Edilen)";
                          else if (item.startsWith("16 Kameralı")) matchedCount = "16 Kameralı Set";
                          setFormData({ ...formData, systemType: item, cameraCount: matchedCount });
                        }}
                        className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
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

              {submitError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs text-center">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-70 text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Talebiniz Kaydediliyor..." : "Ücretsiz Keşif Talebini Gönder"}</span>
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
