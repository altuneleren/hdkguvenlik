import { ArrowRight, Play, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 blur-3xl rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-100/50 blur-2xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 shadow-xs mb-8 hover:bg-red-100/60 transition-colors cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-semibold text-slate-900">
              HDK Güvenlik Alarm & Kamera Sistemleri
            </span>
            <span className="text-xs text-red-600 font-medium">Keşfet &rarr;</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.15] mb-6">
            Gözünüz{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 bg-clip-text text-transparent">
              Arkada Kalmasın.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-10">
            HDK Güvenlik olarak, yaşam ve çalışma alanlarınızı yüksek çözünürlüklü kamera sistemleriyle donatıyoruz. Profesyonel kurulum ve kesintisiz izleme altyapısıyla kontrol daima sizde.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#kesif-formu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/20 hover:shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Ücretsiz Keşif Talebi
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#cozumler"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
            >
              <Play className="w-4 h-4 fill-slate-700 text-slate-700" />
              Kamera Sistemlerini İncele
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Ücretsiz yerinde keşif</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Uzman montaj ve kurulum</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>7/24 mobil canlı izleme</span>
            </div>
          </div>

          {/* Product Showcase Mockup Card */}
          <div className="w-full max-w-5xl mt-14 sm:mt-16 rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-200/70 to-slate-100 border border-slate-200/80 shadow-2xl relative">
            {/* Top Floating Badge */}
            <div className="absolute -top-4 right-4 sm:right-10 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-800">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>%42 Daha Düşük Sunucu Maliyeti</span>
            </div>

            {/* Browser Header Bar */}
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-inner text-left">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                    app.novatech.io/dashboard/analytics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/40">
                    <ShieldCheck className="w-3 h-3" /> Canlı Sistem Aktif
                  </span>
                </div>
              </div>

              {/* Dashboard Internal Mock UI */}
              <div className="p-4 sm:p-8 bg-slate-950 text-white grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Metric Card 1 */}
                <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
                    <span>Aylık Otomatik İşlem</span>
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    2,845,920
                  </div>
                  <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span>↑ %28.4</span>
                    <span className="text-slate-500">geçen aya göre artış</span>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
                    <span>Yapay Zeka Yanıt Süresi</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    18.4 ms
                  </div>
                  <div className="text-xs text-indigo-400 font-medium">
                    Global 38 Edge Bölgesinde Optimize
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-3">
                    <span>Doğruluk & Güven Oranı</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    %99.98
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Kurumsal SOC2 & GDPR Uyumlu
                  </div>
                </div>

                {/* Preview Banner inside mockup */}
                <div className="lg:col-span-3 bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-800/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-600/30 text-indigo-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Akıllı Veri Yönlendirme Motoru Devrede
                      </h4>
                      <p className="text-xs text-slate-400">
                        Tüm API istekleriniz dinamik olarak en yakın ve en düşük gecikmeli sunucuya yönlendiriliyor.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-900/50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    Tam Otomatik
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
