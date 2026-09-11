"use client";

import { useState, useMemo } from "react";
import { 
  HardDrive, 
  Calculator, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface ResolutionOption {
  id: string;
  name: string;
  resLabel: string;
  baseBitrateH265Mbps: number; // 25fps base
}

const RESOLUTIONS: ResolutionOption[] = [
  { id: "1080p", name: "2 MP Full HD", resLabel: "1920x1080", baseBitrateH265Mbps: 2.0 },
  { id: "2k", name: "4 MP 2K QHD", resLabel: "2560x1440", baseBitrateH265Mbps: 4.0 },
  { id: "4k", name: "8 MP 4K Ultra HD", resLabel: "3840x2160", baseBitrateH265Mbps: 7.5 },
];

const CODECS = [
  { id: "h264", name: "H.264 (Klasik)", factor: 1.8 },
  { id: "h265", name: "H.265 (HEVC)", factor: 1.0 },
  { id: "h265plus", name: "H.265+ (Akıllı)", factor: 0.65 },
];

const RECORDING_MODES = [
  { id: "continuous", name: "7/24 Kesintisiz", factor: 1.0, desc: "Sürekli kayıt, maksimum güvenlik" },
  { id: "motion", name: "Harekete Duyarlı", factor: 0.45, desc: "Yalnızca hareket algılandığında (%55 tasarruf)" },
];

export default function StorageCalculator() {
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [resolutionId, setResolutionId] = useState<string>("1080p");
  const [codecId, setCodecId] = useState<string>("h265plus");
  const [fps, setFps] = useState<number>(20);
  const [recordingModeId, setRecordingModeId] = useState<string>("motion");
  const [targetDays, setTargetDays] = useState<number>(30);

  // Storage calculation logic
  const calculation = useMemo(() => {
    const selectedRes = RESOLUTIONS.find(r => r.id === resolutionId) || RESOLUTIONS[0];
    const selectedCodec = CODECS.find(c => c.id === codecId) || CODECS[1];
    const selectedMode = RECORDING_MODES.find(m => m.id === recordingModeId) || RECORDING_MODES[0];

    // Adjust bitrate based on FPS (base is 25 fps)
    const fpsMultiplier = Math.max(0.6, fps / 25);
    // Effective bitrate in Mbps per camera
    const bitrateMbps = selectedRes.baseBitrateH265Mbps * selectedCodec.factor * fpsMultiplier * selectedMode.factor;

    // Daily storage per camera:
    // (bitrate in Mbps * 3600 * 24) / (8 * 1024) = GB per day per camera
    const dailyGbPerCamera = (bitrateMbps * 86400) / (8 * 1024);
    const totalDailyGb = dailyGbPerCamera * cameraCount;
    const totalNeededGb = totalDailyGb * targetDays;
    const totalNeededTb = totalNeededGb / 1024;

    // Recommended drive sizes (GB)
    const availableDrives = [
      { capacityGb: 500, label: "500 GB Güvenlik Diski" },
      { capacityGb: 1000, label: "1 TB WD Purple / SkyHawk" },
      { capacityGb: 2000, label: "2 TB WD Purple / SkyHawk" },
      { capacityGb: 4000, label: "4 TB WD Purple / SkyHawk" },
      { capacityGb: 6000, label: "6 TB WD Purple / SkyHawk" },
      { capacityGb: 8000, label: "8 TB Kurumsal Güvenlik Diski" },
      { capacityGb: 16000, label: "16 TB RAID / Çoklu Disk Grubu" },
    ];

    const recommendedDrive = availableDrives.find(d => d.capacityGb >= totalNeededGb) || availableDrives[availableDrives.length - 1];

    return {
      bitrateMbps: bitrateMbps.toFixed(2),
      dailyGbPerCamera: dailyGbPerCamera.toFixed(1),
      totalDailyGb: totalDailyGb.toFixed(1),
      totalNeededGb: Math.round(totalNeededGb),
      totalNeededTb: totalNeededTb.toFixed(2),
      recommendedDrive,
    };
  }, [cameraCount, resolutionId, codecId, fps, recordingModeId, targetDays]);

  return (
    <section id="hesaplayici" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Teknik Hesaplama Algoritması
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kamera Kayıt Süresi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">HDD Hesaplayıcı</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Kamera sayısı, çözünürlük ve istenen saklama süresini belirleyin; sisteminizin kaç TB sabit diske ihtiyaç duyduğunu H.265 algoritmasıyla anında görün.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 space-y-7">
            
            {/* 1. Camera Count */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Kamera Sayısı
                </label>
                <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                  {cameraCount} Adet
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="32" 
                value={cameraCount}
                onChange={(e) => setCameraCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                <span>1 Kamera</span>
                <span>8 Kamera</span>
                <span>16 Kamera</span>
                <span>32 Kamera</span>
              </div>
              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[2, 4, 8, 16].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setCameraCount(count)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md border transition-all ${
                      cameraCount === count 
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                        : "bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-400"
                    }`}
                  >
                    {count}'li Set
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Resolution Selection */}
            <div>
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block mb-2">
                Kamera Çözünürlüğü
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {RESOLUTIONS.map((res) => (
                  <button
                    key={res.id}
                    type="button"
                    onClick={() => setResolutionId(res.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      resolutionId === res.id 
                        ? "border-blue-600 bg-blue-50/60 dark:bg-blue-900/30 ring-2 ring-blue-500/20" 
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{res.name}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{res.resLabel}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Compression (Codec) */}
            <div>
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block mb-2">
                Sıkıştırma Teknolojisi
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {CODECS.map((codec) => (
                  <button
                    key={codec.id}
                    type="button"
                    onClick={() => setCodecId(codec.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      codecId === codec.id 
                        ? "border-blue-600 bg-blue-50/60 dark:bg-blue-900/30 ring-2 ring-blue-500/20" 
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{codec.name}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      {codec.id === "h265plus" ? "%70 Az Yer Kaplar" : codec.id === "h265" ? "%50 Tasarruf" : "Eski Standart"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Target Days */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Hedeflenen Geriye Dönük Kayıt Süresi
                </label>
                <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                  {targetDays} Gün
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="90" 
                step="5"
                value={targetDays}
                onChange={(e) => setTargetDays(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                <span>7 Gün</span>
                <span>15 Gün</span>
                <span>30 Gün (Standart)</span>
                <span>60 Gün</span>
                <span>90 Gün</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {[7, 15, 30, 45, 60].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setTargetDays(days)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md border transition-all ${
                      targetDays === days 
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                        : "bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-400"
                    }`}
                  >
                    {days} Gün
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Recording Mode */}
            <div>
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block mb-2">
                Kayıt Modu
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RECORDING_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setRecordingModeId(mode.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      recordingModeId === mode.id 
                        ? "border-blue-600 bg-blue-50/60 dark:bg-blue-900/30 ring-2 ring-blue-500/20" 
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between">
                      {mode.name}
                      {recordingModeId === mode.id && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Result Box */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-7 shadow-xl border border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Önerilen Sabit Disk Kapasitesi
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 flex items-baseline gap-2">
                <span>{calculation.totalNeededTb} TB</span>
                <span className="text-sm font-normal text-blue-300">({calculation.totalNeededGb.toLocaleString("tr-TR")} GB)</span>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <div className="text-xs text-blue-200">En Uygun Model:</div>
                  <div className="text-sm font-bold text-white">{calculation.recommendedDrive.label}</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">✓ 7/24 Güvenlik Odaklı Kesintisiz Yazma</div>
                </div>
              </div>

              {/* Data metrics grid */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-700/60 text-xs">
                <div>
                  <div className="text-slate-400">Günlük Veri Üretimi:</div>
                  <div className="text-sm font-bold text-white mt-0.5">{calculation.totalDailyGb} GB / gün</div>
                </div>
                <div>
                  <div className="text-slate-400">Kamera Başına Bant Genişliği:</div>
                  <div className="text-sm font-bold text-white mt-0.5">{calculation.bitrateMbps} Mbps</div>
                </div>
                <div>
                  <div className="text-slate-400">Seçilen Sistem:</div>
                  <div className="text-sm font-bold text-white mt-0.5">{cameraCount} Kameralı Çözüm</div>
                </div>
                <div>
                  <div className="text-slate-400">Garanti Edilen Süre:</div>
                  <div className="text-sm font-bold text-white mt-0.5">{targetDays} Gün Kayıt</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href="#kesif-formu"
                  className="block w-full text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  Bu Konfigürasyonla Ücretsiz Keşif İste
                </a>
              </div>
            </div>

            {/* Why 7/24 Surveillance HDD Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Neden Normal Bilgisayar Diski Kullanmıyoruz?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Standart masaüstü diskler günde 8 saat okuma odaklı çalışırken, <strong>WD Purple</strong> ve <strong>Seagate SkyHawk</strong> güvenlik diskleri 7/24 kesintisiz video yazımı için özel firmware (AllFrame) içerir. Isınmaz, titreme yapmaz ve veri kaybını sıfıra indirir. HDK Güvenlik setlerinde yalnızca 7/24 güvenlik diskleri kullanılır.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
