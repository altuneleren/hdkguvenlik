"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Novatech mevcut sistemlerimize ve kod tabanımıza nasıl entegre olur?",
      answer:
        "Novatech, modern REST ve GraphQL API'leri, SDK'lar (Node.js, Python, Go, Java) ve hazır webhook entegrasyonları ile gelir. Kod tabanınıza birkaç satır ekleyerek veya GitHub / GitLab bağlantısı kurarak dakikalar içinde entegrasyon sağlayabilirsiniz.",
    },
    {
      question: "14 günlük deneme sürümünde kredi kartı bilgisi gerekiyor mu?",
      answer:
        "Hayır! 14 günlük deneme sürecini başlatmak için herhangi bir kredi kartı veya ödeme bilgisi girmeniz gerekmez. Tüm profesyonel özellikleri hiçbir taahhüt olmadan test edebilirsiniz.",
    },
    {
      question: "Veri güvenliği ve yasal uyumluluk (KVKK / GDPR / SOC-2) nasıl sağlanıyor?",
      answer:
        "Tüm verileriniz dinlenme esnasında AES-256 ve iletimde TLS 1.3 protokolleri ile şifrelenir. Platformumuz uluslararası SOC-2 Type II, ISO 27001 ve GDPR / KVKK gereksinimlerine %100 uyumludur. Verileriniz asla üçüncü taraflarla paylaşılmaz veya izinsiz model eğitiminde kullanılmaz.",
    },
    {
      question: "Kendi özel bulutumuzda (VPC) veya On-Premise sunucularımızda çalıştırabilir miyiz?",
      answer:
        "Evet, Kurumsal (Enterprise) planımız kapsamında Novatech altyapısını AWS, Google Cloud, Azure veya kurum içi fiziksel sunucu kümelerinizde (Kubernetes / Docker) tamamen izole şekilde barındırabilirsiniz.",
    },
    {
      question: "İstediğim zaman paket değişikliği veya abonelik iptali yapabilir miyim?",
      answer:
        "Kesinlikle. Yönetim panelinizden tek tıkla paketinizi yükseltebilir, düşürebilir ya da dilediğiniz an hiçbir ceza veya ek ücret olmadan aboneliğinizi sonlandırabilirsiniz.",
    },
  ];

  return (
    <section id="sss" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Yardım ve Destek
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Aklınıza takılan soruların yanıtlarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
