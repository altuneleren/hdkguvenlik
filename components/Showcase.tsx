"use client";

import { useState } from "react";
import { Check, Terminal, Cpu, Cloud, Lock } from "lucide-react";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<"ai" | "cloud" | "security">("ai");

  const tabData = {
    ai: {
      badge: "Yapay Zeka & Analitik",
      title: "Karmaşık Veri Setlerini Saniyeler İçinde Aksiyona Dönüştürün",
      description:
        "Doğal dil modelleri ve tahminleme algoritmalarıyla verilerinizi işleyin. Kod yazmadan ya da tek bir API çağrısıyla model çıktılarını uygulamanıza bağlayın.",
      points: [
        "Otomatik veri temizleme ve anomali tespiti",
        "Önceden eğitilmiş sektörel AI modelleri",
        "Saniyede 50.000+ sorgu işleme kapasitesi",
        "Detaylı LLM maliyet optimizasyonu",
      ],
      codeHeader: "ai_pipeline.py",
      codeSnippet: `from novatech import AIWorkflow, ModelType

# Yapay zeka veri akışını başlat
workflow = AIWorkflow(
    model=ModelType.TURBO_REASONING,
    stream=True,
    auto_scale=True
)

# Canlı veriyi anında analiz et
result = workflow.execute(
    dataset="realtime_stream",
    prompt="Müşteri terk riskini öngör ve uyar"
)

print(f"Risk Skoru: {result.risk_score}% | Öneri: {result.action}")`,
    },
    cloud: {
      badge: "Bulut & Dağıtım",
      title: "Global Altyapıda Sıfır Konfigürasyonla Canlıya Alın",
      description:
        "Sunucu yönetimiyle vakit kaybetmeyin. Git deponuzu bağlayın, her push işleminde global CDN ağımız otomatik olarak sisteminizi en güncel hale getirsin.",
      points: [
        "38 farklı edge veri merkezinde anında yayılım",
        "Otomatik SSL sertifikası ve DDoS koruması",
        "Trafik dalgalanmalarında anlık auto-scaling",
        "Tek tıkla önceki sürüme anında dönüş (instant rollback)",
      ],
      codeHeader: "deploy_config.yaml",
      codeSnippet: `version: "3.2"
environment: production
region: global_edge

build:
  framework: nextjs
  auto_caching: true

scalability:
  min_instances: 2
  max_instances: 100
  target_cpu_utilization: 75%

monitoring:
  alerts: slack_channel_ops
  zero_downtime_guarantee: true`,
    },
    security: {
      badge: "Kurumsal Güvenlik",
      title: "Verileriniz Her Adımda Kriptografik Olarak Korunur",
      description:
        "Tüm veriler dinlenme (AES-256) ve iletim anında (TLS 1.3) şifrelenir. Rol bazlı erişim denetimleri (RBAC) ve eksiksiz denetim günlükleri daima hazırdır.",
      points: [
        "Uçtan uca AES-256 ve TLS 1.3 şifreleme",
        "Otomatik penetrasyon testi ve zafiyet taraması",
        "Granüler kullanıcı ve API yetkilendirmesi (RBAC)",
        "SOC-2 Type II ve KVKK / GDPR denetim raporları",
      ],
      codeHeader: "security_audit.json",
      codeSnippet: `{
  "compliance_status": "CERTIFIED",
  "standards": ["SOC2_TYPE_2", "GDPR", "ISO_27001"],
  "encryption": {
    "at_rest": "AES-256-GCM",
    "in_transit": "TLS_1_3"
  },
  "last_automated_audit": "2026-09-04T20:45:00Z",
  "vulnerabilities_detected": 0,
  "shield_status": "ARMED_AND_ACTIVE"
}`,
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="cozumler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Çözümlerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Geliştiriciler ve İş Liderleri İçin İnşa Edildi
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            İster tek bir satır kodla entegre olun, ister görsel arayüzümüz üzerinden operasyonlarınızı yönetin.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "ai"
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cpu className="w-4 h-4" />
              Yapay Zeka Motoru
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "cloud"
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cloud className="w-4 h-4" />
              Bulut Altyapısı
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "security"
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Lock className="w-4 h-4" />
              Güvenlik & Uyum
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Text & Bullets) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {current.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              {current.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>

            <ul className="space-y-3 pt-2">
              {current.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Code / Interactive Box) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs">
                <div className="flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>{current.codeHeader}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>
              <pre className="p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
                <code>{current.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
