import HDKLogo from "./HDKLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Özellikler", href: "#ozellikler" },
      { name: "Yapay Zeka Motoru", href: "#cozumler" },
      { name: "Bulut Dağıtım", href: "#cozumler" },
      { name: "Fiyatlandırma", href: "#fiyatlar" },
      { name: "Sürüm Notları (Changelog)", href: "#" },
    ],
    solutions: [
      { name: "SaaS Girişimleri", href: "#" },
      { name: "Fintech & E-ticaret", href: "#" },
      { name: "Kurumsal Dönüşüm", href: "#" },
      { name: "Yazılım Ajansları", href: "#" },
      { name: "Geliştirici Araçları", href: "#" },
    ],
    company: [
      { name: "Hakkımızda", href: "#" },
      { name: "Kariyer", href: "#" },
      { name: "Basın Kiti", href: "#" },
      { name: "Blog & Makaleler", href: "#" },
      { name: "İletişim", href: "#" },
    ],
    legal: [
      { name: "Gizlilik Politikası", href: "#" },
      { name: "Kullanım Koşulları", href: "#" },
      { name: "Güvenlik & SOC-2", href: "#" },
      { name: "KVKK Aydınlatma Metni", href: "#" },
      { name: "Çerez Tercihleri", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <a href="#" className="flex items-center">
              <HDKLogo height={40} variant="red-d" />
            </a>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Siz sevdiklerinize ve hedeflerinize odaklanırken, güvenliğinizi biz devralıyoruz. HDK Güvenlik ile görünmez bir koruma kalkanının ardında, sınırları değil, sadece huzuru hissedin. Güvenli geleceğinize bugünden atılan modern imza.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Tüm Sistemler Operasyonel
              </span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Ürün
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.product.map((item) => (
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
              Çözümler
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.solutions.map((item) => (
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
          <p>© {currentYear} Novatech Inc. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Güvenlik Bildirisi
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Sistem Durumu
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              API Dökümantasyonu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
