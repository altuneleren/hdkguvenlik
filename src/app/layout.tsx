import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import SourceProtection from "@/components/SourceProtection";
import CampaignPopup from "@/components/CampaignPopup";
import AIChatAdvisor from "@/components/AIChatAdvisor";
import PWAInstaller from "@/components/PWAInstaller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  title: "Amasya Güvenlik Kamerası & Kamera Sistemleri Firması | HDK Güvenlik",
  description:
    "Amasya güvenlik kamerası ve alarm sistemleri firması HDK Güvenlik. Amasya Merkez, Merzifon, Suluova ve tüm ilçelerde ev & iş yeri için 4K gece görüşlü kamera montajı ve ücretsiz keşif: 0537 256 87 56.",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Amasya kamera",
    "Amasya güvenlik kamerası",
    "Amasya kamera sistemleri",
    "Kamera sistemleri firması Amasya",
    "Amasya kamera montajı",
    "Amasya alarm sistemleri",
    "Amasya güvenlik sistemleri",
    "Amasya kamera kurulumu",
    "Merzifon güvenlik kamerası",
    "Suluova güvenlik kamerası",
    "Taşova kamera sistemleri",
    "Gümüşhacıköy güvenlik kamerası",
    "HDK Güvenlik Amasya",
    "Amasya iş yeri kamera sistemi",
    "Amasya ev güvenlik kamerası",
    "Amasya gece görüşlü kamera",
    "Amasya güvenlik kamerası fiyatları",
    "Ücretsiz keşif Amasya",
  ],
  authors: [{ name: "HDK Güvenlik", url: "https://hdkguvenlik.com" }],
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
    title: "Amasya Güvenlik Kamerası & Kamera Sistemleri Firması | HDK Güvenlik",
    description:
      "Amasya ve tüm ilçelerinde anahtar teslim güvenlik kamerası ve alarm sistemleri kurulumu. Ücretsiz keşif ve 2 yıl birebir garanti.",
    images: [
      {
        url: "/images/hero/hero-slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Amasya Güvenlik Kamerası ve Kamera Sistemleri - HDK Güvenlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amasya Güvenlik Kamerası & Kamera Sistemleri | HDK Güvenlik",
    description:
      "Amasya ve tüm ilçelerinde yüksek çözünürlüklü güvenlik kamerası montajı ve alarm sistemleri.",
    images: ["/images/hero/hero-slide-1.jpg"],
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

// Google Schema.org Yerel İşletme (LocalBusiness / SecurityService / FAQPage) Yapısal Verisi
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SecurityService", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://hdkguvenlik.com/#localbusiness",
      name: "HDK Güvenlik - Amasya Güvenlik Kamerası ve Alarm Sistemleri",
      alternateName: ["HDK Güvenlik", "HDK Kamera Amasya", "Amasya Kamera Sistemleri Firması"],
      url: "https://hdkguvenlik.com",
      logo: "https://hdkguvenlik.com/images/hdk-logo.png",
      image: "https://hdkguvenlik.com/images/hero/hero-slide-1.jpg",
      telephone: "+905372568756",
      email: "info@hdkguvenlik.com",
      priceRange: "₺₺",
      currenciesAccepted: "TRY",
      paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Merkez",
        addressLocality: "Amasya",
        addressRegion: "Amasya",
        postalCode: "05000",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.6534,
        longitude: 35.8331,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Amasya" },
        { "@type": "City", name: "Merzifon" },
        { "@type": "City", name: "Suluova" },
        { "@type": "City", name: "Taşova" },
        { "@type": "City", name: "Gümüşhacıköy" },
        { "@type": "City", name: "Göynücek" },
        { "@type": "City", name: "Hamamözü" },
      ],
      serviceType: [
        "Amasya Güvenlik Kamerası Kurulumu",
        "Amasya Kamera Sistemleri Montajı",
        "Amasya Hırsız ve Yangın Alarm Sistemleri",
        "7/24 Mobil Canlı İzleme Sistemleri",
        "Ücretsiz Yerinde Keşif Hizmeti",
        "IP Kamera ve 4K Gece Görüşlü Güvenlik Sistemleri",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "148",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://hdkguvenlik.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Amasya'da güvenlik kamerası ve alarm kurulumu için keşif ücretsiz mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Amasya Merkez, Merzifon, Suluova ve tüm çevre ilçelerde ücretsiz yerinde keşif hizmeti sunuyoruz. Uzman ekibimiz mekanınızı yerinde inceleyerek en uygun kamera noktalarını ve ekonomik paket teklifini aynı gün ücretsiz olarak hazırlar.",
          },
        },
        {
          "@type": "Question",
          name: "Kamera sistemi kurulduktan sonra aylık veya yıllık aidat öder miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kesinlikle hayır. HDK Güvenlik'ten aldığınız sistemler tek seferlik anahtar teslim ödemelidir. Aylık aidat veya abonelik ücreti yoktur. Kameralar, kayıt cihazı ve diskler tamamen sizin mülkiyetinizde olur.",
          },
        },
        {
          "@type": "Question",
          name: "Kameraları cep telefonumdan uzaktan canlı izleyebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Kurduğumuz tüm sistemler Türkçe menülü iOS ve Android mobil uygulamalarıyla birlikte teslim edilir. Dünyanın her yerinden 7/24 canlı izleyebilir ve geçmiş kayıtları telefonunuzdan tarayabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Cihazlar ve montaj ne kadar süre garantilidir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kullandığımız tüm kameralar, kayıt cihazları ve diskler 2 yıl resmi garantilidir. Ayrıca yapılan montaj ve kablolama işçiliği de firmamız güvencesindedir.",
          },
        },
      ],
    },
  ],
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
      <head suppressHydrationWarning>
        <script
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
        <ScrollToTop />
        <SourceProtection />
        <CampaignPopup />
        <AIChatAdvisor />
        <PWAInstaller />
      </body>
    </html>
  );
}
