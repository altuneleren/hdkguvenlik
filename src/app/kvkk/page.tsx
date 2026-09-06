import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Shield, FileText, ChevronRight, Lock, Eye, Building2, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | HDK Güvenlik",
  description:
    "HDK Güvenlik Kamera ve Alarm Sistemleri Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kamera kayıtları ve müşteri verileri aydınlatma metni.",
};

export default function KVKKPage() {
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
              <span className="text-red-600 dark:text-red-400">KVKK Aydınlatma Metni</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              6698 Sayılı KVKK Uyarınca
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Kişisel Verilerin Korunması ve Kamera Kaydı Aydınlatma Metni
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              HDK Güvenlik Sistemleri olarak müşterilerimizin, çalışanlarımızın ve güvenlik kamerası ile izlenen alanları ziyaret eden tüm bireylerin kişisel verilerinin gizliliğine ve güvenliğine en üst düzeyde önem veriyoruz.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                1. Veri Sorumlusunun Kimliği
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla <strong>HDK Güvenlik Sistemleri</strong> (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenmektedir.
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-sm">
                <li><strong>Unvan:</strong> HDK Güvenlik Kamera ve Alarm Sistemleri</li>
                <li><strong>Hizmet Bölgesi:</strong> Amasya & Tüm Türkiye</li>
                <li><strong>Telefon:</strong> 0537 256 87 56</li>
                <li><strong>E-posta:</strong> info@hdkguvenlik.com</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-red-600 dark:text-red-400" />
                2. Güvenlik Kameraları ile Görüntü Kaydı ve İşlenme Amaçları
              </h2>
              <p>
                HDK Güvenlik tarafından montajı yapılan veya şirketimize ait hizmet noktalarında güvenlik kamerası vasıtasıyla görüntü kaydı yapılmaktadır. Bu faaliyetin temel amaçları şunlardır:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>İş yeri, konut, tesis ve kamusal alanlarda can ve mal güvenliğinin kesintisiz temini,</li>
                <li>Olası hırsızlık, yangın, sabotaj veya izinsiz giriş gibi güvenlik ihlallerinin tespiti ve önlenmesi,</li>
                <li>Meydana gelebilecek hukuki uyuşmazlıklarda adli ve idari makamlara delil teşkil etmesi,</li>
                <li>Hizmet kalitesinin denetimi ve çevre güvenliğinin 7/24 kontrol altında tutulması.</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                3. Özel Hayatın Gizliliği ve Kameraların Konumlandırılması
              </h2>
              <p>
                Şirketimiz, güvenlik kameralarının yerleşimi ve açılarında bireylerin özel hayatın gizliliğini ihlal edecek alanları kesinlikle kayıt altına almamaktadır.
              </p>
              <div className="mt-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 text-amber-900 dark:text-amber-300 text-sm">
                <strong>Önemli Kural:</strong> Soyunma odaları, tuvaletler, banyolar veya özel yaşamın mahrem kabul edildiği alanlarda kamera montajı yapılmaz ve bu alanların izlenmesine aracılık edilmez. Kameralar yalnızca bina giriş-çıkışları, çevre duvarları, otopark, kasa, koridor ve depo gibi güvenlik odaklı ortak alanlara yönlendirilir.
              </div>
            </div>

            {/* Box 4 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />
                4. Bilgilendirme Levhaları ve Şeffaflık
              </h2>
              <p>
                KVKK Madde 10 uyarınca aydınlatma yükümlülüğünün yerine getirilmesi amacıyla, kamera ile izleme yapılan tüm giriş ve ortak alanlarda görünür şekilde <em>“Bu alan HDK Güvenlik Sistemleri ile 7/24 kayıt altına alınmaktadır”</em> ibareli uyarıcı levhalar ve piktogramlar konumlandırılmaktadır.
              </p>
            </div>

            {/* Box 5 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                5. Kayıtların Saklanma Süresi ve Güvenli İmhası
              </h2>
              <p>
                Güvenlik kameraları tarafından kaydedilen dijital video verileri, kurulu sistemin hard disk kapasitesine bağlı olarak ortalama <strong>15 ila 45 gün</strong> süreyle saklanmaktadır. 
              </p>
              <p className="mt-2">
                Bu sürenin sonunda kayıt cihazlarının döngüsel kayıt (FIFO - İlk Giren İlk Çıkar) algoritması devreye girerek en eski kayıtlar yeni kayıtların üzerine otomatik olarak yazılmak suretiyle imha edilir. Adli bir soruşturmaya konu olan kayıtlar ise yasal süreç sonuçlanana kadar yetkili makamların talebiyle muhafaza edilir.
              </p>
            </div>

            {/* Box 6 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                6. Müşteri Bilgileri ve İletişim Verileri
              </h2>
              <p>
                Ücretsiz keşif formu, telefon veya WhatsApp hattımız üzerinden tarafımıza ilettiğiniz Ad, Soyad, Telefon Numarası, Adres/Lokasyon bilgileri yalnızca:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                <li>Yerinde keşif ve montaj randevularının organize edilmesi,</li>
                <li>Fiyat teklifi ve servis sözleşmesinin hazırlanması,</li>
                <li>Garanti ve teknik servis süreçlerinin yürütülmesi amacıyla işlenir ve üçüncü taraflara satılmaz veya devredilmez.</li>
              </ul>
            </div>

            {/* Box 7 */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                7. İlgili Kişinin (Veri Sahibinin) Hakları
              </h2>
              <p>
                KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir.
              </p>
              <p className="mt-3">
                Haklarınızı kullanmak için kimliğinizi tevsik edici belgeler ile birlikte <strong>info@hdkguvenlik.com</strong> e-posta adresine yazılı olarak veya <strong>0537 256 87 56</strong> no'lu telefon üzerinden şirketimize başvurabilirsiniz.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">KVKK ile ilgili sorularınız mı var?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Veri güvenliği ve yasal haklarınız konusunda doğrudan yetkilimizle görüşebilirsiniz.
              </p>
            </div>
            <a
              href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20KVKK%20ve%20veri%20gizlili%C4%9Fi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all shrink-0 shadow-lg shadow-red-600/25"
            >
              WhatsApp ile Danışın
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
