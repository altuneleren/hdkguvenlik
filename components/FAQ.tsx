"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kamera sistemi kurulduktan sonra aylık veya yıllık bir aidat/ücret öder miyim?",
      answer:
        "Kesinlikle hayır. HDK Güvenlik'ten aldığınız tüm güvenlik kamera sistemleri tek seferlik anahtar teslim ödemelidir. Aylık abonelik, kullanım aidatı veya gizli servis bedeli yoktur. Kurulan tüm kameralar, kayıt cihazı ve diskler tamamen sizin mülkiyetinizde olur.",
    },
    {
      question: "Kameraları cep telefonumdan ve uzaktan canlı izleyebilir miyim?",
      answer:
        "Evet. Kurulumunu yaptığımız tüm sistemler Türkçe menülü iOS (iPhone) ve Android mobil uygulamalarıyla birlikte teslim edilir. Dünyanın neresinde olursanız olun 7/24 canlı yayın izleyebilir, geçmiş kayıtları tarih/saat seçerek saniyeler içinde geriye sarıp tarayabilir ve önemli anların videosunu telefonunuza indirebilirsiniz. Mobil uygulama kullanımı ömür boyu tamamen ücretsizdir.",
    },
    {
      question: "Elektrik veya internet kesildiğinde kameralar kayıt almaya devam eder mi?",
      answer:
        "İnternet kesilse dahi sistem lokal olarak kayıt cihazı ve güvenlik diski üzerine 7/24 kesintisiz kayıt yapmaya devam eder. Elektrik kesintilerine karşı ise opsiyonel Kesintisiz Güç Kaynağı (UPS) entegre edilerek sistemin elektrik yokken de saatlerce çalışması sağlanabilir. Elektrik ve internet geri geldiğinde sistem hiçbir ayar gerektirmeden otomatik olarak kaldığı yerden çalışmayı sürdürür.",
    },
    {
      question: "Gece zifiri karanlıkta görüntü kalitesi nasıldır? Yüz ve plaka seçilir mi?",
      answer:
        "Sistemlerimizde Smart IR gece görüşü ve ColorVu (gece tam renkli) optik sensör teknolojileri kullanılmaktadır. Sıfır ışıkta dahi 20 ila 30 metre mesafeye kadar gündüz parlaklığında görüntü elde edilir. 2K ve 4K Ultra HD çözünürlüklü modellerimizde giriş kapılarında net yüz tanıma ve araç geçiş noktalarında plaka tespiti rahatlıkla yapılabilmektedir.",
    },
    {
      question: "Kayıtlar ne kadar süre geriye dönük saklanır? Hafıza dolunca ne olur?",
      answer:
        "Kayıt süresi seçtiğiniz kamera paketi ve disk kapasitesine (1 TB, 2 TB, 4 TB) bağlı olarak ortalama 15 gün ile 45 gün arasında değişir. Hafıza dolduğunda akıllı döngüsel kayıt (loop recording) devreye girer; cihaz otomatik olarak en eski günün kaydını silerek yerine en yeni günün görüntüsünü yazar. Sizin manuel bir silme veya format işlemi yapmanıza asla gerek kalmaz.",
    },
    {
      question: "Ücretsiz keşif hizmeti nasıl işliyor ve ne kadar sürüyor?",
      answer:
        "Amasya ve çevre bölgelerde ücretsiz keşif talebinizi ilettiğinizde, uzman teknik ekibimiz adresinize gelerek sahanızı inceler. Kör noktaları, kablolama hatlarını ve en doğru kamera açılarını belirler. Mekanınız için en ekonomik ve verimli paket teklifini aynı gün hazırlar. Keşif hizmetimiz için hiçbir ücret veya taahhüt talep edilmez.",
    },
    {
      question: "Cihazlar ve montaj işçiliği ne kadar süre garantilidir?",
      answer:
        "Kullandığımız tüm kameralar, kayıt cihazları ve 7/24 güvenlik diskleri 2 yıl resmi distribütör ve birebir değişim garantilidir. Ayrıca uzman ekibimizin yaptığı kablolama, kanallama ve montaj işçiliği de firmamızın güvencesi altındadır. Olası bir teknik aksaklıkta 7/24 servis desteğimizle yanınızdayız.",
    },
  ];

  return (
    <section id="sss" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            Merak Edilenler & Rehber
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Kamera seçimi, kayıt süreleri, mobil canlı izleme ve montaj süreci hakkında en çok sorulan soruların yanıtları.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800/80 rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? "border-red-300 dark:border-red-500/50 shadow-md ring-1 ring-red-500/10" 
                    : "border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-2 leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-red-600 dark:text-red-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 p-6 sm:p-8 text-center shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Sorunuza burada yanıt bulamadınız mı?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Uzman güvenlik danışmanlarımız aklınıza takılan her konuda yardımcı olmaktan mutluluk duyar.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/905372568756?text=Merhaba%20HDK%20G%C3%BCvenlik%2C%20kamera%20sistemleri%20hakk%C4%B1nda%20bir%20sorum%20vard%C4%B1."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp'tan Sorun</span>
            </a>
            <a
              href="tel:+905372568756"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span>0537 256 87 56</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
