import { cookies } from "next/headers";
import { SITE_CONFIG } from "@/config/site";
import UnderConstruction from "@/components/UnderConstruction";
import PreviewModeBanner from "@/components/PreviewModeBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import InspectionForm from "@/components/InspectionForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  // Bakım modu kapalıysa herkese doğrudan gerçek siteyi göster
  if (!SITE_CONFIG.maintenanceMode) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <SocialProof />
          <Features />
          <Showcase />
          <Stats />
          <Pricing />
          <InspectionForm />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  // Bakım modu açıkken: Çerez veya URL önizleme parametresi kontrolü (?preview=hdk)
  const cookieStore = await cookies();
  const hasCookie = cookieStore.get("hdk_preview")?.value === "granted";
  const params = searchParams ? await searchParams : {};
  const hasSecretParam = params.preview === "hdk" || params.preview !== undefined;

  const isAuthorized = hasCookie || hasSecretParam;

  // Normal dış ziyaretçiler için: Yapım Aşamasında ekranı
  if (!isAuthorized) {
    return <UnderConstruction />;
  }

  // Yetkili geliştirici / önizleme modundakiler için: Canlı site + Önizleme Çubuğu
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      <PreviewModeBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Stats />
        <Pricing />
        <InspectionForm />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
