import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Novatech altyapısına geçtikten sonra bulut sunucu faturalarımız %35 azaldı. Üstelik yapay zeka yönlendirmesi sayesinde yanıt hızımız neredeyse iki katına çıktı.",
      author: "Emre Yılmaz",
      role: "CTO, FinFlow Teknoloji",
      rating: 5,
      avatarBg: "bg-indigo-600",
      initials: "EY",
    },
    {
      quote:
        "Yıllardır aradığımız mikro-servis orkestrasyonunu tek bir arayüzde bulduk. Dağıtım sürelerimiz dakikalardan saniyelere indi. Ekip olarak inanılmaz memnunuz.",
      author: "Selin Karaca",
      role: "Head of Engineering, HyperScale",
      rating: 5,
      avatarBg: "bg-purple-600",
      initials: "SK",
    },
    {
      quote:
        "7/24 teknik destekleri ve kurumsal SLA güvencesi gerçekten olağanüstü. Kritik operasyonlarımızı tereddütsüz Novatech üzerinde yürütüyoruz.",
      author: "Burak Demir",
      role: "Kurucu Ortak, DataPulse AI",
      rating: 5,
      avatarBg: "bg-pink-600",
      initials: "BD",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Müşteri Deneyimleri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sektör Liderlerinin Tercihi
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Binlerce mühendislik ve ürün ekibi işlerini Novatech ile ölçeklendiriyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between relative hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-indigo-200 absolute top-6 right-6" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                >
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
