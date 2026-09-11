"use client";

import { useState } from "react";
import { 
  GitCompare, 
  Check, 
  X, 
  HelpCircle, 
  ShieldCheck, 
  Video, 
  Sun, 
  Wifi, 
  Zap, 
  HardDrive, 
  DollarSign,
  Star
} from "lucide-react";

interface ComparisonRow {
  category: string;
  ahd: string;
  ip: string;
  solar: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: "Çözünürlük & Netlik",
    ahd: "1080p Full HD (2 Megapiksel)",
    ip: "4K Ultra HD (8 Megapiksel)",
    solar: "3 MP / 2K QHD Süper Net",
    highlight: true,
  },
  {
    category: "Kablolama Altyapısı",
    ahd: "Koaksiyel 2+1 CCTV Kablosu",
    ip: "Cat6 Ağ Kablosu (Tek kabloda PoE veri + güç)",
    solar: "Tamamen Kablosuz (Sıfır Kablolama)",
    highlight: true,
  },
  {
    category: "Elektrik İhtiyacı",
    ahd: "220V Şebeke Prizi Gereklidir",
    ip: "220V Şebeke Prizi (PoE NVR üzerinden)",
    solar: "Elektrik Gerekmez (Güneş Paneli + Batarya)",
    highlight: true,
  },
  {
    category: "İnternet Altyapısı",
    ahd: "Kayıt için internetsiz çalışır, uzaktan izleme için modem gerekir",
    ip: "Kayıt için internetsiz çalışır, uzaktan izleme için modem gerekir",
    solar: "Sabit modem gerekmez (Dahili 4G SIM Kart)",
    highlight: true,
  },
  {
    category: "Gece Görüşü",
    ahd: "Smart IR LED (20-30 metre siyah-beyaz veya Warm LED)",
    ip: "ColorVu / Full Color (Zifiri karanlıkta gündüz gibi renkli)",
    solar: "PIR Tetiklemeli Projektör + Kızılötesi Gece Görüşü",
  },
  {
    category: "Yapay Zeka Analitiği",
    ahd: "Temel Hareket Algılama",
    ip: "İnsan / Araç Ayrımı, Hat İhlali, Plaka Tanıma",
    solar: "PIR İnsan Isı Algılama (Hatasız Alarm)",
  },
  {
    category: "Kayıt Süresi & Medya",
    ahd: "250GB - 1TB 7/24 Güvenlik Diski (15-45 Gün)",
    ip: "1TB - 4TB 7/24 Güvenlik Diski (30-90 Gün)",
    solar: "MicroSD Kart (128GB) veya Bulut Kaydı (15-30 Gün)",
  },
  {
    category: "Maliyet / Bütçe",
    ahd: "En Ekonomik Çözüm (Fiyat/Performans Şampiyonu)",
    ip: "Yüksek Teknoloji / Profesyonel Kurumsal",
    solar: "Orta Bütçe / Altyapısız Alanlar İçin En Tasarruflu",
  },
  {
    category: "En Çok Tavsiye Edilen Alan",
    ahd: "Ev, Apartman Girişi, Dükkan, Butik İş Yeri",
    ip: "Fabrika, Plaza, Okul, Depo, Otopark, Villa",
    solar: "Bağ Evi, Çiftlik, Tarla, Şantiye, Arı Kovanı Sahası",
  },
];

