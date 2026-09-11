"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown, 
  ShieldCheck, 
  Lock, 
  Award, 
  FileText, 
  Headphones,
  Sun,
  Moon
} from "lucide-react";

// Self-contained ThemeToggle for guaranteed zero-failure deployment
function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("hdk_theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("hdk_theme", "light");
      } catch {}
    }

    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 opacity-60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 hover:scale-105 active:scale-95 ${
        isDark
          ? "border-slate-700 bg-slate-800/90 text-amber-400 hover:bg-slate-700 hover:border-slate-600 shadow-amber-500/10"
          : "border-slate-200 bg-slate-100/90 text-slate-700 hover:bg-slate-200/90 hover:text-slate-900 shadow-slate-900/5"
      } ${className}`}
      title={isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
      aria-label={isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
    >
      <span className="sr-only">
        {isDark ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
      </span>
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace("/#", "").replace("#", "");

      // Eğer zaten ana sayfadaysak sayfayı yenilemeden o bölüme kaydır
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Sayfayı yenilemeden URL hash'ini güncelle
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  // Harici link veya başka sayfadan hash ile gelindiğinde yumuşak kaydır
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  const whatsappUrl =
    "https://wa.me/905372568756?text=" +
    encodeURIComponent("Merhaba HDK Güvenlik, kamera ve güvenlik sistemleri hakkında bilgi ve fiyat teklifi almak istiyorum.");

  const navLinks = [
    { name: "Paketler & Fiyatlar", href: "/#fiyatlar" },
    { name: "Paket Sihirbazı", href: "/#sihirbaz" },
    { name: "Karşılaştır", href: "/#karsilastir" },
    { name: "HDD Hesaplayıcı", href: "/#hesaplayici" },
    { name: "Ücretsiz Keşif", href: "/#kesif-formu" },
    { name: "SSS", href: "/#sss" },
  ];

  const legalPages = [
    {
      name: "KVKK Aydınlatma Metni",
      href: "/kvkk",
      desc: "Kamera & ses kaydı veri işleme esasları",
      icon: ShieldCheck,
      badge: "6698 SK",
    },
    {
      name: "Gizlilik & Güvenlik Politikası",
      href: "/gizlilik-politikasi",
      desc: "Yerel kayıt ve şifreli mobil erişim",
      icon: Lock,
      badge: "SSL/TLS",
    },
    {
      name: "2 Yıl Birebir Değişim Garantisi",
      href: "/garanti-kosullari",
      desc: "Arızalı cihazda anında sıfır ürün değişimi",
      icon: Award,
      badge: "24 Ay",
    },
    {
      name: "Montaj & Teslim Sözleşmesi",
      href: "/montaj-sozlesmesi",
      desc: "Sıfır gizli masraf, temiz kablolama",
      icon: FileText,
      badge: "Taahhütlü",
    },
    {
      name: "Teknik Servis & Destek",
      href: "/teknik-servis",
      desc: "Yerinde arıza tespiti, bakım ve onarım",
      icon: Headphones,
      badge: "7/24 Destek",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLegalDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 xl:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <HDKLogo height={38} showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] xl:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors whitespace-nowrap py-1 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {/* Downward Dropdown: Kurumsal & Yasal */}
            <div 
              ref={dropdownRef} 
              className="relative shrink-0"
              onMouseEnter={() => setLegalDropdownOpen(true)}
              onMouseLeave={() => setLegalDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                className={`flex items-center gap-1.5 text-[13px] xl:text-sm font-medium transition-colors py-1 whitespace-nowrap shrink-0 ${
                  legalDropdownOpen 
                    ? "text-red-600 font-semibold" 
                    : "text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500"
                }`}
                aria-expanded={legalDropdownOpen}
                aria-haspopup="true"
              >
                <span className="whitespace-nowrap">Kurumsal & Yasal</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 transition-transform duration-200 ${
                    legalDropdownOpen ? "rotate-180 text-red-600" : "text-slate-400 dark:text-slate-500"
                  }`}
                />
              </button>

              {/* Dropdown Menu Modal/Card */}
              {legalDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-84 pt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2.5 space-y-1 backdrop-blur-xl">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Yasal Belgeler & Şartnameler
                      </span>
                    </div>

                    {legalPages.map((page) => {
                      const Icon = page.icon;
                      return (
                        <Link
                          key={page.name}
                          href={page.href}
                          onClick={() => setLegalDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors truncate">
                                {page.name}
                              </span>
                              <span className="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 font-medium px-1.5 py-0.5 rounded shrink-0">
                                {page.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {page.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons: Theme Toggle (Left of WhatsApp) + WhatsApp */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <ThemeToggle className="shrink-0" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
              <span className="whitespace-nowrap">
                WhatsApp: <strong className="font-bold tracking-tight">0537 256 87 56</strong>
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="block py-2.5 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg px-3 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Accordion for Legal Pages */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-200">Kurumsal & Yasal Belgeler</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                  mobileLegalOpen ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {mobileLegalOpen && (
              <div className="mt-1 pl-2 space-y-1 border-l-2 border-red-500 ml-3">
                {legalPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.name}
                      href={page.href}
                      onClick={() => {
                        setMobileLegalOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="font-medium text-xs">{page.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp: +90 537 256 87 56</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
