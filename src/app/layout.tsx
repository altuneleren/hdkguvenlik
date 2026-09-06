import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import SourceProtection from "@/components/SourceProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDK Güvenlik | Kamera ve Alarm Güvenlik Sistemleri - Amasya",
  description:
    "HDK Güvenlik; Amasya ve tüm Türkiye genelinde yüksek çözünürlüklü güvenlik kamerası, hırsız ve yangın alarm sistemleri, profesyonel montaj ve ücretsiz yerinde keşif hizmeti sunmaktadır.",
  keywords: [
    "HDK Güvenlik",
    "HDK Kamera",
    "Amasya Güvenlik Kamerası",
    "Amasya Alarm Sistemleri",
    "Güvenlik Kamerası Montajı",
    "Kamera Sistemleri Fiyatları",
    "Gece Görüşlü Kamera",
    "İş Yeri Kamera Sistemi",
    "Ev Güvenlik Sistemleri",
    "Ücretsiz Keşif",
  ],
  authors: [{ name: "HDK Güvenlik" }],
  creator: "HDK Güvenlik",
  publisher: "HDK Güvenlik",
  metadataBase: new URL("https://hdkguvenlik.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hdkguvenlik.com",
    siteName: "HDK Güvenlik",
    title: "HDK Güvenlik | Kamera ve Alarm Güvenlik Sistemleri",
    description:
      "Amasya ve tüm Türkiye'de anahtar teslim güvenlik kamera ve alarm sistemleri kurulumu. Ücretsiz keşif ve 2 yıl birebir garanti.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HDK Güvenlik | Kamera ve Alarm Sistemleri",
    description:
      "Amasya ve Türkiye genelinde yüksek çözünürlüklü güvenlik kamerası ve alarm sistemleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// Google Schema.org Yerel İşletme (LocalBusiness / SecurityService) Yapısal Verisi
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: "HDK Güvenlik",
  alternateName: "HDK Kamera ve Güvenlik Sistemleri",
  url: "https://hdkguvenlik.com",
  logo: "https://hdkguvenlik.com/hdk-logo.svg",
  telephone: "+905372568756",
  email: "info@hdkguvenlik.com",
  areaServed: ["Amasya", "Türkiye"],
  serviceType: [
    "Güvenlik Kamerası Kurulumu",
    "Alarm Sistemleri Montajı",
    "7/24 Uzaktan İzleme",
    "Ücretsiz Yerinde Keşif",
  ],
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amasya",
    addressCountry: "TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head suppressHydrationWarning />
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Script
          id="hdk-theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('hdk_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <Script
          id="hdk-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
        <SourceProtection />
      </body>
    </html>
  );
}
