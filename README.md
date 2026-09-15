# 🛡️ HDK Güvenlik — Profesyonel Kamera & Alarm Sistemleri Web Platformu

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**HDK Güvenlik**, Amasya merkezli olmak üzere Merzifon, Suluova, Taşova, Gümüşhacıköy ve çevre ilçelerde güvenlik kamerası, alarm sistemleri, IP ve AHD kamera kurulumu, bakım ve teknik servis hizmetleri sunan firmanın kurumsal web platformudur.

---

## 🌟 Öne Çıkan Özellikler

- **🧙‍♂️ Akıllı Paket Sihirbazı:** Kullanıcıların ev veya işyerlerine en uygun kamera ve güvenlik paketini adım adım belirlemesini sağlayan etkileşimli modül.
- **💰 Şeffaf Paketler & Fiyatlandırma:** 2'li, 4'lü, 8'li ve 16'lı Güvenlik Kamera Setleri için detaylı teknik özellikler ve fiyat kartları.
- **⚖️ Kapsamlı Ürün Karşılaştırma:** Analog HD, IP ve Kablosuz (Wi-Fi) kamera sistemleri arasındaki farkları anlatan interaktif tablo.
- **💾 HDD & Depolama Hesaplayıcı:** Kamera sayısı, çözünürlük ve gün bazlı hard disk kayıt kapasitesini hesaplayan pratik hesaplama aracı.
- **📋 Online Ücretsiz Keşif Formu:** Müşterilerin keşif talebi oluşturmasını sağlayan, anlık doğrulama ve bildirim destekli form yapısı.
- **📊 Yönetici Paneli (`/admin`):** Gelen keşif ve teklif taleplerini listeleme, filtreleme, durum güncelleme ve Excel/CSV olarak dışa aktarma.
- **🔍 Gelişmiş Yerel SEO (Amasya & Çevre İlçeler):**
  - Schema.org `SecurityService` & `LocalBusiness` yapılandırılmış verisi (Coğrafi koordinatlar, 4.9 yıldız müşteri puanı).
  - Dinamik `sitemap.ts` ve optimize `robots.ts`.
  - Google aramalarında *"Amasya güvenlik kamerası"*, *"kamera sistemleri firması Amasya"* kelimelerinde üst sıraları hedefleyen meta etiketler.
