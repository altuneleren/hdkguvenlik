import { Users, Activity, Globe2, Star } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "10.000+",
      label: "Aktif Şirket ve Geliştirici",
      description: "Dünya çapında güvenle kullanılıyor",
    },
    {
      icon: Activity,
      value: "%99.99",
      label: "Uptime Garantisi",
      description: "Kesintisiz ve kurumsal SLA güvencesi",
    },
    {
      icon: Globe2,
      value: "500M+",
      label: "Aylık API İsteği",
      description: "Gecikmesiz yüksek hacimli işlem kapasitesi",
    },
    {
      icon: Star,
      value: "9.9 / 10",
      label: "Kullanıcı Memnuniyeti",
      description: "G2 ve Trustpilot üzerinde lider",
    },
  ];

  return (
    <section id="rakamlar" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-xs flex flex-col items-center text-center hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
