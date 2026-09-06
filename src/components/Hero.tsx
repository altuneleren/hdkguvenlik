"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// HDK Güvenlik Resmi Tanıtım ve Pazarlama Slaytları
const HERO_SLIDES = [
  {
    url: "/images/hero/hero-slide-1.jpg",
    alt: "HDK Güvenlik - Güvenliğiniz Bizim Önceliğimiz",
    badge: "Güvenliğiniz Bizim Önceliğimiz",
  },
  {
    url: "/images/hero/hero-slide-2.jpg",
    alt: "HDK Güvenlik Kamera Sistemleri - 7/24 Canlı İzleme & Kolay Kurulum",
    badge: "7/24 Mobil Canlı İzleme & Güvenlik",
  },
  {
    url: "/images/hero/hero-slide-3.jpg",
    alt: "HDK Güvenlik Sistemleri - Ücretsiz Keşif ve Profesyonel Montaj",
    badge: "Ücretsiz Yerinde Keşif & Garantili Montaj",
  },
  {
    url: "/images/hero/hero-slide-4.jpg",
    alt: "HDK Renkli Gece Görüşü - Geceyi Gündüze Çevirir",
    badge: "Renkli Gece Görüş Teknolojisi",
  },
  {
    url: "/images/hero/hero-slide-5.jpg",
    alt: "HDK Telefondan Canlı İzleme - Dünyanın Her Yerinden Kesintisiz Erişim",
    badge: "Telefondan 7/24 Canlı Güvenlik Takibi",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Tam 10 saniyede bir (10000ms) slayt geçişi
  // Slayt her değiştiğinde sayaç tam 10 saniye sıfırdan başlar
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="pt-20 transition-colors duration-300">
      {/* 1. Bölüm: Navbarın Hemen Altındaki 10 Saniyelik HDK Banner Slaytı (Beyaz Arka Plan) */}
      <section className="relative w-full bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        <div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sol & Sağ Slayt Kontrol Okları (Yana Alınmış) */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 lg:left-2 xl:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-900/95 hover:bg-red-600 dark:hover:bg-red-600 text-slate-800 dark:text-slate-100 hover:text-white dark:hover:text-white border border-slate-200/90 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 lg:right-2 xl:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-900/95 hover:bg-red-600 dark:hover:bg-red-600 text-slate-800 dark:text-slate-100 hover:text-white dark:hover:text-white border border-slate-200/90 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slayt Çerçevesi (1024x512 = 2/1 Tam Oran: Resimlerin Hiçbir Yeri Kesilmez) */}
          <div className="relative aspect-[2/1] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-900 group">
            {/* Slayt Resimleri (Her 5 saniyede bir otomatik akar) */}
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.url}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-102 pointer-events-none z-0"
                } transition-transform duration-700`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center select-none"
                />
              </div>
            ))}

            {/* Alt Slayt Noktaları ve Rozet */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 gap-2 pointer-events-none">
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/70 dark:bg-black/70 backdrop-blur-md text-xs font-semibold text-white border border-white/15 pointer-events-auto shadow-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {HERO_SLIDES[currentSlide].badge}
              </span>

              <div className="flex items-center gap-2 bg-slate-950/60 dark:bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 pointer-events-auto shadow-md">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slayt ${idx + 1}: ${slide.badge}`}
                    title={slide.badge}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "w-8 bg-red-600 shadow-sm shadow-red-500"
                        : "w-2 bg-white/50 hover:bg-white/90"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bölüm: Slaytın Altına Alınan "Gözünüz Arkada Kalmasın" Bölümü */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 transition-colors duration-300">
        {/* Dekoratif Arka Plan Işıkları */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 shadow-xs mb-6 hover:bg-red-100/70 dark:hover:bg-red-900/60 transition-colors cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                HDK Güvenlik Alarm & Kamera Sistemleri
              </span>
              <span className="text-xs text-red-600 dark:text-red-400 font-medium">Keşfet &rarr;</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl leading-[1.15] mb-6">
              Gözünüz{" "}
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 bg-clip-text text-transparent">
                Arkada Kalmasın.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl font-normal leading-relaxed mb-8">
              HDK Güvenlik olarak, yaşam ve çalışma alanlarınızı yüksek çözünürlüklü kamera sistemleriyle donatıyoruz. Profesyonel kurulum ve kesintisiz izleme altyapısıyla kontrol daima sizde.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="/#kesif-formu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/25 hover:shadow-red-600/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Ücretsiz Keşif Talebi
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#fiyatlar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all"
              >
                <Play className="w-4 h-4 fill-slate-700 dark:fill-slate-200 text-slate-700 dark:text-slate-200" />
                Kamera Sistemlerini İncele
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
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
          </div>
        </div>
      </section>
    </div>
  );
}
