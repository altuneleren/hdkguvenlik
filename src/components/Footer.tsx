import React from "react";

// Self-contained HDKLogo for guaranteed zero-failure deployment
function HDKLogo({
  className = "",
  height = 36,
  showTagline = true,
  theme = "dark",
}: {
  className?: string;
  height?: number;
  showTagline?: boolean;
  theme?: "light" | "dark";
  variant?: string;
}) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    packages: [
      { name: "4 Kameralı Güvenlik Seti", href: "/#fiyatlar" },
      { name: "8 Kameralı Güvenlik Seti", href: "/#fiyatlar" },
      { name: "16 Kameralı Güvenlik Seti", href: "/#fiyatlar" },
      { name: "Ücretsiz Yerinde Keşif", href: "/#kesif-formu" },
      { name: "Kamera Özellikleri", href: "/#ozellikler" },
    ],
    services: [
      { name: "Ev & Villa Kamera Sistemleri", href: "/#fiyatlar" },
      { name: "İş Yeri & Mağaza Güvenliği", href: "/#fiyatlar" },
      { name: "Fabrika & Tesis Projeleri", href: "/#fiyatlar" },
      { name: "Akıllı Alarm Sistemleri", href: "/#kesif-formu" },
      { name: "7/24 Mobil Canlı İzleme", href: "/#ozellikler" },
    ],
    company: [
      { name: "HDK Güvenlik Hakkında", href: "/#ozellikler" },
      { name: "Amasya & Çevre İller", href: "/#kesif-formu" },
      { name: "Sıkça Sorulan Sorular", href: "/#sss" },
      { name: "WhatsApp Canlı Destek", href: "https://wa.me/905372568756" },
      { name: "Telefon: 0537 256 87 56", href: "tel:+905372568756" },
    ],
    legal: [
      { name: "2 Yıl Birebir Değişim Garantisi", href: "/garanti-kosullari" },
      { name: "Anahtar Teslim Montaj Sözleşmesi", href: "/montaj-sozlesmesi" },
      { name: "Gizlilik & Güvenlik Politikası", href: "/gizlilik-politikasi" },
      { name: "KVKK Aydınlatma Metni", href: "/kvkk" },
      { name: "Teknik Servis & Destek", href: "/teknik-servis" },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <a href="/" className="inline-flex items-center group">
              <HDKLogo height={36} theme="dark" showTagline={true} />
            </a>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Siz sevdiklerinize ve hedeflerinize odaklanırken, güvenliğinizi biz devralıyoruz. HDK Güvenlik ile görünmez bir koruma kalkanının ardında, sınırları değil, sadece huzuru hissedin. Güvenli geleceğinize bugünden atılan modern imza.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                7/24 Kesintisiz Güvenlik & Teknik Destek
              </span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Kamera Paketleri
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.packages.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Hizmet Alanları
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Şirket
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 4 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Yasal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} HDK Güvenlik Sistemleri. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="/garanti-kosullari" className="hover:text-slate-300 transition-colors">
              Garanti & İade Koşulları
            </a>
            <a href="/#kesif-formu" className="hover:text-slate-300 transition-colors">
              Ücretsiz Keşif Talebi
            </a>
            <a 
              href="https://wa.me/905372568756" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors font-medium"
            >
              WhatsApp Destek
            </a>
            <a 
              href="/admin" 
              className="hover:text-red-400 transition-colors font-semibold flex items-center gap-1 text-slate-400"
            >
              <span>🔒 Yönetici Paneli</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
