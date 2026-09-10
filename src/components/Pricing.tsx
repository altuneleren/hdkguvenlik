"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Camera,
  HardDrive,
  Smartphone,
  Wrench,
  Network,
  Volume2,
  Eye,
  Server,
  Zap,
  PhoneCall,
  Sun,
  Radio,
  BatteryCharging,
} from "lucide-react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"ahd" | "ip" | "solar">("ahd");
  const whatsappBase = "https://wa.me/905372568756?text=";

  const ahdPlans = [
    {
      name: "2 Kameralı AHD Set",
      subtitle: "Ev, Apartman Girişi & Küçük Mağazalar",
      description:
        "Küçük mekanlar için sesli kayıt ve 24 saat renkli gece görüşü sunan ekonomik anahtar teslim güvenlik seti.",
      price: "12.500",
      badge: "Giriş Seviyesi",
      popular: false,
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, 12.500 TL tutarındaki 2 Kameralı AHD Renkli ve Sesli Güvenlik Seti hakkında detaylı bilgi ve sipariş vermek istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Camera,
          text: "2 Adet 2MP Full HD (1080p) AHD Gece Gündüz Renkli & Sesli Kamera (İç/Dış Mekan)",
        },
        {
          icon: Server,
          text: "4 Kanal H.265 Kayıt Cihazı",
        },
        {
          icon: HardDrive,
          text: "250 GB 7/24 Güvenlik Kayıt Diski HDD",
        },
        {
          icon: Smartphone,
          text: "7/24 Cep Telefonu & Tabletten Canlı İzleme (iOS / Android)",
        },
      ],
      features: [
        "4 Kanal H.265+ Hibrit DVR/NVR Kayıt Cihazı",
        "IP66 Toz ve Su Geçirmez Dış Mekan Koruması",
        "Karanlıkta 5-15 Metre Akıllı Gece Görüşü (Smart IR)",
        "Dahili Mikrofon ile Ses Kayıt Özelliği",
        "Hareket Algılama ve Telefona / Tablete Anlık Bildirim",
        "Profesyonel Yerinde Montaj ve Açı Ayarları",
        "2 Yıl Birebir Değişim ve 7/24 Servis Garantisi",
        "Ücretsiz Uzaktan ve Yerinde Keşif Hizmeti",
      ],
      cta: "2'li Set Sipariş & Bilgi Al",
    },
    {
      name: "4 Kameralı AHD Set",
      subtitle: "Müstakil Ev, Ofis & Dükkanlar İçin",
      description:
        "4 farklı noktayı sesli ve renkli gece görüşüyle kesintisiz koruma altına alan ekonomik anahtar teslim paket.",
      price: "15.000",
      badge: "İdeal & Ekonomik",
      popular: false,
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, 15.000 TL tutarındaki 4 Kameralı AHD Renkli ve Sesli Güvenlik Seti hakkında detaylı bilgi ve sipariş vermek istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Camera,
          text: "4 Adet 2MP Full HD (1080p) AHD Gece Gündüz Renkli & Sesli Kamera (İç/Dış Mekan)",
        },
        {
          icon: Server,
          text: "4 Kanal H.265 Kayıt Cihazı",
        },
        {
          icon: HardDrive,
          text: "250 GB 7/24 Güvenlik Kayıt Diski HDD",
        },
        {
          icon: Smartphone,
          text: "7/24 Cep Telefonu & Tabletten Canlı İzleme (iOS / Android)",
        },
      ],
      features: [
        "4 Kanal H.265+ Hibrit DVR/NVR Kayıt Cihazı",
        "IP66 Toz ve Su Geçirmez Dış Mekan Koruması",
        "Karanlıkta 5-15 Metre Akıllı Gece Görüşü (Smart IR)",
        "Dahili Mikrofon ile Ses Kayıt Özelliği",
        "Hareket Algılama ve Telefona / Tablete Anlık Bildirim",
        "Profesyonel Yerinde Montaj ve Açı Ayarları",
        "2 Yıl Birebir Değişim ve 7/24 Servis Garantisi",
        "Ücretsiz Uzaktan ve Yerinde Keşif Hizmeti",
      ],
      cta: "4'lü Set Sipariş & Bilgi Al",
    },
    {
      name: "8 Kameralı AHD Set",
      subtitle: "Geniş İş Yeri, Villa, Depo & Restoran",
      description:
        "En çok satan paketimiz: Geniş alanlarda kör nokta bırakmayan, 8 sesli kamera ve yüksek performansla tam kapsamlı güvenlik.",
      price: "28.000",
      badge: "En Çok Tercih Edilen",
      popular: true,
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, 28.000 TL tutarındaki 8 Kameralı AHD Renkli ve Sesli Güvenlik Seti hakkında detaylı bilgi ve sipariş vermek istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Camera,
          text: "8 Adet 2MP Full HD (1080p) AHD Gece Gündüz Renkli & Sesli Kamera (İç/Dış Mekan)",
        },
        {
          icon: Server,
          text: "8 Kanal H.265 Kayıt Cihazı",
        },
        {
          icon: HardDrive,
          text: "500 GB 7/24 Güvenlik Kayıt Diski HDD",
        },
        {
          icon: Smartphone,
          text: "7/24 Cep Telefonu & Tabletten Canlı İzleme (iOS / Android)",
        },
      ],
      features: [
        "8 Kanal H.265+ Hibrit DVR/NVR Kayıt Cihazı",
        "IP66 Toz ve Su Geçirmez Dış Mekan Koruması",
        "Karanlıkta 5-15 Metre Akıllı Gece Görüşü (Smart IR)",
        "Dahili Mikrofon ile Ses Kayıt Özelliği",
        "Hareket Algılama ve Telefona / Tablete Anlık Bildirim",
        "Profesyonel Yerinde Montaj ve Açı Ayarları",
        "2 Yıl Birebir Değişim ve 7/24 Servis Garantisi",
        "Ücretsiz Uzaktan ve Yerinde Keşif Hizmeti",
      ],
      cta: "8'li Set Sipariş & Bilgi Al",
    },
    {
      name: "16 Kameralı AHD Set",
      subtitle: "Fabrika, Şantiye, Plaza & Büyük Tesis",
      description:
        "Büyük ölçekli sahalar için 16 kanallı merkezi kayıt istasyonu ve tüm açılardan sesli & renkli kontrol.",
      price: "55.000",
      badge: "Kurumsal & Tesis",
      popular: false,
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, 55.000 TL tutarındaki 16 Kameralı AHD Renkli ve Sesli Güvenlik Seti hakkında detaylı bilgi ve sipariş vermek istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Camera,
          text: "16 Adet 2MP Full HD (1080p) AHD Gece Gündüz Renkli & Sesli Kamera (İç/Dış Mekan)",
        },
        {
          icon: Server,
          text: "16 Kanal H.265 Kayıt Cihazı",
        },
        {
          icon: HardDrive,
          text: "500 GB 7/24 Güvenlik Kayıt Diski HDD",
        },
        {
          icon: Smartphone,
          text: "7/24 Cep Telefonu & Tabletten Canlı İzleme (iOS / Android)",
        },
      ],
      features: [
        "16 Kanal H.265+ Hibrit DVR/NVR Kayıt Cihazı",
        "IP66 Toz ve Su Geçirmez Dış Mekan Koruması",
        "Karanlıkta 5-15 Metre Akıllı Gece Görüşü (Smart IR)",
        "Dahili Mikrofon ile Ses Kayıt Özelliği",
        "Hareket Algılama ve Telefona / Tablete Anlık Bildirim",
        "Profesyonel Yerinde Montaj ve Açı Ayarları",
        "2 Yıl Birebir Değişim ve 7/24 Servis Garantisi",
        "Ücretsiz Uzaktan ve Yerinde Keşif Hizmeti",
      ],
      cta: "16'lı Set Sipariş & Bilgi Al",
    },
  ];

  const solarModels = [
    {
      name: "4G SIM Kartlı Solar PTZ Kamera",
      subtitle: "Bağ Evi, Tarla, Arsa & Şantiyeler İçin",
      description:
        "Elektrik ve Wi-Fi hattı olmayan arazilerde güneş paneli ve 4G SIM kart ile 360° dönebilen tam bağımsız güvenlik kamerası.",
      badge: "En Çok Satan Solar",
      popular: true,
      priceTitle: "Fiyat Teklifi Alınız",
      priceSub: "Adet ve montaj yerine özel avantajlı teklif",
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, 4G SIM Kartlı Solar PTZ Güneş Panelli Kamera modeli hakkında detaylı bilgi ve güncel fiyat teklifi almak istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Sun,
          text: "Yüksek Verimli Monokristal Güneş Paneli + Dahili Batarya",
        },
        {
          icon: Radio,
          text: "4G SIM Kart Desteği (Tüm Operatörlerle Uyumlu, İnternetsiz)",
        },
        {
          icon: Camera,
          text: "360° Yatay & 90° Dikey Telefondan Yön Kontrolü (PTZ)",
        },
        {
          icon: Eye,
          text: "Full HD Gece Renkli Görüş & LED Projektör Aydınlatması",
        },
      ],
      features: [
        "Sıfır Kablolama - Elektrik ve Sabit İnternet Altyapısı Gerektirmez",
        "Güneş Işığı Olmadan da Günlerce Kesintisiz Bataryalı Çalışma",
        "Akıllı PIR İnsan Algılama Sensörü & Telefona Anlık Bildirim",
        "Çift Yönlü Karşılıklı Ses İletişimi (Dahili Hoparlör & Mikrofon)",
        "IP66 Dış Ortam Su, Kar ve Toz Geçirmez Dayanıklı Kasa",
        "128 GB MicroSD Kart & Güvenli Bulut Kayıt Desteği",
        "iOS & Android Türkçe Mobil Uygulama ile 7/24 Canlı İzleme",
        "2 Yıl HDK Güvenlik Garantisi & Ücretsiz Keşif Desteği",
      ],
      cta: "Solar PTZ İçin Fiyat Teklifi Al",
    },
    {
      name: "Çift Lensli Panoramik 4G Solar Kamera",
      subtitle: "Çiftlik, Geniş Arazi & Depo Girişleri",
      description:
        "Aynı anda hem sabit geniş açılı alanı hem de 360° hareketli açıyı izleyen kör noktasız çift lensli akıllı solar kamera.",
      badge: "Çift Lens Teknolojisi",
      popular: false,
      priceTitle: "Fiyat Teklifi Alınız",
      priceSub: "Geniş arazi projelerine özel indirimli teklif",
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, Çift Lensli Panoramik 4G Solar Güneş Panelli Kamera modeli hakkında detaylı bilgi ve güncel fiyat teklifi almak istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Camera,
          text: "Çift Lens Teknolojisi: Biri Sabit Geniş Açı, Biri 360° PTZ Hareketli",
        },
        {
          icon: Sun,
          text: "Entegre Monokristal Solar Panel & Şarjlı Batarya Grubu",
        },
        {
          icon: Radio,
          text: "4G LTE Kesintisiz Canlı Yayın ve Geçmiş Kayıt Oynatma",
        },
        {
          icon: Volume2,
          text: "Caydırıcı Siren Alarmı, Projektör & İki Yönlü Sesli Konuşma",
        },
      ],
      features: [
        "Tek Kamerada İki Farklı Açı: Sıfır Kör Nokta Koruması",
        "Elektrik Olmayan Arazilerde Güneş Enerjisiyle 7/24 Çalışma",
        "Yapay Zeka Destekli İnsan Takibi (Otomatik Hedefe Odaklanma)",
        "Karanlıkta Ultra Net Gece Renkli Görüş ve Flaşör Işık",
        "IP66 Zorlu Kış ve Sıcak Hava Şartlarına Karşı Tam Koruma",
        "Mobil Uygulama Üzerinden Geçmiş Kayıtları İzleme ve İndirme",
        "2 Yıl Birebir Değişim Garantisi",
        "Ücretsiz Montaj ve Konfigürasyon Danışmanlığı",
      ],
      cta: "Çift Lensli Solar Teklifi Al",
    },
    {
      name: "Wi-Fi Destekli Solar Güvenlik Kamerası",
      subtitle: "Hobi Bahçesi, Müstakil Ev & Yazlıklar",
      description:
        "Modem sinyali alan fakat elektrik kablosu çekilmek istenmeyen mekanlar için pratik, güneş enerjili kablosuz kamera.",
      badge: "Kablosuz & Pratik",
      popular: false,
      priceTitle: "Fiyat Teklifi Alınız",
      priceSub: "Ekonomik, kablosuz ve hızlı kurulum seçeneği",
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, Wi-Fi Destekli Solar Güneş Panelli Kamera hakkında bilgi ve güncel fiyat teklifi almak istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Sun,
          text: "Entegre Kompakt Güneş Paneli ile Sürekli Kendini Şarj Eder",
        },
        {
          icon: Network,
          text: "2.4 GHz Kablosuz Wi-Fi Bağlantısı (Kablo Tesisatı Gerekmez)",
        },
        {
          icon: Camera,
          text: "2K Full HD Çözünürlük ve Akıllı Renkli Gece Görüşü",
        },
        {
          icon: Smartphone,
          text: "Telefona Anlık Hareket Bildirimi & Canlı İzleme",
        },
      ],
      features: [
        "Duvara veya Direğe 5 Dakikada Pratik Vida ile Montaj",
        "Elektrik Faturası Sıfır - Güneş Enerjisiyle Kendi Kendini Besler",
        "Dahili Mikrofon ve Hoparlör ile Karşılıklı Konuşma",
        "Hassas PIR Hareket Algılama ile Gereksiz Alarmları Önler",
        "MicroSD Hafıza Kartı Desteği ile Cihaz İçi Kayıt",
        "Suya ve Güneşe Dayanıklı UV Korumalı Gövde",
        "2 Yıl Resmi Garanti",
        "Uzaktan Kolay Kurulum Desteği",
      ],
      cta: "Wi-Fi Solar Teklifi Al",
    },
    {
      name: "Solar Güç İstasyonlu Çoklu Sistem",
      subtitle: "Büyük Araziler, Maden Sahaları & Çiftlikler",
      description:
        "Merkezi büyük güneş panelleri, akü bankası ve NVR kayıt istasyonuyla 4-8-16 kameralı kurumsal solar proje.",
      badge: "Endüstriyel Saha Çözümü",
      popular: false,
      priceTitle: "Projelendirme & Keşif",
      priceSub: "Saha keşfi ve mühendislik hesaplamasına özel",
      whatsappMsg: encodeURIComponent(
        "Merhaba HDK Güvenlik, Solar Güç İstasyonlu Çoklu Kamera Projesi için keşif ve teklif almak istiyorum."
      ),
      hardwareHighlights: [
        {
          icon: Sun,
          text: "100W - 400W Endüstriyel Güneş Panelleri + Jel/Lityum Akü Grubu",
        },
        {
          icon: Server,
          text: "Merkezi NVR / DVR Kayıt İstasyonu ve Geniş Kapasiteli Disk",
        },
        {
          icon: Radio,
          text: "Endüstriyel 4G LTE Çoklu Antenli Güçlü Modem / Router",
        },
        {
          icon: Camera,
          text: "İstenilen Sayıda (2, 4, 8, 16) Sabit ve Dönen Kameralar",
        },
      ],
      features: [
        "Elektriğin ve İnternetin Hiç Olmadığı Devasa Sahalar İçin Özel Çözüm",
        "Kış Şartlarında Bile 7-10 Gün Güneş Görmeden Kesintisiz Çalışma",
        "Direk Tipi Kilitli ve Havalandırmalı Güvenli Pano Sistemi",
        "Güvenlik Merkezi, TV ve Cep Telefonundan Çoklu Eşzamanlı İzleme",
        "Yapay Zeka Çevre Güvenlik ve İhlal Alarm Entegrasyonu",
        "Uzman Mühendislerimizle Yerinde Ücretsiz Saha Keşfi",
        "2 Yıl Yerinde Garanti ve 7/24 Teknik Servis",
        "Anahtar Teslim Kurulum ve Devreye Alma",
      ],
      cta: "Kurumsal Solar Proje Teklifi Al",
    },
  ];

  return (
    <section
      id="fiyatlar"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
            Anahtar Teslim Kamera Paketleri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            İhtiyacınıza Uygun Güvenlik Kamera Setleri
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Aylık aidat veya sürpriz fatura yok! Sesli, gece-gündüz renkli kayıt yapan AHD paketlerimizi ve elektrik/internet istemeyen Solar kameralarımızı inceleyin.
          </p>

          {/* Value Guarantee Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
            <span className="flex items-center gap-1.5 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Montaj &amp; Malzeme Dahil
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

        {/* System Type Selector (AHD vs IP vs SOLAR) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab("ahd")}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "ahd"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Camera className="w-4 h-4 shrink-0" />
              <span>AHD Kamera Paketleri</span>
              <span
                className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md font-semibold ${
                  activeTab === "ahd"
                    ? "bg-white/20 text-white"
                    : "bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400"
                }`}
              >
                Sesli &amp; Renkli
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("ip")}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "ip"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Network className="w-4 h-4 shrink-0" />
              <span>IP Kamera Paketleri</span>
              <span
                className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md font-semibold ${
                  activeTab === "ip"
                    ? "bg-white/20 text-white"
                    : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400"
                }`}
              >
                Çok Yakında
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("solar")}
              className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "solar"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4 shrink-0 text-amber-400 animate-spin-slow" />
              <span>Solar Panelli Kameralar</span>
              <span
                className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md font-semibold ${
                  activeTab === "solar"
                    ? "bg-white/20 text-white"
                    : "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400"
                }`}
              >
                Elektriksiz &amp; 4G
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: AHD KAMERA PAKETLERİ */}
        {activeTab === "ahd" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* 4 Cards Grid for AHD (2, 4, 8, 16) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {ahdPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/95 border transition-all duration-300 flex flex-col justify-between ${
                    plan.popular
                      ? "border-red-500 shadow-2xl ring-2 ring-red-500/20 xl:-translate-y-2"
                      : "border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Header & Description */}
                    <div className="mb-4">
                      {!plan.popular && (
                        <span className="inline-block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          {plan.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">
                        {plan.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[38px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400">
                          ₺
                        </span>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 ml-1">
                          / Anahtar Teslim
                        </span>
                      </div>

                      {/* Feature Highlights Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        <span className="inline-flex items-center gap-1 bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-red-100 dark:border-red-900/40">
                          <Eye className="w-3 h-3" /> Renkli Gece
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40">
                          <Volume2 className="w-3 h-3" /> Sesli Kayıt
                        </span>
                        <span className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-900/40">
                          Montaj Dahil
                        </span>
                      </div>
                    </div>

                    {/* Hardware Highlights (Quick Spec Box) */}
                    <div className="bg-slate-50/90 dark:bg-slate-800/60 rounded-2xl p-3.5 mb-5 border border-slate-100 dark:border-slate-700/60 space-y-2">
                      <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        Öne Çıkan Donanım:
                      </div>
                      {plan.hardwareHighlights.map((item, hIdx) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                          >
                            <IconComponent className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                            <span className="font-medium text-[11px] sm:text-xs">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed Features List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
                        Paket Detayları &amp; Hizmetler:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <div className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-tight text-[11px] sm:text-xs">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={`${whatsappBase}${plan.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-3 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                        plan.popular
                          ? "bg-red-600 hover:bg-red-700 text-white shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.01] active:scale-[0.99]"
                          : "bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span className="truncate">{plan.cta}</span>
                    </a>

                    <a
                      href="/#kesif-formu"
                      className="w-full py-2 px-3 rounded-xl text-center text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>veya Ücretsiz Keşif Randevusu Al</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: IP KAMERA PAKETLERİ (Çok Yakında / Özel Teklif) */}
        {activeTab === "ip" && (
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl animate-in fade-in duration-300">
            <div className="max-w-3xl mx-auto text-center">
              {/* Pulsing Network Icon */}
              <div className="w-20 h-20 rounded-3xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400 shadow-md">
                <Network className="w-10 h-10 animate-pulse" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                IP Paket Seçenekleri Güncelleniyor
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                Profesyonel IP Kamera &amp; PoE Ağ Sistemleri
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Yüksek çözünürlüklü dijital IP kamera paketlerimiz çok yakında bu bölümde yer alacaktır. İşletmeniz, fabrikanız, siteniz veya villanız için şimdiden ihtiyacınıza özel IP kamera, NVR sunucusu ve PoE ağ altyapı projelendirmesi için mühendislerimizle hemen iletişime geçebilirsiniz.
              </p>

              {/* IP Features Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    PoE Altyapı
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tek Cat6 kablo üzerinden hem elektrik hem 4K görüntü aktarımı.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    4K Ultra HD &amp; ColorVu
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kristal netliğinde gece renkli ve ultra yüksek çözünürlüklü izleme.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Yapay Zeka Analitiği
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    İnsan ve araç algılama, plaka tanıma, sınır ihlal alarmları.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-2.5">
                    <Server className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Merkezi NVR Sunucu
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sınırsız kanal genişletme ve güvenli şifreli yerel depolama.
                  </p>
                </div>
              </div>

              {/* IP Call to actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20IP%20kamera%20sistemleri%20i%C3%A7in%20bilgi%20ve%20proje%20teklifi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  IP Kamera Teklifi Al (WhatsApp)
                </a>

                <a
                  href="/#kesif-formu"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Wrench className="w-4 h-4 text-red-600 dark:text-red-400" />
                  Ücretsiz Proje Keşfi İste
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SOLAR PANELLİ KAMERA MODELLERİ */}
        {activeTab === "solar" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Solar Highlight Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/15 dark:via-slate-900 dark:to-slate-900 border border-amber-200/80 dark:border-amber-800/50 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-300/60 dark:border-amber-700/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-sm">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      Elektrik ve İnternet Hattı Olmayan Yerlere %100 Bağımsız Çözüm!
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Bağ evi, arsa, tarla, arılık, şantiye ve çiftlikleriniz için kablo çekmeye gerek kalmadan güneş paneli ve 4G SIM kart desteğiyle kesintisiz canlı izleme.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
                    <BatteryCharging className="w-3.5 h-3.5" /> Sıfır Elektrik Faturası
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-semibold">
                    <Radio className="w-3.5 h-3.5" /> 4G SIM Kartlı
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Cards Grid for Solar Models */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {solarModels.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/95 border transition-all duration-300 flex flex-col justify-between ${
                    plan.popular
                      ? "border-amber-500 shadow-2xl ring-2 ring-amber-500/20 xl:-translate-y-2"
                      : "border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Header & Description */}
                    <div className="mb-4">
                      {!plan.popular && (
                        <span className="inline-block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          {plan.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                        {plan.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[38px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                            {plan.priceTitle}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60 shrink-0">
                            Güncel Teklif
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {plan.priceSub}
                        </span>
                      </div>

                      {/* Feature Highlights Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-100 dark:border-amber-900/40">
                          <Sun className="w-3 h-3" /> Güneş Panelli
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40">
                          <Radio className="w-3 h-3" /> Kablosuz
                        </span>
                        <span className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-900/40">
                          2 Yıl Garanti
                        </span>
                      </div>
                    </div>

                    {/* Hardware Highlights (Quick Spec Box) */}
                    <div className="bg-slate-50/90 dark:bg-slate-800/60 rounded-2xl p-3.5 mb-5 border border-slate-100 dark:border-slate-700/60 space-y-2">
                      <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        Öne Çıkan Donanım:
                      </div>
                      {plan.hardwareHighlights.map((item, hIdx) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                          >
                            <IconComponent className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <span className="font-medium text-[11px] sm:text-xs">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed Features List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
                        Model Özellikleri &amp; Hizmetler:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <div className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-tight text-[11px] sm:text-xs">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={`${whatsappBase}${plan.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-3 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                        plan.popular
                          ? "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/25 hover:shadow-amber-600/40 hover:scale-[1.01] active:scale-[0.99]"
                          : "bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span className="truncate">{plan.cta}</span>
                    </a>

                    <a
                      href="/#kesif-formu"
                      className="w-full py-2 px-3 rounded-xl text-center text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>veya Ücretsiz Keşif Randevusu Al</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner for Custom / Enterprise needs */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Daha Farklı veya Özel Bir Projeniz mi Var?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Geniş tarım arazileri, 32+ kameralı kurumsal projeler, plaka tanıma sistemleri ve hibrit solar altyapılar için uzman ekibimizle yerinde ücretsiz keşif yapıyoruz.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="/#kesif-formu"
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
              Uzmanımıza Danışın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
