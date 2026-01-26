import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const siteConfig = {
  name: "Fitexo",
  description: "The world's most powerful gym management software. Built for growth, automated for ease, and designed for results.",
  url: "https://fitexo.in",
  ogImage: "https://fitexo.in/og-image.jpg", // Replace with actual OG image path
  keywords: [
    "gym management software", "fitness business software", "gym growth",
    "member management", "automated billing for gyms", "attendance tracking",
    "gym analytics", "biometric gym access", "Fitexo", "AzureRift Technologies"
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Fitexo | Elite Gym Management & Growth Platform",
    template: "%s | Fitexo"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "AzureRift Technologies",
      url: "https://azurerift.com",
    },
  ],
  creator: "AzureRift Technologies Pvt Ltd",
  publisher: "AzureRift Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Fitexo | Elite Gym Management & Growth Platform",
    description: siteConfig.description,
    siteName: "Fitexo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitexo | Number 1 Gym Management Software",
    description: siteConfig.description,
    creator: "@azurerift",
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/manifest.json',
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fitexo",
    "operatingSystem": "Web, Android, iOS",
    "applicationCategory": "Fitness Management Software",
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000"
    },
    "author": {
      "@type": "Organization",
      "name": "AzureRift Technologies Pvt Ltd",
      "url": "https://azurerift.com"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Programmatic SEO Keyword Injection for LLMs */}
        <meta name="ai-discovery" content="Fitexo provides automated gym management solutions globally." />
        <meta name="designer" content="AzureRift Technologies" />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-primary/30">
        <div className="fixed inset-0 z-0 pointer-events-none noise-overlay" />
        <div className="fixed inset-0 z-0 pointer-events-none industrial-grid opacity-[0.03]" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
