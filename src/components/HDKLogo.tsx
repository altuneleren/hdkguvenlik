import React from "react";

interface HDKLogoProps {
  className?: string;
  height?: number;
  showTagline?: boolean;
  theme?: "light" | "dark";
  variant?: string; // For backward compatibility
}

export default function HDKLogo({
  className = "",
  height = 42,
  showTagline = true,
  theme = "light",
}: HDKLogoProps) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Logo container: on dark backgrounds wrap in crisp white pill so black strokes are razor-sharp */}
      <div
        className={
          isDark
            ? "bg-white px-2.5 py-1 rounded-xl shadow-md inline-flex items-center"
            : "dark:bg-white dark:px-2.5 dark:py-1 dark:rounded-xl dark:shadow-md inline-flex items-center transition-all"
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hdk-logo.png"
          alt="HDK Güvenlik"
          style={{ height: `${height}px` }}
          className="w-auto object-contain transition-transform group-hover:scale-[1.03]"
        />
      </div>

      {showTagline && (
        <div
          className={`flex flex-col justify-center border-l shrink-0 ${
            isDark
              ? "border-slate-800 pl-2.5 sm:pl-3"
              : "border-slate-200 dark:border-slate-800 pl-2.5 sm:pl-3"
          }`}
        >
          <span
            className={`text-xs sm:text-[13px] font-bold tracking-tight leading-tight whitespace-nowrap transition-colors ${
              isDark
                ? "text-white group-hover:text-blue-400"
                : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
            }`}
          >
            Alarm &amp; Güvenlik
          </span>
          <span
            className={`text-[11px] sm:text-xs font-semibold tracking-tight leading-tight whitespace-nowrap transition-colors ${
              isDark
                ? "text-blue-400"
                : "text-blue-600 dark:text-blue-400"
            }`}
          >
            Kamera Sistemleri
          </span>
        </div>
      )}
    </div>
  );
}
