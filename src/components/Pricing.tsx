"use client";

import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Camera, HardDrive, Smartphone, Wrench } from "lucide-react";

export default function Pricing() {
  const whatsappBase = "https://wa.me/905372568756?text=";

  const plans = [
    {
      name: "4 Kameralı Güvenlik Seti",
      subtitle: "Ev, Apartman Girişi & Küçük Ofisler İçin",
      description: "Küçük alanlar ve temel güvenlik ihtiyaçları için kompakt, yüksek çözünürlüklü ve ekonomik anahtar teslim çözüm.",
      price: "8.450",
      badge: "Giriş Seviyesi",
      popular: false,
      whatsappMsg: encodeURIComponent("Merhaba HDK Güvenlik, 4 Kameralı Güvenlik Seti hakkında detaylı bilgi ve montaj teklifi almak istiyorum."),
      hardwareHighlights: [
        { icon: Camera, text: "4 Adet Full HD (1080p) Gece Görüşlü Kamera (İç / Dış Mekan)" },
        { icon: HardDrive, text: "1 TB 7/24 Güvenlik Diski (2-3 Hafta Kesintisiz Kayıt)" },
        { icon: Smartphone, text: "7/24 Cep Telefonu & Tabletten Canlı İzleme (iOS / Android)" },
        { icon: Wrench, text: "100 Metre CCTV Kablolama + BNC & Jack Bağlantı Seti" },
      ],
      features: [
        "4 Kanal H.265+ Hibrit DVR/NVR Kayıt Cihazı",
        "IP66 Su ve Toz Geçirmez Dış Mekan Koruması",
        "Karanlıkta 20-30 Metre Akıllı Gece Görüşü (Smart IR)",
        "Merkezi Regüleli 12V Güvenlik Adaptörü",
        "Hareket Algılama ve Telefona Anlık Bildirim",
        "Profesyonel Yerinde Montaj ve Açı Ayarı Dahil",
        "2 Yıl Birebir Değişim & Servis Garantisi",
        "Ücretsiz Yerinde Keşif Hizmeti",
      ],
      cta: "4'lü Set İçin Fiyat Al",
    },
    {
      name: "8 Kameralı Güvenlik Seti",
      subtitle: "İş Yeri, Villa, Restoran & Depolar İçin",
      description: "Geniş iç ve dış alanların her köşesini kör nokta bırakmadan kontrol altında tutmak isteyen işletmeler için ideal paket.",
      price: "14.850",
      badge: "En Çok Tercih Edilen",
      popular: true,
      whatsappMsg: encodeURIComponent("Merhaba HDK Güvenlik, 8 Kameralı Güvenlik Seti hakkında detaylı bilgi ve montaj randevusu almak istiyorum."),
      hardwareHighlights: [
        { icon: Camera, text: "8 Adet 2K (5MP) Geniş Açılı Gece Görüşlü Kamera" },
        { icon: HardDrive, text: "2 TB 7/24 Kurumsal Güvenlik Diski (3-4 Hafta Kayıt)" },
        { icon: Smartphone, text: "Anlık Akıllı Hareket & İhlal Alarmı Telefona Bildirim" },
        { icon: Wrench, text: "200 Metre Yüksek Kalite Kablolama ve Kanallama Altyapısı" },
      ],
      features: [
        "8 Kanal Yapay Zeka Destekli Akıllı Kayıt Cihazı",
        "Kristal Netliğinde Gece ve Gündüz Renk Dengesi",
        "IP67 Endüstriyel Seviye Dayanıklı Metal Kasa Kameralar",
        "Merkezi Güç Dağıtım Panosu & Kısa Devre Koruması",
        "Aynı Anda Çoklu Kullanıcı & PC İzleme Programı",
        "Özel Kablo Kanallaması ve Estetik Gizli Tesisat",
        "Uzman Ekiple Anahtar Teslim Montaj & Kurulum",
        "2 Yıl Tam Garanti + Öncelikli 7/24 Teknik Servis",
        "Ücretsiz Keşif & Detaylı Güvenlik Projelendirmesi",
      ],
      cta: "8'li Set İçin Fiyat Al",
    },
    {
      name: "16 Kameralı Güvenlik Seti",
      subtitle: "Fabrika, Şantiye, Plaza & Büyük Tesisler",
      description: "Büyük ölçekli sahalar, siteler ve kurumsal tesisler için yapay zeka analizli profesyonel merkezi izleme istasyonu.",
      price: "26.900",
      badge: "Kurumsal & Tesis",
      popular: false,
      whatsappMsg: encodeURIComponent("Merhaba HDK Güvenlik, 16 Kameralı Güvenlik Seti ve kurumsal projelendirme için keşif ve teklif almak istiyorum."),
      hardwareHighlights: [
        { icon: Camera, text: "16 Adet Ultra HD 4K / Gece Renkli (ColorVu) Kamera" },
        { icon: HardDrive, text: "4 TB Yüksek Kapasiteli 7/24 Sunucu Sınıfı Disk" },
        { icon: Smartphone, text: "Yapay Zeka: İnsan / Araç Ayrımı & Sınır İhlal Uyarısı" },
        { icon: Wrench, text: "Profesyonel Dağıtım Panosu & Ağ Altyapı Entegrasyonu" },
      ],
      features: [
        "16 Kanal Endüstriyel NVR/DVR Kayıt Sunucusu",
        "Karanlıkta Dahi 24 Saat Tam Renkli Gece Görüntüsü",
        "Gelişmiş Yapay Zeka Tabanlı Yüz & Plaka Tanıma Desteği",
        "Güvenlik Odası, TV Ekranı ve Mobil Eşzamanlı Matris İzleme",
        "Genişletilebilir Switch & Kesintisiz Güç Kaynağı Uyumlu",
        "Komple Saha Kablo Kanallama ve Borulama İşçiliği",
        "Kapsamlı Sistem Testi, Devreye Alma ve Kullanıcı Eğitimi",
        "2 Yıl Yerinde Teknik Servis & Periyodik Bakım",
        "Ücretsiz Saha Keşfi ve Risk Haritası Raporu",
      ],
      cta: "16'lı Set İçin Fiyat Al",
    },
  ];

  return (
    <section id="fiyatlar" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
            Anahtar Teslim Kamera Paketleri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            İhtiyacınıza Uygun Güvenlik Kamera Setleri
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Aylık aidat, abonelik veya sürpriz fatura yok. Kamera, kayıt cihazı, disk ve uzman montaj dahil komple anahtar teslim güvenlik sistemleri.
          </p>

          {/* Value Guarantee Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
            <span className="flex items-center gap-1.5 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Tek Seferlik Ödeme
            </span>
            <span className="hidden sm:inline text-emerald-300 dark:text-emerald-700">•</span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Aylık / Yıllık Aidat Yok
            </span>
            <span className="hidden sm:inline text-emerald-300 dark:text-emerald-700">•</span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> 2 Yıl Birebir Değişim Garantisi
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 sm:p-8 bg-white dark:bg-slate-900/90 border transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? "border-red-500 shadow-2xl ring-2 ring-red-500/20 lg:-translate-y-3"
                  : "border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header & Description */}
                <div className="mb-5">
                  {!plan.popular && (
                    <span className="inline-block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-3">
                    {plan.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[48px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {plan.price} ₺
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      'den başlayan
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      Montaj & Malzeme Dahil
                    </span>
                    <span className="inline-block bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      Aidatsız
                    </span>
                  </div>
                </div>

                {/* Hardware Highlights (Quick Spec Box) */}
                <div className="bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl p-4 mb-6 border border-slate-100 dark:border-slate-700/60 space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Öne Çıkan Donanım:
                  </div>
                  {plan.hardwareHighlights.map((item, hIdx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-tight">
                        <IconComponent className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Features List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider block mb-3">
                    Paket Detayları & Hizmetler:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <div className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`${whatsappBase}${plan.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.01] active:scale-[0.99]"
                      : "bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  {plan.cta}
                </a>

                <a
                  href="/#kesif-formu"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                >
                  <span>veya Ücretsiz Keşif Formu Doldur</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom / Enterprise needs */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Daha Farklı veya Özel Bir Projeniz mi Var?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              32+ kameralı kurumsal projeler, plaka tanıma sistemleri, yangın ve hırsız alarm entegrasyonu için uzman mühendislerimizle yerinde ücretsiz keşif yapıyoruz.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="#kesif-formu"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm text-center transition-all shadow-lg shadow-red-600/25"
            >
              Ücretsiz Keşif Randevusu Al
            </a>
            <a
              href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20%C3%B6zel%20projemiz%20i%C3%A7in%20bilgi%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm text-center transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              Mühendisimize Danışın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
