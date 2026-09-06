import { Camera, ShieldCheck, Award, Star } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Camera,
      value: "2.500+",
      label: "Tamamlanan Montaj & Kurulum",
      description: "Ev, iş yeri, villa ve fabrikalarda sorunsuz çalışan sistemler",
    },
    {
      icon: ShieldCheck,
      value: "7/24",
      label: "Kesintisiz Kayıt & İzleme",
      description: "Smart IR gece görüşü ve telefona anlık alarm bildirimleri",
    },
    {
      icon: Award,
      value: "2 Yıl",
      label: "Birebir Değişim Garantisi",
      description: "Resmi distribütör donanımları ve öncelikli teknik servis",
    },
    {
      icon: Star,
      value: "%99.8",
      label: "Müşteri Memnuniyeti",
      description: "Amasya ve bölge genelinde yüzlerce kurumsal referans",
    },
  ];

  return (
    <section id="rakamlar" className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-900">
      {/* Decorative Red/Slate Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/25 via-slate-950 to-red-950/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md flex flex-col items-center text-center hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-950/60 border border-red-900/50 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-slate-200 mb-1.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
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
