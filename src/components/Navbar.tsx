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
  Headphones
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace("/#", "").replace("#", "");

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

          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

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
          <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 select-none group shrink-0">
            <div className="bg-white dark:bg-white px-2.5 py-1 rounded-xl shadow-md inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hdk-logo.png"
                alt="HDK Güvenlik"
                style={{ height: "38px" }}
                className="w-auto object-contain transition-transform group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-slate-200 dark:border-slate-800 pl-2.5 sm:pl-3 shrink-0">
              <span className="text-xs sm:text-[13px] font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight whitespace-nowrap transition-colors">
                Alarm &amp; Güvenlik
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-tight text-blue-600 dark:text-blue-400 leading-tight whitespace-nowrap transition-colors">
                Kamera Sistemleri
              </span>
            </div>
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

          {/* Desktop Action Buttons: WhatsApp */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
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

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex lg:hidden items-center">
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
