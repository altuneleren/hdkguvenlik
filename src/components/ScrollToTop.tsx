"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial state

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Sayfa başına yukarı çık"
      title="Yukarı Çık"
      className={`fixed bottom-22 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-4 pointer-events-none scale-90"
      } bg-white/95 text-slate-700 hover:text-red-600 hover:bg-slate-50 border-slate-200/90 shadow-slate-900/10 hover:shadow-slate-900/20 dark:bg-slate-900/95 dark:text-slate-200 dark:hover:text-red-400 dark:hover:bg-slate-800 dark:border-slate-800 dark:shadow-black/50 hover:scale-110 active:scale-95 group`}
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 stroke-[2.5]" />
    </button>
  );
}
