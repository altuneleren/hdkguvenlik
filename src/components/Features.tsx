import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  Layers, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Yapay Zeka Destekli Otomasyon",
      description:
        "Rutin operasyonları ve karmaşık veri akışlarını kendi kendine öğrenen yapay zeka ajanları ile sıfır insan hatasıyla yönetin.",
      color: "from-indigo-500 to-indigo-700",
      tag: "Popüler",
    },
    {
      icon: Zap,
      title: "Ultra Hızlı Performans",
      description:
        "Global CDN ve kenar bilişim (edge computing) altyapısı sayesinde dünyanın dört bir yanındaki kullanıcılarınıza milisaniyeler içinde yanıt verin.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: ShieldCheck,
      title: "Uçtan Uca Kurumsal Güvenlik",
      description:
        "SOC-2 Tip II, GDPR ve HIPAA uyumlu altyapı. Otomatik veri şifreleme ve gelişmiş tehdit algılama kalkanı her an devrede.",
      color: "from-emerald-500 to-teal-700",
    },
    {
      icon: RefreshCw,
      title: "Sıfır Kesintili Sürekli Dağıtım",
      description:
        "Kod güncellemelerinizi tek tıkla canlıya alın. Akıllı geri alma (rollback) sistemiyle sisteminiz her an %100 ayakta kalır.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Layers,
      title: "100+ Hazır Entegrasyon",
      description:
        "Slack, GitHub, AWS, Stripe, Jira ve sevdiğiniz diğer tüm araçlarla API ve Webhook üzerinden saniyeler içinde haberleşin.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Gelişmiş Gerçek Zamanlı Raporlama",
      description:
        "Tüm metriklerinizi, sistem darboğazlarını ve kullanıcı davranışlarını canlı paneller üzerinden anlık olarak takip edin.",
      color: "from-rose-500 to-red-600",
    },
  ];

  return (
    <section id="ozellikler" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Güçlü Altyapı
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İşletmenizi Geleceğe Taşıyacak Her Şey Bir Arada
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Geleneksel çözümlerin getirdiği karmaşıklığı unutun. Novatech ile ölçeklenmek artık zahmetsiz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.tag && (
                      <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 gap-1 cursor-pointer">
                  <span>Daha fazlasını keşfet</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
