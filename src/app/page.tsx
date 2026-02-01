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

import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import LazySections from '@/components/landing/LazySections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <Navbar />
      <HeroSection />
      <LazySections />
    </main>
  );
}
