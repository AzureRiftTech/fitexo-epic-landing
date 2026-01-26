import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitexo | #1 Gym Management Software with WhatsApp Automation in India',
  description: 'Scale your gym with Fitexo. India\'s premier gym management app featuring WhatsApp automation, biometric sync, and GST billing for growth-focused clubs.',
  keywords: 'gym management software India, WhatsApp gym automation, biometric gym attendance, gym billing software Kharagpur, fitness CRM West Bengal, Fitexo',
};

import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { MobileAppShowcase } from '@/components/landing/MobileAppShowcase';
import { KnowledgeSection } from '@/components/landing/KnowledgeSection';
import { GymsCarousel } from '@/components/landing/GymsCarousel';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';
import { LeadCaptureForm } from '@/components/landing/LeadCaptureForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <Navbar />
      <HeroSection />
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
    </main>
  );
}
