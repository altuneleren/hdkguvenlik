# 🚀 HDK Güvenlik — Canlıya Alma (Deployment) Rehberi

Bu proje **Next.js 16 (App Router)** ve **Tailwind CSS 4** ile geliştirilmiştir. En hızlı, sorunsuz ve ücretsiz dağıtım yöntemi **Vercel**'dir.

---

## 🌟 YÖNTEM 1: Vercel ile 2 Dakikada Dağıtım (Önerilen & Ücretsiz)

Vercel, Next.js'in resmi barındırma platformudur. Ücretsiz SSL sertifikası, küresel CDN ve otomatik güncellemeler sunar.

### Adım 1: Vercel Hesabı Açın
1. [https://vercel.com/signup](https://vercel.com/signup) adresine gidin.
2. GitHub, GitLab veya E-posta adresinizle ücretsiz hesap oluşturun.

### Adım 2: Projeyi Yükleyin (2 Seçenek)

#### Seçenek A: GitHub Üzerinden (Otomatik Güncelleme)
1. Projenizi GitHub'a yükleyin (aşağıdaki Yöntem 2'ye bakın).
2. Vercel Dashboard'da **"Add New..." -> "Project"** butonuna tıklayın.
3. GitHub reponuzu seçin ve **"Deploy"** butonuna basın.

#### Seçenek B: Terminalden Tek Komutla (GitHub Olmadan)
Proje klasörünüzde terminali açıp şu komutu çalıştırın:
```bash
npx vercel
```
- Karşınıza çıkan sorulara `Enter` ile onay verin.
- Birkaç saniye içinde siteniz `https://hdk-guvenlik.vercel.app` gibi bir bağlantı ile canlıya alınır.

### Adım 3: Kendi Alan Adınızı (Domain) Bağlama
1. Vercel projenizde **Settings -> Domains** bölümüne gidin.
2. Alan adınızı yazın (Örn: `hdkguvenlik.com` veya `hdkkamera.com`).
3. Vercel'in vereceği DNS kayıtlarını (A ve CNAME) domain aldığınız firmaya (GoDaddy, Natro, İsimtescil vb.) girin.
4. SSL sertifikanız otomatik olarak oluşturulacaktır.

---

## 💻 YÖNTEM 2: Kendi Linux / VPS Sunucunuza Kurulum (Ubuntu / Debian)

Eğer kendi sunucunuzda çalıştırmak istiyorsanız:

1. **Sunucuda Node.js (v20 veya v22) kurun:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Proje dosyalarını sunucuya aktarın ve paketleri yükleyin:**
   ```bash
   npm install
   ```

3. **Üretim sürümünü derleyin:**
   ```bash
   npm run build
   ```

4. **PM2 ile arka planda kesintisiz çalıştırın:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "hdk-guvenlik" -- start
   pm2 save
   pm2 startup
   ```

---

## ⚙️ Canlı Ortam Ayarları (Bakım Modu Yönetimi)

- **Yapım Aşamasında Modunu Kapatıp Siteyi Herkese Açmak İçin:**
  - Vercel kullanıyorsanız: **Settings -> Environment Variables** alanına `NEXT_PUBLIC_MAINTENANCE_MODE=false` ekleyin ve Deploy edin.
  - Ya da [`src/config/site.ts`](./src/config/site.ts) dosyasındaki `maintenanceMode: true` değerini `false` yapıp derleyin.
- **Siz Canlı Sitede Nasıl Önizleme Yaparsınız?**
  - Alan adınızın sonuna `/?preview=hdk` eklemeniz (Örn: `https://hdkguvenlik.com/?preview=hdk`) siteyi size anında açar.
