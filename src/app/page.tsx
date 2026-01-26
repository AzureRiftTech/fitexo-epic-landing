import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitexo | Number 1 Gym Management Software for Growth',
  description: 'Scale your gym with Fitexo. Automated payments, member management, and advanced analytics for fitness professionals.',
  keywords: 'gym management software, fitness business, member tracking, payment automation, gym growth',
};

import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { MobileAppShowcase } from '@/components/landing/MobileAppShowcase';
import { VideoPromo } from '@/components/landing/VideoPromo';
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
