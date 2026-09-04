"use client";

import { MessageCircle, ShieldCheck } from "lucide-react";

export default function CTA() {
  const whatsappUrl =
    "https://wa.me/905372568756?text=" +
    encodeURIComponent("Merhaba HDK Güvenlik, kamera ve güvenlik sistemleri için ücretsiz keşif ve fiyat teklifi almak istiyorum.");

  return (
    <section id="cta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-zinc-950 via-slate-900 to-zinc-950 px-6 py-16 sm:p-16 overflow-hidden shadow-2xl text-center text-white border border-slate-800">
          {/* Background Decorative Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hemen İletişime Geçin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Mekanınızı Güvence Altına Almaya Hazır Mısınız?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              HDK Güvenlik uzman ekibiyle doğrudan WhatsApp üzerinden görüşün. İhtiyacınıza en uygun kamera ve izleme çözümleri için ücretsiz yerinde keşif planlayalım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all shadow-xl shadow-emerald-600/25 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp: +90 537 256 87 56</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 font-medium">
              Hızlı Yanıt • Ücretsiz Keşif • Profesyonel Destek
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
