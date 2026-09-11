"use client";

import { useState } from "react";
import { 
  Wand2, 
  Home, 
  Building2, 
  Store, 
  Factory, 
  Sun, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Layers, 
  Eye, 
  Zap, 
  Wifi, 
  RotateCcw,
  Sparkles,
  CheckCircle2,
  FileText
} from "lucide-react";

interface StepOption {
  id: string;
  title: string;
  desc: string;
  badge?: string;
  icon?: any;
}

export default function SystemConfigurator({ onOpenQuoteModal }: { onOpenQuoteModal?: (quoteData: any) => void }) {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [propertyType, setPropertyType] = useState<string>("villa");
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [outdoorRatio, setOutdoorRatio] = useState<number>(50); // % outdoor
  const [nightVisionType, setNightVisionType] = useState<string>("color");
  const [infrastructure, setInfrastructure] = useState<{ hasPower: boolean; hasInternet: boolean }>({
    hasPower: true,
    hasInternet: true,
  });

  // Calculation of recommendation
  const isSolarNeeded = !infrastructure.hasPower;
  const is4GNeeded = !infrastructure.hasInternet;

  let recommendedType = "AHD";
  let packageName = "";
  let estimatedPrice = 0;
  let recommendedHdd = "500 GB";
  let features: string[] = [];

  if (isSolarNeeded) {
    recommendedType = "Solar";
    packageName = `${cameraCount} Adet Solar Panelli & 4G Güneş Enerjili Kamera Sistemi`;
    estimatedPrice = cameraCount * 4750; // Per solar camera unit
    recommendedHdd = "MicroSD / Bulut Kayıt";
    features = [
      "Elektrik veya internet kablosuna ihtiyaç duymaz",
      "Yüksek verimli monokristal güneş paneli",
      "Dahili şarj edilebilir lityum batarya (3-5 gün bulutlu hava desteği)",
      "4G SIM kart desteğiyle telefondan kesintisiz canlı izleme",
      "PIR insan algılama ve anlık telefon bildirimi",
      "2 Yıl HDK Birebir Değişim Garantisi",
    ];
  } else if (nightVisionType === "color" && cameraCount >= 8) {
    recommendedType = "IP";
    packageName = `${cameraCount} Kameralı Profesyonel IP PoE & 4K Güvenlik Çözümü`;
    estimatedPrice = cameraCount === 8 ? 36000 : cameraCount === 16 ? 68000 : cameraCount * 4500;
    recommendedHdd = cameraCount >= 8 ? "2 TB - 4 TB WD Purple" : "1 TB WD Purple";
    features = [
      `${cameraCount} Adet 4K Ultra HD IP PoE Gece Renkli Kamera`,
      "Cat6 tek kablo üzerinden hem veri hem enerji aktarımı (PoE NVR)",
      "Yapay zeka araç plaka ve insan yüzü algılama analitiği",
      `${recommendedHdd} 7/24 kesintisiz güvenlik diski dahil`,
      "Ücretsiz Amasya içi profesyonel montaj, kablolama ve devreye alma",
      "2 Yıl Birebir Değişim & Yerinde Teknik Destek",
    ];
  } else {
    // Standard AHD packages
    recommendedType = "AHD";
    if (cameraCount <= 2) {
      packageName = "2 Kameralı Full HD AHD Güvenlik Seti";
      estimatedPrice = 12500;
      recommendedHdd = "250 GB - 500 GB";
    } else if (cameraCount <= 4) {
      packageName = "4 Kameralı Full HD AHD Güvenlik Seti";
      estimatedPrice = 15000;
      recommendedHdd = "250 GB - 500 GB";
    } else if (cameraCount <= 8) {
      packageName = "8 Kameralı Full HD AHD Güvenlik Seti (En Çok Satan)";
      estimatedPrice = 28000;
      recommendedHdd = "500 GB - 1 TB";
    } else {
      packageName = "16 Kameralı Full HD AHD Güvenlik Seti";
      estimatedPrice = 55000;
      recommendedHdd = "1 TB - 2 TB";
    }

    features = [
      `${cameraCount} Adet 1080p Full HD Gece Görüşlü Güvenlik Kamerası`,
      `${cameraCount <= 4 ? "4" : cameraCount <= 8 ? "8" : "16"} Kanal Hibrit H.265 DVR Kayıt Cihazı`,
      `${recommendedHdd} 7/24 Güvenlik Odaklı Sabit Disk`,
      "12V Merkezi Güvenlik Adaptörü & BNC Jack Konnektörler",
      "Telefondan (iOS / Android) sınırsız kullanıcı canlı izleme",
      "Anahtar teslim montaj ve 2 Yıl Birebir Değişim Garantisi",
    ];
  }

  // Pre-fill link for Inspection Form
  const prefillLink = `#kesif-formu`;

  const resetConfig = () => {
    setCurrentStep(1);
    setPropertyType("villa");
    setCameraCount(4);
    setOutdoorRatio(50);
    setNightVisionType("color");
    setInfrastructure({ hasPower: true, hasInternet: true });
  };

  return (
    <section id="sihirbaz" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
            <Wand2 className="w-3.5 h-3.5" />
            İnteraktif Sistem Konfigüratörü
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            5 Adımda Mekanınıza Özel <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Kamera Paketini Belirleyin</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Güvenlik uzmanı aramadan önce mekanınızın şartlarına en uygun sistemi bulun, anlık maliyetini ve malzeme gereksinimlerini görün.
          </p>

          {/* Stepper Progress Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 max-w-md mx-auto">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <button
                  type="button"
                  onClick={() => step < currentStep && setCurrentStep(step)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                    currentStep === step
                      ? "bg-emerald-600 text-white shadow-lg ring-4 ring-emerald-500/20"
                      : currentStep > step
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 cursor-pointer"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                  }`}
                >
                  {currentStep > step ? <Check className="w-4 h-4" /> : step}
                </button>
                {step < 5 && (
                  <div 
                    className={`w-6 sm:w-10 h-1 transition-all ${
                      currentStep > step ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-800"
                    }`} 
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-medium">
            {currentStep === 1 && "Adım 1: Mekan Türü"}
            {currentStep === 2 && "Adım 2: Kamera Sayısı & Alan"}
            {currentStep === 3 && "Adım 3: Gece Görüşü Tercihi"}
            {currentStep === 4 && "Adım 4: Elektrik & İnternet Altyapısı"}
            {currentStep === 5 && "Adım 5: Size Özel Çözüm & Fiyat"}
          </div>
        </div>

        {/* Wizard Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          
          {/* STEP 1: Property Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-600" />
                Güvenlik Sistemi Hangi Alana Kurulacak?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "ev", title: "Daire / Apartman", desc: "Kapı önü, balkon ve giriş güvenliği için kompakt çözümler.", icon: Home },
                  { id: "villa", title: "Müstakil Ev / Villa", desc: "Geniş bahçe, çevre çiti ve garaj kapsama alanı.", icon: Home, badge: "Popüler" },
                  { id: "dukkan", title: "Dükkan / Mağaza / Ofis", desc: "Kasa önü, reyonlar, müşteri girişi ve vitrin denetimi.", icon: Store },
                  { id: "fabrika", title: "Fabrika / Depo / Atölye", desc: "Geniş saha, yükleme rampası ve personel takip sistemi.", icon: Factory },
                  { id: "acik_alan", title: "Bağ Evi / Tarla / Şantiye", desc: "Elektrik ve internet hattı bulunmayan veya uzak araziler.", icon: Sun },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id)}
                      className={`p-5 rounded-xl border text-left transition-all flex items-start gap-4 ${
                        isSelected 
                          ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${isSelected ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{item.title}</span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Camera Count & Ratio */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-emerald-600" />
                  Kaç Adet Kameraya İhtiyacınız Var?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Kritik kör noktaları, giriş-çıkış kapılarını ve çevreyi hesaba katarak seçin.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { count: 2, label: "2 Kameralı", desc: "Küçük mekan / Giriş" },
                  { count: 4, label: "4 Kameralı", desc: "Standart Ev / Dükkan" },
                  { count: 8, label: "8 Kameralı", desc: "Villa / Depo / Çok Yönlü", badge: "En Çok Satan" },
                  { count: 16, label: "16 Kameralı", desc: "Büyük Tesis / Fabrika" },
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setCameraCount(item.count)}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      cameraCount === item.count
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm"
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {item.badge && (
                      <span className="block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        {item.badge}
                      </span>
                    )}
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{item.count}</div>
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">{item.label}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              {/* Outdoor vs Indoor Ratio */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span>İç Ortam: {Math.round(cameraCount * ((100 - outdoorRatio) / 100))} Kamera</span>
                  <span>Dış Ortam (Suya/Toza Dayanıklı): {Math.round(cameraCount * (outdoorRatio / 100))} Kamera</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="25"
                  value={outdoorRatio}
                  onChange={(e) => setOutdoorRatio(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                  <span>Tamamı İç Mekan</span>
                  <span>%50 İç / %50 Dış</span>
                  <span>Tamamı Dış Mekan (IP66 Korumalı)</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Night Vision & Clarity */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-600" />
                Gece Görüşü ve Görüntü Netliği Tercihiniz
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "color",
                    title: "Zifiri Karanlıkta Renkli Gece Görüşü",
                    desc: "Warm LED destekli ColorVu / Full Color teknoloji. Gece araç rengini, kıyafet rengini ve plaka detayını net gösterir.",
                    badge: "En Çok Tavsiye Edilen",
                  },
                  {
                    id: "ir",
                    title: "Standart Kızılötesi (Siyah-Beyaz) Gece Görüşü",
                    desc: "Klasik IR LED. Işıksız ortamda net siyah-beyaz görüntü sağlar. Ekonomik ve bütçe dostu sistemler için uygundur.",
                    badge: "Ekonomik Seçim",
                  },
                ].map((item) => {
                  const isSelected = nightVisionType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setNightVisionType(item.id)}
                      className={`p-5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{item.title}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Infrastructure (Power & Internet) */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  Mekanda Elektrik ve İnternet Altyapısı Mevcut mu?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Altyapının olmaması sorun değildir; elektriksiz araziler için özel Güneş Enerjili & 4G SIM kartlı sistemlerimiz mevcuttur.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Power toggle */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Şebeke Elektriği (220V)</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{infrastructure.hasPower ? "Elektrik hattı var" : "Elektrik yok (Solar gerekli)"}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInfrastructure(prev => ({ ...prev, hasPower: !prev.hasPower }))}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                      infrastructure.hasPower
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/40 dark:border-red-900"
                    }`}
                  >
                    {infrastructure.hasPower ? "VAR" : "YOK"}
                  </button>
                </div>

                {/* Internet toggle */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Sabit Wi-Fi / İnternet</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{infrastructure.hasInternet ? "Modem / İnternet var" : "İnternet yok (4G SIM gerekli)"}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInfrastructure(prev => ({ ...prev, hasInternet: !prev.hasInternet }))}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                      infrastructure.hasInternet
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900"
                    }`}
                  >
                    {infrastructure.hasInternet ? "VAR" : "YOK"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Recommendation & Summary */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-emerald-500/40 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mekanınıza Özel Önerilen Güvenlik Paketi
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white">{packageName}</h4>
                
                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                    {estimatedPrice.toLocaleString("tr-TR")} ₺
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    (KDV, Donanım, Montaj ve Devreye Alma Dahil)
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="mt-6 pt-6 border-t border-slate-700/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-700/70 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#kesif-formu"
                    className="flex-1 text-center py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all active:scale-[0.98]"
                  >
                    Bu Paketi Keşif Formuna Aktar & Randevu Al
                  </a>
                  {onOpenQuoteModal && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal({
                        packageName,
                        estimatedPrice,
                        cameraCount,
                        features,
                        recommendedHdd,
                      })}
                      className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Resmi Teklif Formu İndir (PDF)
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={resetConfig}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Sihirbazı Sıfırla ve Baştan Başla
                </button>
              </div>
            </div>
          )}

          {/* Navigation Bottom Controls */}
          {currentStep < 5 && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  currentStep === 1
                    ? "opacity-0 pointer-events-none"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Önceki Adım
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                {currentStep === 4 ? "Sonucu ve Fiyatı Gör" : "Sonraki Adım"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
