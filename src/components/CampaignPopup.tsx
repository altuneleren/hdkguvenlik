"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if closed in this session (optional: to avoid annoying page-to-page navigation in the same visit)
    const hasClosed = sessionStorage.getItem("hdk_popup_closed");
    if (!hasClosed) {
      // Small delay for smooth entry after initial page render
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("hdk_popup_closed", "true");
    } catch {}
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll while popup is active
  useEffect(() => {
    if (isOpen) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    "Merhaba HDK Güvenlik, 28.000 TL tutarındaki 19\" Kendinden Sesli Monitörlü ve Kilitli Dolaplı 8'li Kamera Dev Kampanyanız hakkında detaylı bilgi ve sipariş vermek istiyorum."
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Dev Kampanya"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Modal Box (Zero Scroll, perfectly fitted) */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-slate-950 rounded-3xl overflow-hidden border-2 border-red-600/90 shadow-[0_0_60px_rgba(239,68,68,0.4)] flex flex-col animate-in zoom-in-95 duration-300">

        {/* Top Header Badge */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs sm:text-sm font-extrabold py-2 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2 shadow-inner shrink-0">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>HDK Güvenlik &bull; Özel Dev Kampanya</span>
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        </div>

        {/* Poster Image Container (No Scroll) */}
        <div className="relative w-full overflow-hidden bg-black flex items-center justify-center">
          <a
            href={`https://wa.me/905372568756?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full cursor-pointer group flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kampanya-8li-set.jpg"
              alt="HDK Güvenlik Kamera Dev Kampanya 8'li Kamera Sistemi 28.000 TL"
              className="w-auto max-h-[min(58vh,480px)] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="eager"
            />
          </a>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 shrink-0 space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/905372568756?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Kampanya</span>
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+905372568756"
              className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 shrink-0 animate-bounce" />
              <span>Hemen Ara (0537 256 87 56)</span>
            </a>
          </div>

          {/* Dismiss button */}
          <div className="text-center pt-0.5">
            <button
              type="button"
              onClick={handleClose}
              className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
            >
              Kapat ve Siteye Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
