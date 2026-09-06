"use client";

import { useState, useEffect } from "react";
import { Lock, Eye, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";

export default function PreviewModeBanner() {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  // If opened with ?preview=hdk, auto-persist the cookie for seamless navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("preview")) {
        fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "enable", preview: "hdk" }),
        }).catch(() => {});
      }
    }
  }, []);

  const handleLockSite = async () => {
    setLoading(true);
    try {
      await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "disable" }),
      });
      window.location.href = "/";
    } catch {
      window.location.reload();
    }
  };

  return (
    <aside aria-label="Geliştirici Önizleme Modu Çubuğu" className="fixed bottom-4 left-4 z-50 max-w-md animate-fade-in">
      <div className="bg-slate-900/95 text-white border border-red-500/40 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden transition-all">
        {/* Header Bar */}
        <div className="px-4 py-3 flex items-center justify-between gap-3 bg-red-950/40 border-b border-red-900/30">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-red-400" />
              Yönetici Önizleme Modu
            </span>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            title={collapsed ? "Genişlet" : "Daralt"}
          >
            {collapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Body Content */}
        {!collapsed && (
          <div className="p-4 space-y-3 text-xs">
            <p className="text-slate-300 leading-relaxed">
              Şu anda siteyi <strong className="text-white">düzenleme ve geliştirme</strong> modundasınız. Dışarıdan giren tüm ziyaretçiler <strong className="text-red-400">Yapım Aşamasında</strong> ekranı görmektedir.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={handleLockSite}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-all shadow-md shadow-red-600/25 active:scale-[0.98]"
              >
                {loading ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Lock className="w-3.5 h-3.5" />
                )}
                <span>Siteyi Kilitle (Ziyaretçi Görünümüne Geç)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