export default function ProductComparison() {
  const [activeColumn, setActiveColumn] = useState<"all" | "ahd" | "ip" | "solar">("all");

  return (
    <section id="karsilastir" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-4">
            <GitCompare className="w-3.5 h-3.5" />
            Teknoloji Karşılaştırma Rehberi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            AHD mi, IP mi, Yoksa <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Solar Kamera mı?</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Hangi teknolojinin ihtiyaçlarınıza ve bütçenize tam uyduğunu görmek için 9 kritik kriterde yan yana karşılaştırın.
          </p>

          {/* Mobile Column Filters */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveColumn("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activeColumn === "all" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setActiveColumn("ahd")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activeColumn === "ahd" ? "bg-blue-600 text-white border-blue-600" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              AHD Sistem
            </button>
            <button
              onClick={() => setActiveColumn("ip")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activeColumn === "ip" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              IP PoE Sistem
            </button>
            <button
              onClick={() => setActiveColumn("solar")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                activeColumn === "solar" ? "bg-amber-600 text-white border-amber-600" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              Solar 4G
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/80">
                <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                  Kriter / Özellik
                </th>
                
                {(activeColumn === "all" || activeColumn === "ahd") && (
                  <th className="p-4 sm:p-5 text-center w-1/4 bg-blue-50/40 dark:bg-blue-950/20 border-x border-slate-200 dark:border-slate-700">
                    <div className="font-extrabold text-slate-900 dark:text-white text-base">AHD Analog HD</div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold mt-0.5">Ekonomik & Güvenilir</div>
                    <div className="text-xs text-slate-500 mt-1">12.500 ₺'den Başlayan</div>
                  </th>
                )}

                {(activeColumn === "all" || activeColumn === "ip") && (
                  <th className="p-4 sm:p-5 text-center w-1/4 bg-indigo-50/40 dark:bg-indigo-950/20 border-r border-slate-200 dark:border-slate-700">
                    <div className="font-extrabold text-slate-900 dark:text-white text-base">IP PoE Sistem</div>
                    <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">4K Ultra Netlik & Yapay Zeka</div>
                    <div className="text-xs text-slate-500 mt-1">Kurumsal & Profesyonel</div>
                  </th>
                )}

                {(activeColumn === "all" || activeColumn === "solar") && (
                  <th className="p-4 sm:p-5 text-center w-1/4 bg-amber-50/40 dark:bg-amber-950/20">
                    <div className="font-extrabold text-slate-900 dark:text-white text-base">Solar & 4G Sistem</div>
                    <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">Elektriksiz & İnternetsiz</div>
                    <div className="text-xs text-slate-500 mt-1">Güneş Paneli + 4G SIM</div>
                  </th>
                )}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 0 ? "bg-white dark:bg-slate-800" : "bg-slate-50/50 dark:bg-slate-800/40"}
                >
                  {/* Category Title */}
                  <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                    {row.category}
                  </td>

                  {/* AHD */}
                  {(activeColumn === "all" || activeColumn === "ahd") && (
                    <td className="p-4 sm:p-5 text-center text-slate-700 dark:text-slate-300 bg-blue-50/10 border-x border-slate-200 dark:border-slate-700 font-medium">
                      {row.ahd}
                    </td>
                  )}

                  {/* IP */}
                  {(activeColumn === "all" || activeColumn === "ip") && (
                    <td className="p-4 sm:p-5 text-center text-slate-700 dark:text-slate-300 bg-indigo-50/10 border-r border-slate-200 dark:border-slate-700 font-medium">
                      {row.ip}
                    </td>
                  )}

                  {/* Solar */}
                  {(activeColumn === "all" || activeColumn === "solar") && (
                    <td className="p-4 sm:p-5 text-center text-slate-700 dark:text-slate-300 bg-amber-50/10 font-medium">
                      {row.solar}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>

            {/* Table Footer with CTAs */}
            <tfoot>
              <tr className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
                <td className="p-4 sm:p-5 font-bold text-xs text-slate-500 uppercase">
                  Hızlı İşlem
                </td>

                {(activeColumn === "all" || activeColumn === "ahd") && (
                  <td className="p-4 sm:p-5 text-center border-x border-slate-200 dark:border-slate-700">
                    <a
                      href="#fiyatlar"
                      className="inline-block w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-sm"
                    >
                      AHD Paketleri İncele
                    </a>
                  </td>
                )}

                {(activeColumn === "all" || activeColumn === "ip") && (
                  <td className="p-4 sm:p-5 text-center border-r border-slate-200 dark:border-slate-700">
                    <a
                      href="#fiyatlar"
                      className="inline-block w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-sm"
                    >
                      IP Paketleri İncele
                    </a>
                  </td>
                )}

                {(activeColumn === "all" || activeColumn === "solar") && (
                  <td className="p-4 sm:p-5 text-center">
                    <a
                      href="#fiyatlar"
                      className="inline-block w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-all shadow-sm"
                    >
                      Solar Modelleri İncele
                    </a>
                  </td>
                )}
              </tr>
            </tfoot>

          </table>
        </div>

      </div>
    </section>
  );
}
