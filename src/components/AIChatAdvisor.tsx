"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  RotateCcw, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: () => void }[];
  cta?: { label: string; href: string; primary?: boolean };
}

export default function AIChatAdvisor() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Admin panelinde chatbot gösterilmez
  if (pathname?.startsWith("/admin")) return null;

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      resetChat();
    }
  }, []);

  const resetChat = () => {
    setMessages([
      {
        id: "msg-1",
        sender: "bot",
        text: "👋 Merhaba! Ben HDK Güvenlik Akıllı Danışmanı. Mekanınız için en doğru ve bütçenize en uygun kamera sistemini 30 saniyede birlikte belirleyelim mi?",
        options: [
          { label: "🚀 Evet, Sistemi Belirleyelim", action: () => handleStartStep1() },
          { label: "💰 Güncel Fiyatları Gör", action: () => handleGoToPricing() },
          { label: "📞 Müşteri Temsilcisini Ara", action: () => handleCallDirect() },
        ],
      },
    ]);
  };

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleStartStep1 = () => {
    setHasInteracted(true);
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: "Evet, sistemi belirleyelim" });
    
    setTimeout(() => {
      addMessage({
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Harika! İlk olarak: Güvenlik sistemini nereye kurmak istiyorsunuz?",
        options: [
          { label: "🏡 Müstakil Ev / Villa", action: () => handleStep2("Müstakil Ev") },
          { label: "🏢 Daire / Apartman", action: () => handleStep2("Daire") },
          { label: "🏪 Dükkan / İş Yeri / Ofis", action: () => handleStep2("İş Yeri") },
          { label: "🌾 Bağ Evi / Tarla / Şantiye", action: () => handleStep2("Açık Alan / Bağ Evi") },
        ],
      });
    }, 400);
  };

  const handleStep2 = (place: string) => {
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: place });

    setTimeout(() => {
      if (place === "Açık Alan / Bağ Evi") {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Arazide 220V şebeke elektriği veya sabit internet modemi bulunuyor mu?",
          options: [
            { label: "❌ Hayır, elektrik veya internet yok", action: () => handleRecommendSolar() },
            { label: "✅ Evet, elektrik hattı mevcut", action: () => handleStep3("Açık Alan", true) },
          ],
        });
      } else {
        handleStep3(place, true);
      }
    }, 400);
  };

  const handleStep3 = (place: string, hasPower: boolean) => {
    addMessage({
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: "Kör nokta bırakmamak için tahmini kaç kamera noktası düşünüyorsunuz?",
      options: [
        { label: "2 Kamera (Küçük alan / Kapı önü)", action: () => handleRecommendPackage(2, place) },
        { label: "4 Kamera (Ev veya Standart Dükkan)", action: () => handleRecommendPackage(4, place) },
        { label: "8 Kamera (Villa / Geniş Alan - En Popüler)", action: () => handleRecommendPackage(8, place) },
        { label: "16 Kamera (Büyük Tesis / Fabrika)", action: () => handleRecommendPackage(16, place) },
      ],
    });
  };

  const handleRecommendSolar = () => {
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: "Elektrik ve internet hattı bulunmuyor" });

    setTimeout(() => {
      addMessage({
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "🎯 Size Özel Çözüm: **Güneş Enerjili Solar Panelli 4G Kamera Sistemi**!\n\nElektrik ve internete ihtiyaç duymadan, kendi güneş paneliyle şarj olur ve dahili 4G SIM kartıyla telefonunuza canlı görüntü aktarır.",
        cta: {
          label: "☀️ Solar Kamera Modellerini ve Fiyatlarını İncele",
          href: "#fiyatlar",
          primary: true,
        },
      });
    }, 500);
  };

  const handleRecommendPackage = (count: number, place: string) => {
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: `${count} Kameralı Çözüm` });

    let pkgTitle = "";
    let price = "";
    if (count === 2) {
      pkgTitle = "2 Kameralı Full HD AHD Güvenlik Seti";
      price = "12.500 ₺";
    } else if (count === 4) {
      pkgTitle = "4 Kameralı Full HD AHD Güvenlik Seti";
      price = "15.000 ₺";
    } else if (count === 8) {
      pkgTitle = "8 Kameralı Full HD AHD Güvenlik Seti (En Çok Tercih Edilen)";
      price = "28.000 ₺";
    } else {
      pkgTitle = "16 Kameralı Profesyonel AHD Set";
      price = "55.000 ₺";
    }

    setTimeout(() => {
      addMessage({
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: `✨ İhtiyacınıza En Uygun Paket:\n\n**${pkgTitle}**\n💵 **Montaj Dahil Fiyat: ${price}**\n\n✓ Gece Görüşlü Kameralar\n✓ 7/24 Güvenlik Diski Dahil\n✓ Telefondan Canlı İzleme\n✓ 2 Yıl Birebir Değişim Garantisi`,
        cta: {
          label: "📋 Bu Paketle Ücretsiz Keşif Randevusu Al",
          href: "#kesif-formu",
          primary: true,
        },
      });
    }, 500);
  };

  const handleGoToPricing = () => {
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: "Fiyatları görmek istiyorum" });
    setTimeout(() => {
      addMessage({
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Tüm AHD, IP ve Solar kamera setlerimizin montaj dahil güncel fiyat listesine aşağıdan ulaşabilirsiniz.",
        cta: {
          label: "💰 Fiyat Tablosuna Git",
          href: "#fiyatlar",
        },
      });
    }, 300);
  };

  const handleCallDirect = () => {
    addMessage({ id: `user-${Date.now()}`, sender: "user", text: "Telefonla görüşmek istiyorum" });
    setTimeout(() => {
      addMessage({
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Müşteri temsilcimize hemen 0537 256 87 56 numarasından ulaşabilir veya WhatsApp'tan yazabilirsiniz.",
        cta: {
          label: "📞 0537 256 87 56'yı Ara",
          href: "tel:05372568756",
          primary: true,
        },
      });
    }, 300);
  };

  return (
    <>
      {/* Trigger Button - Bottom Left (avoid collision with WhatsAppFloat on right) */}
      <div className="fixed bottom-6 left-6 z-40 print:hidden">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-blue-400/30"
          >
            <div className="relative">
              <Bot className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <span>Akıllı Danışman</span>
            <span className="hidden sm:inline-block text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
              Soru Sor
            </span>
          </button>
        ) : null}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[340px] sm:w-[380px] h-[520px] max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200 print:hidden">
          
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  <span>HDK Akıllı Danışman</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-blue-100">Çevrimiçi • 7/24 Yanıt</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Sohbeti Sıfırla"
                className="p-1.5 text-blue-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-blue-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-950/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Interactive Options Buttons */}
                {msg.options && (
                  <div className="mt-2.5 flex flex-col gap-1.5 w-full max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={opt.action}
                        className="w-full text-left py-2 px-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-800/60 rounded-xl transition-all shadow-xs flex items-center justify-between text-xs"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Call To Action Button */}
                {msg.cta && (
                  <div className="mt-3 w-full max-w-[90%]">
                    <a
                      href={msg.cta.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-center py-2.5 px-3 rounded-xl font-bold transition-all shadow-md text-xs ${
                        msg.cta.primary
                          ? "bg-red-600 hover:bg-red-500 text-white shadow-red-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      {msg.cta.label}
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Bar Info */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-600 dark:text-slate-400">
            HDK Güvenlik Akıllı Asistanı • Kesintisiz Destek
          </div>

        </div>
      )}
    </>
  );
}
