import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Wrench, PhoneCall, Smartphone, HardDrive, RefreshCw, Clock, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teknik Servis ve Destek Hizmetleri | HDK Güvenlik",
  description:
    "HDK Güvenlik kamera ve alarm sistemleri arıza onarımı, bakım, kamera açısı ayarı, modem değişimi ve 7/24 teknik destek servisi.",
};

export default function TeknikServisPage() {
  const services = [
    {
      icon: RefreshCw,
      title: "Görüntü Kaybı & Kamera Onarımı",
      desc: "Sinyal kesilmesi, gece görüşü arızası veya karıncalanma yaşayan kameraların yerinde tespiti ve hızlı onarımı.",
    },
    {
      icon: HardDrive,
      title: "Hard Disk Değişimi & Kayıt Kurtarma",
      desc: "Kayıt almayan veya 'Disk Hatası' veren cihazlarda sıfır 7/24 güvenlik diskleriyle değişim ve yapılandırma.",
    },
    {
      icon: Smartphone,
      title: "Modem Değişimi & Mobil Yeniden Bağlantı",
      desc: "İnternet sağlayıcınızı veya modeminizi değiştirdiğinizde cep telefonu canlı izleme ayarlarının yeniden yapılması.",
    },
    {
      icon: Wrench,
      title: "Kablo Yenileme & Kamera Yeri Değişimi",
      desc: "Tadilat veya inşaat kaynaklı kopan kabloların değişimi ve kör noktaları kapatmak için kamera yerlerinin taşınması.",
    },
  ];

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
              <span className="text-red-600 dark:text-red-400">Teknik Servis & Destek</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              Hızlı Müdahale Ekibi
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Güvenlik Kamera Teknik Servis & Destek
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              İster sisteminizi biz kurmuş olalım, ister farklı bir firmadan almış olun; güvenlik kamerası ve alarm sistemlerinizdeki her türlü arıza, bakım ve kablolama ihtiyacınızda Amasya ve tüm bölgede yanınızdayız.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Yerinde Sunduğumuz Teknik Servis Hizmetleri
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900/60 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-red-100/80 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* SLA & Standards */}
          <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-6">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              7/24 Kesintisiz Müdahale Güvencesi
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Kameranız Çalışmıyorsa Güvenliğiniz Tehlikede Demektir.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              HDK Güvenlik gezici teknik servis araçlarımızla Amasya merkez ve ilçelerinde aynı gün, çevre illerde ise en geç 48 saat içinde yerinde servis sağlıyoruz. Orijinal yedek parça ve test cihazlarımızla arızayı yerinde çözüyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Orijinal Yedek Parça</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Yerinde Arıza Tespiti</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 Yıl Servis Garantisi</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20acil%20teknik%20servis%20randevusu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp ile Servis Çağır
              </a>
              <a
                href="tel:+905372568756"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-slate-700"
              >
                <PhoneCall className="w-4 h-4 text-red-500" />
                0537 256 87 56
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
