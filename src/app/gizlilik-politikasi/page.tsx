import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ShieldCheck, Lock, Key, Smartphone, Wifi, FileCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik ve Güvenlik Politikası | HDK Güvenlik",
  description:
    "HDK Güvenlik Kamera ve Alarm Sistemleri cihaz ve görüntü güvenliği, mobil canlı yayın şifreleme ve veri gizliliği politikası.",
};

export default function GizlilikPolitikasiPage() {
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
              <span className="text-red-600 dark:text-red-400">Gizlilik ve Güvenlik Politikası</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              Cihaz & Veri Güvenliği Standartları
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Gizlilik ve Bilgi Güvenliği Politikası
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              HDK Güvenlik olarak yalnızca fiziksel mekanlarınızı korumakla kalmıyor; güvenlik kameralarınızın görüntü akışlarını, ağ bağlantılarını ve mobil erişim şifrelerinizi en ileri şifreleme standartlarıyla koruma altına alıyoruz.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {/* Section 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                1. Kamera Görüntülerinin ve Kayıtların Gizliliği
              </h2>
              <p>
                Kurulumunu gerçekleştirdiğimiz tüm DVR / NVR kayıt cihazları ve IP kameralar kapalı devre (CCTV) protokolüyle çalışır. Kamera görüntüleri şirketimiz dahil olmak üzere hiçbir harici bulut sunucusuna veya üçüncü taraf platforma otomatik olarak aktarılmaz.
              </p>
              <p className="mt-2 font-medium text-slate-900 dark:text-white">
                Görüntülerin tek sahibi müşteridir; tüm video ve ses kayıtları yalnızca müşterinin mekanındaki fiziksel hard diskte şifreli olarak barındırılır.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-red-600 dark:text-red-400" />
                2. Mobil Canlı İzleme ve P2P Şifreleme Güvenliği
              </h2>
              <p>
                Akıllı telefon ve tablet üzerinden uzaktan izleme sağlayan mobil yazılımlarımız, 128-bit / 256-bit uçtan uca şifreli veri tüneli (SSL / TLS / P2P) üzerinden haberleşir.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>Mobil yayın aktarımı esnasında veriler şifrelenir; aradaki internet sağlayıcıları veya üçüncü şahıslar yayın akışını çözemez.</li>
                <li>Mobil uygulama oturumlarında çift katmanlı doğrulama ve cihaz eşleştirme protokolleri desteklenir.</li>
                <li>Yetkisiz cihazlardan yapılan şüpheli oturum açma denemeleri anında engellenir.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-red-600 dark:text-red-400" />
                3. Fabrika Şifrelerinin Değiştirilmesi ve Parola Güvenliği
              </h2>
              <p>
                Güvenlik kamera sistemlerinde yaşanan en büyük zaafiyet fabrikasyon varsayılan şifrelerin (örn: admin/12345) değiştirilmemesidir. HDK Güvenlik montaj protokolü gereğince:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300 text-sm">
                <strong>Zorunlu Kurulum Protokolümüz:</strong> Montaj tamamlandığında cihazın varsayılan şifresi iptal edilir ve müşterinin bizzat belirlediği harf, rakam ve sembol içeren güçlü bir ana parola tanımlanır. Bu parola şirket personeli dahil hiç kimseyle paylaşılmaz.
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-red-600 dark:text-red-400" />
                4. Yerel Ağ (Modem & Port) Güvenliği
              </h2>
              <p>
                Kurulan sistemlerde dış dünyadan siber saldırı riskini sıfıra indirmek adına modem üzerinde gereksiz port açma işlemleri yapılmaz. Güvenli P2P bulut ID ve QR kodlu güvenli doğrulama altyapısı tercih edilir. Bu sayede modeminizin güvenlik duvarı delinmez ve yerel ağınız dış tehditlere karşı korunur.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-red-600 dark:text-red-400" />
                5. Üçüncü Taraflarla Bilgi Paylaşımı Yasağı
              </h2>
              <p>
                HDK Güvenlik, keşif, teklif veya servis aşamasında edindiği müşteri bilgilerini, mekan krokilerini, kamera açısı yerleşimlerini ve görüntü kayıtlarını hiçbir reklam, analiz veya ticari amaçla üçüncü taraflarla paylaşmaz.
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Kayıtların üçüncü taraflarla paylaşılması yalnızca yetkili Cumhuriyet Başsavcılıkları, Mahkemeler ve Emniyet birimlerinin resmi müzekkere ve yazılı talepleri doğrultusunda yasal zorunluluk çerçevesinde mümkündür.
              </p>
            </div>
          </div>

          {/* Banner Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Cihaz Güvenliği ve Şifre Sıfırlama Desteği</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Kayıt cihazı şifrenizi unuttuysanız veya güvenlik denetimi talep ediyorsanız bize ulaşın.
              </p>
            </div>
            <a
              href="tel:+905372568756"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all shrink-0 shadow-lg shadow-red-600/25"
            >
              Hemen Destek Alın: 0537 256 87 56
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
