"use client";

import { useState } from "react";
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Building2, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  FileText
} from "lucide-react";

export interface QuoteData {
  packageName: string;
  estimatedPrice: number;
  cameraCount: number;
  recommendedHdd?: string;
  features?: string[];
  customerName?: string;
  customerPhone?: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: QuoteData | null;
}

export default function QuoteModal({ isOpen, onClose, data }: QuoteModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  if (!isOpen || !data) return null;

  const quoteNo = `HDK-TKF-${Math.floor(100000 + Math.random() * 900000)}`;
  const today = new Date().toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      
      {/* Modal Card */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden print:border-none print:shadow-none print:text-black print:bg-white">
        
        {/* Screen Toolbar (Hidden on Print) */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between print:hidden border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-500" />
            <span className="font-bold text-sm">Resmi Teklif ve Proje Dökümü</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Yazdır / PDF Kaydet</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-quote" className="p-6 sm:p-10 space-y-8 print:p-4 text-slate-800 dark:text-slate-200 print:text-black">
          
          {/* Header & Logo */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b-2 border-red-600">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">
                  H
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black tracking-tight">
                    HDK GÜVENLİK SİSTEMLERİ
                  </h1>
                  <p className="text-xs text-slate-500 print:text-gray-600">
                    Kamera, Alarm & Yangın Güvenlik Teknolojileri
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1">
              <div className="font-bold text-slate-900 dark:text-white print:text-black">Teklif No: <span className="text-red-600 font-mono">{quoteNo}</span></div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">Tarih: {today}</div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">Geçerlilik: 15 Gün</div>
            </div>
          </div>

          {/* Customer & Company Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/60 print:bg-gray-50 p-4 rounded-xl text-xs">
            <div>
              <span className="text-slate-400 print:text-gray-500 font-bold uppercase block mb-1">Hizmet Veren:</span>
              <div className="font-bold text-slate-900 dark:text-white print:text-black">HDK Güvenlik Sistemleri</div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">Telefon: 0537 256 87 56</div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">Hizmet Bölgesi: Amasya & Türkiye Geneli</div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">Garanti: 2 Yıl Birebir Değişim</div>
            </div>

            <div>
              <span className="text-slate-400 print:text-gray-500 font-bold uppercase block mb-1">Teklif Verilen Müşteri:</span>
              <div className="print:hidden space-y-1 mb-2">
                <input
                  type="text"
                  placeholder="Müşteri Adı Soyadı (Yazdırmak için yazın)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                />
              </div>
              <div className="font-bold text-slate-900 dark:text-white print:text-black text-sm">
                {customerName || data.customerName || "Sayın Müşterimiz"}
              </div>
              <div className="text-slate-600 dark:text-slate-400 print:text-gray-600">
                {customerPhone || data.customerPhone || "Ücretsiz Keşif Projesi"}
              </div>
            </div>
          </div>

          {/* Items & Services Table */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider mb-3">
              Önerilen Güvenlik Paketi ve Donanım Listesi
            </h3>

            <div className="border border-slate-200 dark:border-slate-700 print:border-gray-300 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 print:bg-gray-100 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 print:text-gray-700 font-bold">
                    <th className="p-3">Kalem / Donanım</th>
                    <th className="p-3 text-center">Miktar</th>
                    <th className="p-3">Özellik / Açıklama</th>
                    <th className="p-3 text-right">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 print:divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white print:text-black">
                      Güvenlik Kameraları
                    </td>
                    <td className="p-3 text-center font-bold">{data.cameraCount} Adet</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 print:text-gray-600">
                      Gece Görüşlü, Su ve Toz Geçirmez Dış/İç Ortam Kamera
                    </td>
                    <td className="p-3 text-right text-emerald-600 font-bold">Dahil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white print:text-black">
                      Kayıt Cihazı (DVR / NVR)
                    </td>
                    <td className="p-3 text-center font-bold">1 Adet</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 print:text-gray-600">
                      H.265+ Sıkıştırma, Mobil Telefon Canlı İzleme Destekli
                    </td>
                    <td className="p-3 text-right text-emerald-600 font-bold">Dahil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white print:text-black">
                      Güvenlik Sabit Diski
                    </td>
                    <td className="p-3 text-center font-bold">1 Adet</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 print:text-gray-600">
                      {data.recommendedHdd || "7/24 Kesintisiz Video Odaklı HDD"}
                    </td>
                    <td className="p-3 text-right text-emerald-600 font-bold">Dahil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white print:text-black">
                      Kablolama & Konnektörler
                    </td>
                    <td className="p-3 text-center font-bold">Saha Boyu</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 print:text-gray-600">
                      CCTV / Cat6 Kablo, BNC/RJ45 jacklar, 12V Merkezi Güç Kaynağı
                    </td>
                    <td className="p-3 text-right text-emerald-600 font-bold">Dahil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 dark:text-white print:text-black">
                      İşçilik, Montaj & Ayar
                    </td>
                    <td className="p-3 text-center font-bold">1 Hizmet</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 print:text-gray-600">
                      Profesyonel kablo kanallama, açı ayarı ve cep telefonu kurulumu
                    </td>
                    <td className="p-3 text-right text-emerald-600 font-bold">Ücretsiz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Total Box */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-slate-900 text-white rounded-xl print:bg-gray-100 print:text-black border border-slate-800 print:border-gray-300">
            <div>
              <div className="text-xs text-slate-400 print:text-gray-600 font-medium">Seçilen Sistem:</div>
              <div className="font-bold text-sm sm:text-base text-white print:text-black">{data.packageName}</div>
              <div className="text-[11px] text-emerald-400 print:text-emerald-700 mt-0.5">
                ✓ 2 Yıl Yerinde Birebir Değişim Garantisi
              </div>
            </div>
            <div className="mt-4 sm:mt-0 text-left sm:text-right">
              <div className="text-xs text-slate-400 print:text-gray-600">Anahtar Teslim Toplam Fiyat:</div>
              <div className="text-2xl sm:text-3xl font-black text-red-500 print:text-black">
                {data.estimatedPrice.toLocaleString("tr-TR")} ₺
              </div>
              <div className="text-[10px] text-slate-400 print:text-gray-500">KDV ve Montaj Dahildir</div>
            </div>
          </div>

          {/* Terms & Guarantee Notes */}
          <div className="text-[11px] text-slate-600 dark:text-slate-400 print:text-gray-600 space-y-1.5 border-t border-slate-200 dark:border-slate-800 print:border-gray-300 pt-4">
            <p><strong>1. Garanti Şartı:</strong> Kurulan tüm donanımlar 2 yıl boyunca HDK Güvenlik birebir değişim garantisi kapsamındadır.</p>
            <p><strong>2. Montaj Süreci:</strong> Randevu teyidi ile aynı gün veya en geç 24 saat içinde uzman saha ekibimizce montaj tamamlanır.</p>
            <p><strong>3. Mobil Erişim:</strong> Kurulum sonrası tüm aile bireylerinin veya şirket yöneticilerinin telefonlarına izleme programı ücretsiz kurulur.</p>
          </div>

          {/* Signature Area for Official Proposal */}
          <div className="pt-6 grid grid-cols-2 gap-8 text-center text-xs border-t border-slate-200 dark:border-slate-800 print:border-gray-300">
            <div>
              <div className="font-bold text-slate-900 dark:text-white print:text-black">HDK GÜVENLİK</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Kaşe / Yetkili İmza</div>
              <div className="h-14 flex items-center justify-center font-serif italic text-red-600 text-lg font-bold">
                HDK Güvenlik Ltd.
              </div>
            </div>

            <div>
              <div className="font-bold text-slate-900 dark:text-white print:text-black">MÜŞTERİ ONAYI</div>
              <div className="text-slate-500 text-[11px] mt-0.5">İmza / Tarih</div>
              <div className="h-14 border-b border-dashed border-slate-300 dark:border-slate-700 print:border-gray-400" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
