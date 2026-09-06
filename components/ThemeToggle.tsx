"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("hdk_theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("hdk_theme", "light");
      } catch {}
    }

    setTheme(nextTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 opacity-60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 hover:scale-105 active:scale-95 ${
        isDark
          ? "border-slate-700 bg-slate-800/90 text-amber-400 hover:bg-slate-700 hover:border-slate-600 shadow-amber-500/10"
          : "border-slate-200 bg-slate-100/90 text-slate-700 hover:bg-slate-200/90 hover:text-slate-900 shadow-slate-900/5"
      } ${className}`}
      title={isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
      aria-label={isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
    >
      <span className="sr-only">
        {isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
      </span>
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
