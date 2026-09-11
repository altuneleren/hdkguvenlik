"use client";

import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Lock, 
  LogOut, 
  Search, 
  Filter, 
  Download, 
  Phone, 
  MessageCircle, 
  Trash2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Building,
  Video,
  Calendar,
  RefreshCw,
  Eye,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  Smartphone,
  Bell,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

interface Lead {
  id: string;
  fullName: string;
  phone: string;
  location: string;
  propertyType: string;
  systemType: string;
  cameraCount: string;
  notes?: string;
  status: "Beklemede" | "Arandı" | "Keşif Planlandı" | "Montaj Tamamlandı" | "İptal";
  createdAt: string;
  source?: string;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Beklemede": { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  "Arandı": { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  "Keşif Planlandı": { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30" },
  "Montaj Tamamlandı": { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  "İptal": { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
};

const ALL_STATUSES = ["Beklemede", "Arandı", "Keşif Planlandı", "Montaj Tamamlandı", "İptal"] as const;

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Mobil Bildirim Modalı ve Test Durumu
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [isTestingNotify, setIsTestingNotify] = useState(false);
  const [notifyTestResult, setNotifyTestResult] = useState<string | null>(null);

  const handleTestNotification = async () => {
    setIsTestingNotify(true);
    setNotifyTestResult(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isTest: true }),
      });
      const data = await res.json();
      if (data.success) {
        setNotifyTestResult("✅ Test bildirimi telefonunuza gönderildi! ntfy uygulamanızı kontrol edin.");
      } else {
        setNotifyTestResult("❌ Gönderim başarısız oldu.");
      }
    } catch (err) {
      setNotifyTestResult("❌ Bağlantı hatası oluştu.");
    } finally {
      setIsTestingNotify(false);
    }
  };

  // Check login on load
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("hdk_admin_auth");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin pass
    if (passwordInput === "hdk2026" || passwordInput === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("hdk_admin_auth", "true");
      setAuthError("");
      fetchLeads();
    } else {
      setAuthError("Geçersiz yönetici parolası! Lütfen tekrar deneyin.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("hdk_admin_auth");
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Leads fetching error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
        );
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Bu talebi silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;

    // Add UTF-8 BOM for Turkish character support in Excel
    const headers = ["ID", "Ad Soyad", "Telefon", "Konum", "Mekan Türü", "Paket", "Kamera Sayısı", "Durum", "Kaynak", "Tarih", "Notlar"];
    const rows = filteredLeads.map((l) => [
      `"${l.id}"`,
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.location}"`,
      `"${l.propertyType}"`,
      `"${l.systemType}"`,
      `"${l.cameraCount}"`,
      `"${l.status}"`,
      `"${l.source || "Web"}"`,
      `"${new Date(l.createdAt).toLocaleDateString("tr-TR")}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map((r) => r.join(";"))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `hdk-guvenlik-talepler-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered leads
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesSearch =
      searchQuery === "" ||
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.systemType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // KPI Calculations
  const totalCount = leads.length;
  const pendingCount = leads.filter((l) => l.status === "Beklemede").length;
  const scheduledCount = leads.filter((l) => l.status === "Keşif Planlandı").length;
  const completedCount = leads.filter((l) => l.status === "Montaj Tamamlandı").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 bg-red-600/10 border border-red-500/20 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">HDK Yönetim Paneli</h1>
          <p className="text-sm text-slate-400 mt-2">
            Müşteri keşif taleplerini ve sistem siparişlerini yönetmek için giriş yapın.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Yönetici Şifresi
              </label>
              <input
                type="password"
                placeholder="Yönetici şifrenizi giriniz"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
              />
            </div>

            {authError && (
              <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-red-600/30"
            >
              Yönetim Paneline Giriş Yap
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link href="/" className="text-xs text-slate-500 hover:text-white transition-colors">
              ← Ana Sayfaya Geri Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center text-white font-black shadow-md shadow-red-600/30">
              H
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-wide">HDK Güvenlik</span>
              <span className="ml-2 text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-semibold border border-red-500/30">
                Admin CRM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <span>Siteyi Gör</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/30 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Toplam Başvuru</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">{totalCount}</div>
            <div className="text-[11px] text-slate-500 mt-1">Tüm gelen keşif talepleri</div>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 shadow-sm bg-amber-500/5">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Bekleyen Talepler
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{pendingCount}</div>
            <div className="text-[11px] text-amber-500/80 mt-1">Aranması gereken müşteriler</div>
          </div>

          <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-5 shadow-sm bg-purple-500/5">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Keşif Planlanan
            </div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">{scheduledCount}</div>
            <div className="text-[11px] text-purple-500/80 mt-1">Saha ekibi yönlendirildi</div>
          </div>

          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 shadow-sm bg-emerald-500/5">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              Tamamlanan Montaj
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{completedCount}</div>
            <div className="text-[11px] text-emerald-500/80 mt-1">Başarıyla teslim edildi</div>
          </div>
        </div>

        {/* Toolbar: Search, Filter, Export */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="İsim, telefon, konum veya paket ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                statusFilter === "all"
                  ? "bg-red-600 text-white border-red-600 shadow-sm"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
              }`}
            >
              Tümü ({totalCount})
            </button>
            {ALL_STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  statusFilter === status
                    ? "bg-slate-700 text-white border-slate-600 shadow-sm"
                    : "bg-slate-800/60 text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                {status} ({leads.filter((l) => l.status === status).length})
              </button>
            ))}
          </div>

          {/* Export, Mobile Notifications & Refresh */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={fetchLeads}
              title="Yenile"
              className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={() => setIsNotifyModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>📱 Mobil Bildirim Kur</span>
            </button>
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Excel/CSV İndir</span>
            </button>
          </div>

        </div>

        {/* Leads Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-800/60 border-b border-slate-800 text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                  <th className="py-3.5 px-4">Müşteri</th>
                  <th className="py-3.5 px-4">İletişim</th>
                  <th className="py-3.5 px-4">Konum & Mekan</th>
                  <th className="py-3.5 px-4">Talep Edilen Sistem</th>
                  <th className="py-3.5 px-4">Durum</th>
                  <th className="py-3.5 px-4">Tarih</th>
                  <th className="py-3.5 px-4 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-red-500" />
                      Talepler yükleniyor...
                    </td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      Kriterlere uygun müşteri başvurusu bulunamadı.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const statusStyle = STATUS_COLORS[lead.status] || STATUS_COLORS["Beklemede"];
                    const waPhone = lead.phone.replace(/\D/g, "");
                    const formattedWaPhone = waPhone.startsWith("0") ? `9${waPhone}` : waPhone.startsWith("90") ? waPhone : `90${waPhone}`;

                    return (
                      <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                        
                        {/* Name */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white text-sm">{lead.fullName}</div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <span>Kaynak:</span>
                            <span className="text-slate-300 font-medium">{lead.source || "Web Form"}</span>
                          </div>
                        </td>

                        {/* Phone */}
                        <td className="py-3.5 px-4">
                          <div className="font-mono text-white text-xs">{lead.phone}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <a
                              href={`tel:${lead.phone}`}
                              title="Doğrudan Ara"
                              className="text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={`https://wa.me/${formattedWaPhone}?text=${encodeURIComponent(`Merhaba ${lead.fullName}, HDK Güvenlik'ten arıyorum. Keşif talebinizle ilgili görüşebilir miyiz?`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="WhatsApp Mesajı Gönder"
                              className="text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>

                        {/* Location & Property */}
                        <td className="py-3.5 px-4">
                          <div className="text-white text-xs font-medium">{lead.location}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{lead.propertyType}</div>
                        </td>

                        {/* System */}
                        <td className="py-3.5 px-4">
                          <div className="text-white text-xs font-medium max-w-[200px] truncate" title={lead.systemType}>
                            {lead.systemType}
                          </div>
                          <div className="text-[11px] text-blue-400 font-semibold mt-0.5">
                            {lead.cameraCount}
                          </div>
                        </td>

                        {/* Status Select */}
                        <td className="py-3.5 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead["status"])}
                            className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border bg-slate-900 cursor-pointer focus:outline-none ${statusStyle.text} ${statusStyle.border}`}
                          >
                            {ALL_STATUSES.map((st) => (
                              <option key={st} value={st} className="bg-slate-900 text-white">
                                {st}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                          {new Date(lead.createdAt).toLocaleDateString("tr-TR", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              title="Detayları Gör"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteLead(lead.id)}
                              title="Talebi Sil"
                              className="p-1.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                Müşteri Keşif Detayı
              </h3>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Ad Soyad:</span>
                <span className="font-bold text-white">{selectedLead.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Telefon:</span>
                <span className="font-mono text-white">{selectedLead.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Konum:</span>
                <span className="text-white">{selectedLead.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Mekan Türü:</span>
                <span className="text-white">{selectedLead.propertyType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Seçilen Sistem:</span>
                <span className="text-white font-medium">{selectedLead.systemType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Kamera Sayısı:</span>
                <span className="text-blue-400 font-bold">{selectedLead.cameraCount}</span>
              </div>
              <div className="py-1">
                <span className="text-slate-400 block mb-1">Müşteri Notu / Talebi:</span>
                <div className="bg-slate-800 p-3 rounded-xl text-slate-200 text-xs">
                  {selectedLead.notes || "Özel not belirtilmemiş."}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Notification Setup Modal */}
      {isNotifyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Telefona Anlık Bildirim Kurulumu</h3>
                  <p className="text-xs text-slate-400">Yeni keşif talepleri doğrudan cebinize düşsün</p>
                </div>
              </div>
              <button
                onClick={() => setIsNotifyModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <div className="font-bold text-white">Android Uygulamasını Yükleyin</div>
                  <div className="text-slate-400 mt-0.5">
                    Google Play Store'dan ücretsiz ve açık kaynaklı <strong>ntfy</strong> uygulamasını indirin. (Üyelik veya kayıt gerekmez).
                  </div>
                  <a
                    href="https://play.google.com/store/apps/details?id=io.heckel.ntfy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:underline mt-1 font-semibold"
                  >
                    <span>Google Play'de Gör</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div className="flex-1">
                  <div className="font-bold text-white">HDK Bildirim Kanalına Abone Olun</div>
                  <div className="text-slate-400 mt-0.5">
                    Uygulamayı açın, sağ alttaki <strong>"+"</strong> (Abone Ol) simgesine basın ve konu adına şunu yazın:
                  </div>
                  <div className="mt-2 p-2.5 bg-slate-950 rounded-lg border border-slate-700 font-mono text-emerald-400 font-bold flex items-center justify-between text-xs">
                    <span>hdk-guvenlik-leads</span>
                    <span className="text-[10px] text-slate-500">Kanal Adı</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <div className="font-bold text-white">Hazır! Otomatik Bildirim Alacaksınız</div>
                  <div className="text-slate-400 mt-0.5">
                    Müşteri keşif formu doldurduğu an telefonunuz sesli/titreşimli olarak uyanacak; kilit ekranında doğrudan <strong>"Müşteriyi Ara"</strong> butonu çıkacaktır.
                  </div>
                </div>
              </div>
            </div>

            {/* Test button & status */}
            <div className="pt-2 border-t border-slate-800 space-y-3">
              {notifyTestResult && (
                <div className="p-3 rounded-xl bg-slate-800 text-xs text-center border border-slate-700">
                  {notifyTestResult}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={handleTestNotification}
                  disabled={isTestingNotify}
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Bell className="w-4 h-4" />
                  <span>{isTestingNotify ? "Gönderiliyor..." : "🔔 Telefona Test Bildirimi Gönder"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsNotifyModalOpen(false)}
                  className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
                >
                  Kapat
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
