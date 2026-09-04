import { 
  Camera, 
  ShieldCheck, 
  BellRing, 
  Truck, 
  Phone, 
  MessageCircle 
} from "lucide-react";
import HDKLogo from "./HDKLogo";

export default function UnderConstruction() {
  const whatsappUrl =
    "https://wa.me/905372568756?text=" +
    encodeURIComponent("Merhaba HDK Güvenlik, web siteniz üzerinden ulaşıyorum. Kamera ve güvenlik sistemleri için bilgi ve ücretsiz keşif randevusu almak istiyorum.");

  const services = [
    {
      icon: Camera,
      title: "Yüksek Çözünürlüklü Kameralar",
      desc: "Full HD & 4K Gece Görüşlü IP kamera sistemleri ve cep telefonundan 7/24 kesintisiz canlı izleme.",
    },
    {
      icon: BellRing,
      title: "Akıllı Alarm Sistemleri",
      desc: "Hırsız, yangın ve gaz kaçağı algılama dedektörleri, siren ve anlık mobil acil durum bildirimleri.",
    },
    {
      icon: Truck,
      title: "Ücretsiz Yerinde Keşif",
      desc: "Evinize veya iş yerinize uzman teknik ekibimiz gelerek kör nokta analizi ve anında fiyatlandırma yapar.",
    },
    {
      icon: ShieldCheck,
      title: "2 Yıl Birebir Değişim Garantisi",
      desc: "Tüm cihazlarımız 2 yıl resmi distribütör garantili olup, anahtar teslim montaj desteği sunulmaktadır.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-red-600 selection:text-white">
      {/* Background Decorative Grid and Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-red-950/20 blur-[120px] rounded-full pointer-events-none -z-0" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center">
          <HDKLogo height={46} variant="red-d" />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+905372568756"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            0537 256 87 56
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 px-4 py-2 rounded-full transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Canlı WhatsApp Destek
          </a>
        </div>
      </header>

      {/* Main Center Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex-1 flex flex-col justify-center items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-800/80 text-red-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-lg shadow-red-950/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          Sistemlerimiz Yenileniyor • Çok Yakında Yayındayız
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mb-6">
          Daha Güçlü ve Güvenli Bir Deneyim İçin{" "}
          <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
            Yapım Aşamasındayız.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          HDK Güvenlik olarak sizlere en son teknoloji güvenlik kamera ve alarm sistemleriyle donatılmış kusursuz bir dijital deneyim sunabilmek için web sitemizi güncelliyoruz.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp ile Hemen Ulaşın</span>
          </a>

          <a
            href="tel:+905372568756"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-white transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-red-500" />
            <span>Telefon: 0537 256 87 56</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Clean Footer without password section */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © 2026 HDK Güvenlik Sistemleri. Tüm hakları saklıdır.
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-400">Amasya & Tüm Türkiye</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-500">7/24 Teknik Servis & Montaj</span>
        </div>
      </footer>
    </div>
  );
}
