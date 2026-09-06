import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Award, ShieldCheck, RefreshCw, Wrench, Clock, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2 Yıl Birebir Değişim Garantisi ve Servis Koşulları | HDK Güvenlik",
  description:
    "HDK Güvenlik kamera ve alarm sistemlerinde 2 yıl birebir değişim garantisi, montaj işçilik güvencesi ve teknik servis şartları.",
};

export default function GarantiKosullariPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Anasayfa
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span className="text-red-600 dark:text-red-400">Garanti Koşulları</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              Resmi Distribütör Güvencesi
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              2 Yıl Birebir Değişim Garantisi & Servis Koşulları
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              HDK Güvenlik olarak kurduğumuz tüm güvenlik kamera sistemlerinde sıfır risk prensibiyle çalışıyoruz. Haftalarca süren tamir süreçleri yerine arızalı donanımlarda doğrudan birebir değişim sağlıyoruz.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {/* Box 1: Birebir Değişim */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50">
              <h2 className="text-lg sm:text-xl font-bold text-emerald-950 dark:text-emerald-300 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                1. 24 Ay Birebir Değişim Güvencesi
              </h2>
              <p className="text-emerald-900 dark:text-emerald-200">
                Satın aldığınız kamera paketlerindeki tüm güvenlik kameraları, NVR/DVR kayıt cihazları ve 7/24 güvenlik diskleri teslim tarihinden itibaren <strong>2 yıl (24 ay)</strong> boyunca tam garanti kapsamındadır.
              </p>
              <p className="mt-2 text-emerald-900 dark:text-emerald-200">
                Fabrikasyon donanım arızalarında cihazınız haftalarca serviste bekletilmez; teknik ekibimiz tarafından yerinde tespit edilerek aynı veya muadili üst model sıfır cihazla <strong>birebir değişim</strong> yapılır.
              </p>
            </div>

            {/* Box 2: Montaj ve İşçilik */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-red-600 dark:text-red-400" />
                2. Montaj, Kablolama ve Bağlantı İşçilik Garantisi
              </h2>
              <p>
                Sistemin sadece cihazları değil, kurulum esnasında ekibimiz tarafından çekilen CCTV / Cat6 kablolar, kablo kanalları, spiral borular, BNC konnektörler ve adaptör bağlantıları da <strong>1 yıl tam işçilik garantisi</strong> altındadır.
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>Montaj kaynaklı görüntü parazitleri ve soket temassızlıkları ücretsiz giderilir.</li>
                <li>Dış etken olmadan gevşeyen kamera ayakları ve açı sapmaları teknik servisimizce yeniden kalibre edilir.</li>
              </ul>
            </div>

            {/* Box 3: Müdahale Süreleri */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
                3. Hızlı Yerinde Servis Müdahalesi
              </h2>
              <p>
                Güvenlik sistemlerinde kesintiye tahammül olmadığının bilincindeyiz. Arıza bildirimlerinde:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Amasya Merkez & İlçeler
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Arıza bildiriminin ardından en geç <strong>24 saat</strong> içinde yerinde servis müdahalesi.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Bölge & Çevre İller
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Planlı servis araçlarımız ile en geç <strong>48 saat</strong> içinde yerinde servis güvencesi.</div>
                </div>
              </div>
            </div>

            {/* Box 4: Garanti Dışı Kalan Durumlar */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Garanti Kapsamı Dışında Kalan Haller
              </h2>
              <p>Aşağıdaki durumlar üretici ve firma garanti şartları dışında tutulmaktadır:</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-400 text-sm">
                <li>Yıldırım düşmesi, şebekeden kaynaklanan aşırı yüksek voltaj veya yangın/su baskını gibi doğal afetler (bu durumlar için regülatör ve UPS kullanımı önerilir),</li>
                <li>Kameraların kırılması, fiziksel darbe görmesi, kabloların inşaat/tadilat sebebiyle koparılması,</li>
                <li>Yetkisiz üçüncü şahıslar veya farklı servisler tarafından cihaza müdahale edilmesi, iç aksamının açılması veya orijinal yazılımının değiştirilmesi.</li>
              </ul>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Garanti Kapsamında Servis Kaydı Oluşturun</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Kameranızda görüntü kaybı veya teknik bir sorun mu var? WhatsApp servis hattımızdan anında randevu alın.
              </p>
            </div>
            <a
              href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20garanti%20kapsam%C4%B1nda%20teknik%20servis%20talebinde%20bulunmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shrink-0 shadow-lg shadow-emerald-600/20"
            >
              WhatsApp Servis Talebi
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
