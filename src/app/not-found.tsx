import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-3xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 shadow-2xl">
        <ShieldAlert className="w-10 h-10" />
      </div>

      <span className="px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
        404 - Sayfa Bulunamadı
      </span>

      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
        Aradığınız Sayfa Mevcut Değil
      </h1>

      <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        Ulaşmaya çalıştığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <Link
          href="/admin"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Yönetici Paneli</span>
        </Link>
      </div>
    </div>
  );
}
