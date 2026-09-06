import HDKLogo from "./HDKLogo";

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
          </div>
        </div>
      </div>
    </footer>
  );
}
