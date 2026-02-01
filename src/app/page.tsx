import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitexo | #1 Gym Management Software India - WhatsApp Automation & Biometric',
  description: 'India\'s best gym management software. Automate member billing, WhatsApp reminders, biometric attendance & GST invoicing. Trusted by 500+ gyms. Start FREE trial today!',
  keywords: [
    'gym management software India',
    'best gym software India 2026',
    'WhatsApp gym automation',
    'biometric gym attendance system',
    'gym billing software India',
    'fitness CRM software',
    'gym member management app',
    'GST compliant gym software',
    'gym software Kolkata',
    'gym software Delhi',
    'gym software Mumbai',
    'gym software Bangalore',
    'Fitexo',
    'AzureRift Technologies',
    'free gym management software trial',
    'yoga studio management software India',
    'fitness center billing system',
    'automated gym reminders WhatsApp'
  ].join(', '),
  alternates: {
    canonical: 'https://fitexo.in',
  },
  openGraph: {
    title: 'Fitexo | #1 Gym Management Software in India',
    description: 'India\'s most trusted gym management software. WhatsApp automation, biometric attendance, GST billing. Used by 500+ gyms. Free trial available!',
    url: 'https://fitexo.in',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://fitexo.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitexo - Best Gym Management Software India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitexo | #1 Gym Management Software India',
    description: 'Automate your gym with WhatsApp reminders, biometric attendance & GST billing. 500+ gyms trust Fitexo. Try FREE!',
    images: ['https://fitexo.in/og-image.jpg'],
  },
};

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';

const KnowledgeSection = dynamic(
  () => import('@/components/landing/KnowledgeSection').then((mod) => mod.KnowledgeSection),
  { ssr: false }
);
const ProductShowcase = dynamic(
  () => import('@/components/landing/ProductShowcase').then((mod) => mod.ProductShowcase),
  { ssr: false }
);
const MobileAppShowcase = dynamic(
  () => import('@/components/landing/MobileAppShowcase').then((mod) => mod.MobileAppShowcase),
  { ssr: false }
);
const GymsCarousel = dynamic(
  () => import('@/components/landing/GymsCarousel').then((mod) => mod.GymsCarousel),
  { ssr: false }
);
const FeaturesSection = dynamic(
  () => import('@/components/landing/FeaturesSection').then((mod) => mod.FeaturesSection),
  { ssr: false }
);
const BenefitsSection = dynamic(
  () => import('@/components/landing/BenefitsSection').then((mod) => mod.BenefitsSection),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import('@/components/landing/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { ssr: false }
);
const PricingSection = dynamic(
  () => import('@/components/landing/PricingSection').then((mod) => mod.PricingSection),
  { ssr: false }
);
const CTASection = dynamic(
  () => import('@/components/landing/CTASection').then((mod) => mod.CTASection),
  { ssr: false }
);
const Footer = dynamic(
  () => import('@/components/landing/Footer').then((mod) => mod.Footer),
  { ssr: false }
);
const LeadCaptureForm = dynamic(
  () => import('@/components/landing/LeadCaptureForm').then((mod) => mod.LeadCaptureForm),
  { ssr: false }
);

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
