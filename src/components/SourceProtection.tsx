"use client";

import { useEffect, useState, useCallback } from "react";
import { ShieldAlert, Lock, X } from "lucide-react";

export default function SourceProtection() {
  const [isOpen, setIsOpen] = useState(false);
  const [shake, setShake] = useState(false);

  const triggerWarning = useCallback(() => {
    setIsOpen(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape closes the warning modal if open
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return;
      }

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Ctrl + Shift + I (Inspect)
      // Ctrl + Shift + J (Console)
      // Ctrl + Shift + C (Element Picker)
      if (isCtrlOrCmd && e.shiftKey) {
        const key = e.key.toLowerCase();
        if (key === "i" || key === "j" || key === "c") {
          e.preventDefault();
          e.stopPropagation();
          triggerWarning();
          return;
        }
      }

      // Ctrl + U (View Page Source)
      if (isCtrlOrCmd && e.key.toLowerCase() === "u") {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return;
      }

      // Ctrl + S (Save Page)
      if (isCtrlOrCmd && e.key.toLowerCase() === "s") {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return;
      }
    };

    // Prevent right click context menu (Inspect / View Page Source)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("contextmenu", handleContextMenu, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true });
    };
  }, [triggerWarning]);

  // Auto-close after 5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="security-alert-title"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all duration-300"
    >
      {/* Modal Dialog Box */}
      <div
        className={`relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border-2 border-red-500/90 shadow-2xl p-6 sm:p-8 text-center transition-all duration-300 ${
          shake ? "scale-105 ring-4 ring-red-500/30" : "scale-100"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Uyarıyı Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pulsing Shield Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900/60 flex items-center justify-center mb-4 text-red-600 dark:text-red-400 shadow-md">
          <ShieldAlert className="w-8 h-8 animate-pulse" />
        </div>

        {/* Security Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-bold tracking-wide uppercase mb-3">
          <Lock className="w-3.5 h-3.5" />
          HDK Güvenlik Koruması
        </div>

        {/* Title */}
        <h3 id="security-alert-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
          Erişim Engellendi
        </h3>

        {/* Exact User Requested Warning Text */}
        <p className="text-base sm:text-lg font-bold text-red-600 dark:text-red-400 mb-2 leading-snug">
          Bu sayfanın kaynağını görüntülemeye izniniz yok.
        </p>

        {/* Sub-description */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
          Telif hakları ve sistem güvenliği gereği geliştirici araçları ve kaynak kod inceleme fonksiyonları sınırlandırılmıştır.
        </p>

        {/* Confirm Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="w-full py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          Tamam, Anladım
        </button>
      </div>
    </div>
  );
}
