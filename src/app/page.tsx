"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import SystemConfigurator from "@/components/SystemConfigurator";
import Pricing from "@/components/Pricing";
import ProductComparison from "@/components/ProductComparison";
import StorageCalculator from "@/components/StorageCalculator";
import InspectionForm from "@/components/InspectionForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal, { QuoteData } from "@/components/QuoteModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  const handleOpenQuoteModal = (data: QuoteData) => {
    setQuoteData(data);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-red-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <SystemConfigurator onOpenQuoteModal={handleOpenQuoteModal} />
        <Pricing />
        <ProductComparison />
        <StorageCalculator />
        <InspectionForm />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        data={quoteData}
      />
    </div>
  );
}
