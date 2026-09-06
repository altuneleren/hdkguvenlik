import { 
  Eye, 
  Cpu, 
  Smartphone, 
  Video, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Gece Görüşü & ColorVu Renkli Kayıt",
      description:
        "Smart IR ve ColorVu teknolojisiyle zifiri karanlıkta dahi 30 metreye kadar kristal netliğinde, gündüz parlaklığında ve tam renkli güvenlik kaydı elde edin.",
      color: "from-red-500 to-rose-700",
      tag: "Öne Çıkan",
    },
    {
      icon: Cpu,
      title: "Yapay Zeka Destekli İnsan & Araç Algılama",
      description:
        "Rüzgar, yağmur veya hayvan hareketlerinin yol açtığı sahte alarmlara son. Sistem yalnızca insan ve araçları tespit ederek gerçek tehdit anında uyarır.",
      color: "from-amber-500 to-orange-600",
      tag: "Akıllı AI",
    },
    {
      icon: Smartphone,
      title: "7/24 Mobil Canlı İzleme & Bildirimler",
      description:
        "iOS ve Android uyumlu Türkçe mobil uygulama ile dünyanın neresinde olursanız olun kameralarınızı canlı izleyin, geçmiş kayıtları saniyeler içinde tarayın.",
      color: "from-emerald-500 to-teal-700",
    },
    {
      icon: Video,
      title: "2K & 4K Ultra HD Yüksek Çözünürlük",
      description:
        "Yüz tanıma, para alışverişi ve araç plaka okuma gibi kritik alanlarda en ince ayrıntıyı dahi net bir şekilde yakalayan yüksek kaliteli optik sensörler.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: HardDrive,
      title: "H.265+ Akıllı Sıkıştırma & Uzun Kayıt",
      description:
        "Gelişmiş H.265+ video kodeği sayesinde görüntü kalitesinden ödün vermeden disk alanını %70 tasarruflu kullanır, haftalarca kesintisiz geriye dönük kayıt saklar.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "IP67 Su & Toz Geçirmez Dayanıklı Kasa",
      description:
        "Yağmur, kar, don, fırtına ve aşırı sıcağa dayanıklı endüstriyel metal gövdeler ile dış ortamlarda 4 mevsim en zorlu şartlarda kesintisiz çalışır.",
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <section id="ozellikler" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Güçlü Güvenlik Altyapısı
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Son Teknoloji Güvenlik Kamera ve İzleme Çözümleri
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            HDK Güvenlik ile evinizi, iş yerinizi ve tesisinizi 7/24 kesintisiz koruyan akıllı görüntüleme, uzun süreli kayıt ve alarm teknolojileri.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-800/80 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-red-200 dark:hover:border-red-900/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.tag && (
                      <span className="text-[11px] font-semibold bg-red-50 dark:bg-red-950/70 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/70 px-2.5 py-0.5 rounded-full">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <a 
                  href="/#kesif-formu"
                  className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center text-xs font-semibold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Ücretsiz Keşif Talebi Al</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
