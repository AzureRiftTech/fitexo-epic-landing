"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Client-only dynamic imports (ssr: false allowed here)
const KnowledgeSection = dynamic(() => import('./KnowledgeSection').then((mod) => mod.KnowledgeSection), { ssr: false });
const ProductShowcase = dynamic(() => import('./ProductShowcase').then((mod) => mod.ProductShowcase), { ssr: false });
const MobileAppShowcase = dynamic(() => import('./MobileAppShowcase').then((mod) => mod.MobileAppShowcase), { ssr: false });
const GymsCarousel = dynamic(() => import('./GymsCarousel').then((mod) => mod.GymsCarousel), { ssr: false });
const FeaturesSection = dynamic(() => import('./FeaturesSection').then((mod) => mod.FeaturesSection), { ssr: false });
const BenefitsSection = dynamic(() => import('./BenefitsSection').then((mod) => mod.BenefitsSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('./TestimonialsSection').then((mod) => mod.TestimonialsSection), { ssr: false });
const PricingSection = dynamic(() => import('./PricingSection').then((mod) => mod.PricingSection), { ssr: false });
const CTASection = dynamic(() => import('./CTASection').then((mod) => mod.CTASection), { ssr: false });
const Footer = dynamic(() => import('./Footer').then((mod) => mod.Footer), { ssr: false });
const LeadCaptureForm = dynamic(() => import('./LeadCaptureForm').then((mod) => mod.LeadCaptureForm), { ssr: false });

export default function LazySections() {
  return (
    <Suspense fallback={<div aria-hidden className="min-h-[200px]" />}>      
      <KnowledgeSection />
      <ProductShowcase />
      <MobileAppShowcase />
      <GymsCarousel />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <LeadCaptureForm />
    </Suspense>
  );
}
