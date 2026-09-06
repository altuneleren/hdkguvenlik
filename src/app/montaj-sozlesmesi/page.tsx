import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FileCheck2, ClipboardList, CheckCircle2, ShieldCheck, ChevronRight, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anahtar Teslim Montaj ve Kurulum Sözleşmesi | HDK Güvenlik",
  description:
    "HDK Güvenlik Kamera ve Alarm Sistemleri anahtar teslim yerinde montaj, devreye alma ve teslim tesellüm sözleşmesi şartları.",
};

export default function MontajSozlesmesiPage() {
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
              <span className="text-red-600 dark:text-red-400">Montaj Sözleşmesi</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileCheck2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              Şeffaf Hizmet Sözleşmesi
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Anahtar Teslim Kamera & Alarm Montaj Sözleşmesi
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              HDK Güvenlik ile müşterilerimiz arasındaki tüm keşif, donanım temini, kablolama, montaj ve teslim süreçleri yazılı taahhüt ve garanti belgesi altında yürütülür.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {/* Madde 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-red-600 dark:text-red-400" />
                Madde 1 — Sözleşmenin Konusu ve Kapsamı
              </h2>
              <p>
                İşbu sözleşmenin konusu; Müşteri tarafından talep edilen ve keşif formunda mutabık kalınan adet ve nitelikteki güvenlik kameraları, kayıt cihazı (DVR/NVR), depolama ünitesi (Hard Disk), adaptör ve kablolama altyapısının HDK Güvenlik tarafından temin edilmesi, anahtar teslim montajının yapılması ve çalışır vaziyette teslim edilmesidir.
              </p>
            </div>

            {/* Madde 2 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" />
                Madde 2 — HDK Güvenlik'in Taahhüt ve Sorumlulukları
              </h2>
              <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>Montajda kullanılacak tüm cihazların sıfır, orijinal kutusunda ve 2 yıl resmi distribütör garantili olduğunu taahhüt eder.</li>
                <li>Kablolama işlemlerinde estetik kurallara riayet ederek kabloları dekoratif kanallar veya spiral borular içerisinden geçirir; açıkta çirkin kablo bırakmaz.</li>
                <li>Montaj tamamlandıktan sonra her bir kameranın odak, netlik ve gece görüş açı ayarlarını müşteri onayıyla optimize eder.</li>
                <li>Müşterinin akıllı telefon ve tabletlerine mobil izleme yazılımını kurarak detaylı kullanıcı eğitimi verir.</li>
              </ul>
            </div>

            {/* Madde 3 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                Madde 3 — Müşterinin Sorumlulukları
              </h2>
              <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>Montaj günü ve saatinde çalışma alanının hazır bulundurulması ve ekiplerin çalışma sahasına erişiminin sağlanması,</li>
                <li>Kayıt cihazının konumlandırılacağı noktada 220V topraklı priz ve uzaktan izleme isteniyorsa çalışan bir internet modeminin hazır bulundurulması.</li>
              </ul>
            </div>

            {/* Madde 4 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Madde 4 — Fiyatlandırma ve Sürpriz Maliyet Güvencesi
              </h2>
              <p>
                HDK Güvenlik'in sunduğu tüm paket fiyatları <strong>anahtar teslim</strong> olup; cihazlar, hard disk, adaptörler, BNC konnektörler, kablo ve montaj işçiliği fiyata dahildir.
              </p>
              <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300 text-sm">
                <strong>Gizli Masraf Yok:</strong> Keşif formunda belirlenen şartlar dışında müşteriden sonradan herhangi bir ek kablo ücreti, montaj bedeli veya servis ücreti talep edilmez.
              </div>
            </div>

            {/* Madde 5 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Madde 5 — Teslim, Test ve Kabul (Tesellüm Tutanağı)
              </h2>
              <p>
                Montaj işlemi bittikten sonra sistem canlı olarak test edilir; gece görüşü, kayıt oynatma ve mobil bağlantı kontrolleri müşteri huzurunda yapılarak <strong>"Montaj ve Teslim Tutanağı"</strong> imzalanır. Garanti süresi bu tutanağın imzalandığı tarihte başlar.
              </p>
            </div>
          </div>

          {/* Download & Support Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Özel Projeniz İçin Montaj Sözleşmesi Talep Edin</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fabrika, site veya kurumsal projeleriniz için şartname ve sözleşme örneğini doğrudan iletebiliriz.
              </p>
            </div>
            <a
              href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20montaj%20s%C3%B6zle%C5%9Fmesi%20ve%20kurumsal%20teklif%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all shrink-0 shadow-lg shadow-red-600/25"
            >
              Kurumsal Teklif İsteyin
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