- **📱 PWA Desteği (Progressive Web App):** Mobil cihazlarda uygulama gibi ana ekrana eklenebilme, çevrimdışı önbellekleme (`manifest.webmanifest`, `sw.js`).
- **💬 Doğrudan WhatsApp Entegrasyonu:** Tek tıkla yetkiliye WhatsApp üzerinden hazır mesajla bağlanabilme.
- **⚖️ Yasal & Kurumsal Sayfalar:** KVKK Aydınlatma Metni, Gizlilik Politikası, Garanti Koşulları ve Montaj Sözleşmesi sayfaları.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Modern React SSR, SSG ve API Route desteği |
| **Kütüphane** | [React 19](https://react.dev/) | En son bileşen mimarisi ve React Server Components |
| **Dil** | [TypeScript 5](https://www.typescriptlang.org/) | Tip güvenliği ve hatasız kod tabanı |
| **Stil / Tasarım**| [Tailwind CSS v4](https://tailwindcss.com/) | Yüksek performanslı modern CSS motoru |
| **İkonlar** | [Lucide React](https://lucide.dev/) | Optimize vektör ikon kütüphanesi |
| **Dağıtım** | [Vercel](https://vercel.com/) | Otomatik CI/CD ve edge dağıtım platformu |

---

## 📁 Proje Dizin Yapısı

```text
hdk-guvenlik/
├── public/                     # Statik dosyalar, logolar ve PWA varlıkları
│   ├── images/                 # Slayt ve kampanya görselleri
│   ├── manifest.webmanifest   # PWA manifest dosyası
│   └── sw.js                   # Service Worker (PWA)
├── src/
│   ├── app/                    # Next.js App Router sayfaları
│   │   ├── admin/              # Yönetici paneli sayfası
│   │   ├── api/                # API rotaları (/leads vb.)
│   │   ├── garanti-kosullari/  # Garanti koşulları yasal sayfası
│   │   ├── gizlilik-politikasi/# Gizlilik politikası
│   │   ├── kvkk/               # KVKK aydınlatma metni
│   │   ├── montaj-sozlesmesi/  # Montaj sözleşmesi
│   │   ├── layout.tsx          # Ana düzen, SEO & Schema meta verileri
│   │   ├── page.tsx            # Ana sayfa
│   │   ├── robots.ts           # Arama motoru robot direktifleri
│   │   └── sitemap.ts          # Dinamik XML site haritası
│   ├── components/             # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Navbar.tsx          # Ana navigasyon menüsü
│   │   ├── Hero.tsx            # Karşılama ve slider bölümü
│   │   ├── InspectionForm.tsx  # Keşif talep formu
│   │   ├── Pricing.tsx         # Paket fiyatlandırma bölümü
│   │   ├── StorageCalculator.tsx # HDD hesaplayıcı
│   │   ├── ProductComparison.tsx # Ürün karşılaştırma tablosu
│   │   ├── SystemConfigurator.tsx# Paket sihirbazı
│   │   ├── Footer.tsx          # Alt bilgi ve iletişim bağlantıları
│   │   └── ...
│   ├── config/                 # Site genel ayarları
│   ├── data/                   # JSON veri tabanı dosyaları (leads.json)
│   └── lib/                    # Bildirim ve yardımcı fonksiyonlar
├── next.config.ts              # Next.js yapılandırması & yönlendirmeler
├── tailwind.config.ts          # Tailwind ayarları
└── tsconfig.json               # TypeScript yapılandırması
```

---

## 🚀 Kurulum ve Yerel Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/altuneleren/hdkguvenlik.git
cd hdkguvenlik
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak siteyi görüntüleyebilirsiniz.

---

## 🔧 Kullanılabilir Komutlar

- `npm run dev` — Geliştirme sunucusunu başlatır (`localhost:3000`).
- `npm run build` — Üretim (production) derlemesini hazırlar ve tip denetimlerini çalıştırır.
- `npm run start` — Derlenmiş üretim sunucusunu ayağa kaldırır.
- `npm run lint` — ESLint ile kod kalite kontrollerini yapar.

---

## 🔐 Yönetici Paneli (`/admin`)

- Müşteriler keşif formu doldurduğunda talepler `src/data/leads.json` dosyasına kaydedilir ve bildirim sistemine iletilir.
- `http://localhost:3000/admin` (veya canlı sitenizde `/admin`) adresine giderek gelen tüm talepleri yönetebilir, arayabilir ve CSV formatında indirebilirsiniz.

---

## 🌐 Dağıtım (Vercel Deployment)

Proje Vercel ile tam entegre çalışacak şekilde optimize edilmiştir:

1. [Vercel](https://vercel.com/) paneline giriş yapın.
2. `hdkguvenlik` GitHub deposunu bağlayın.
3. Framework olarak **Next.js** seçili olduğundan emin olun.
4. **Deploy** butonuna tıklayın. Her yeni Git `push` işleminde siteniz otomatik olarak derlenip güncellenecektir.

---

## 📞 İletişim & Firma Bilgileri

- **Firma:** HDK Güvenlik Kamera ve Alarm Sistemleri
- **Yetkili / Telefon:** +90 537 256 87 56
- **Bölge:** Amasya (Merkez, Merzifon, Suluova, Taşova, Gümüşhacıköy, Göynücek, Hamamözü)
- **Hizmetler:** IP Kamera, AHD Kamera, Yangın Alarmı, Hırsız Alarmı, Akıllı Ev Sistemleri, Yıllık Bakım ve Teknik Servis

---

*© 2026 HDK Güvenlik. Tüm hakları saklıdır.*
