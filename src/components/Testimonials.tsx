import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "İş yerimiz için 8 kameralı güvenlik setini tercih ettik. Ekip aynı gün geldi, kablolamayı ve kanallamayı o kadar temiz ve estetik yaptılar ki mekanda tek bir kablo dağınıklığı kalmadı. Cep telefonundan canlı izleme ve gece görüş netliği kusursuz. HDK Güvenlik'e ilgilerinden ötürü teşekkür ederim.",
      author: "Murat Şahin",
      role: "İşletme Sahibi, Şahin Market",
      location: "Amasya / Merkez",
      rating: 5,
      avatarBg: "bg-red-600",
      initials: "MŞ",
      system: "8 Kameralı Güvenlik Seti",
    },
    {
      quote:
        "Müstakil evimiz için yerinde ücretsiz keşif yaptılar. Gece renkli gösteren ColorVu kameralar gerçekten harika; zifiri karanlıkta bile gündüz gibi renkli görüntü veriyor. İnsan algıladığında telefona gelen anlık uyarılar sayesinde artık evde yokken de gözümüz hiç arkada kalmıyor.",
      author: "Elif Yıldırım",
      role: "Konut & Villa Sahibi",
      location: "Amasya",
      rating: 5,
      avatarBg: "bg-slate-800",
      initials: "EY",
      system: "4 Kameralı ColorVu Seti",
    },
    {
      quote:
        "16 kameralı sistemi büyük depolama alanımız ve sevkiyat sahamız için kurdurduk. Hem araç plaka tanıma netliği hem de 4 TB hard disk kayıt kapasitesi beklentimizin çok üzerinde çıktı. Aylık aidat veya abonelik olmadan anahtar teslim bu kaliteyi sunmaları büyük avantaj.",
      author: "Serdar Çelik",
      role: "Tesis & Lojistik Müdürü",
      location: "Amasya / OSB",
      rating: 5,
      avatarBg: "bg-rose-700",
      initials: "SÇ",
      system: "16 Kameralı Kurumsal Proje",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Gerçek Müşteri Deneyimleri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Güvenliğini Bize Emanet Edenler Ne Diyor?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Amasya ve bölge genelinde evini, iş yerini ve sanayi tesisini HDK Güvenlik sistemleriyle koruma altına alan müşterilerimizin samimi yorumları.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between relative hover:shadow-xl hover:border-red-200 dark:hover:border-red-900/60 transition-all duration-300 group"
            >
              <div>
                {/* Rating Stars & Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200/70 dark:border-emerald-800/60 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Montaj Yapıldı
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="relative mb-8">
                  <Quote className="w-8 h-8 text-red-500/25 mb-3 fill-red-100/60 dark:fill-red-950/40" />
                  <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic relative z-10">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info & System Type */}
              <div className="pt-5 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}
                  >
                    {rev.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {rev.role} • <span className="text-slate-700 dark:text-slate-300 font-medium">{rev.location}</span>
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-lg inline-block">
                  Kurulan Sistem: <strong className="text-slate-800 dark:text-slate-200 font-semibold">{rev.system}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
