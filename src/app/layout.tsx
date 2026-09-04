import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDK Güvenlik | Alarm ve Kamera Güvenlik Sistemleri",
  description:
    "HDK Güvenlik ile ev ve iş yerleriniz için yüksek çözünürlüklü kamera sistemleri, akıllı alarm çözümleri ve ücretsiz yerinde keşif hizmeti.",
  keywords: [
    "HDK Güvenlik",
    "Güvenlik Kamerası",
    "Kamera Sistemleri",
    "Alarm Sistemleri",
    "Hırsız Alarmı",
    "Yangın Alarmı",
    "Ücretsiz Keşif",
    "IP Kamera",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
