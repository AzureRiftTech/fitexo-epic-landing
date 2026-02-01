import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for better performance
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Define image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize image quality for background/decorative images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    // Allow custom quality values
    qualities: [40, 50, 60, 75],
    // Allow remote image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fitexo.in',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compiler options for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Note: SWC minification is enabled by default in Next.js 13+
  // Modern browser targeting reduces polyfills and legacy JavaScript
  // Targets: Chrome 80+, Safari 13.4+, Firefox 72+, Edge 80+
  
  // Redirects for old URL patterns
  async redirects() {
    return [
      // Redirect old /solutions/[slug] to new /solutions/for-[slug]
      {
        source: '/solutions/gym-management-software-midnapore',
        destination: '/solutions/for-gym-management-software-midnapore',
        permanent: true,
      },
      {
        source: '/solutions/automated-billing-for-fitness-centers',
        destination: '/solutions/for-automated-billing-for-fitness-centers',
        permanent: true,
      },
      {
        source: '/solutions/whatsapp-integrated-gym-software',
        destination: '/solutions/for-whatsapp-integrated-gym-software',
        permanent: true,
      },
      {
        source: '/solutions/biometric-attendance-system-gyms',
        destination: '/solutions/for-biometric-attendance-system-gyms',
        permanent: true,
      },
      {
        source: '/solutions/gst-compliant-gym-billing-software',
        destination: '/solutions/for-gst-compliant-gym-billing-software',
        permanent: true,
      },
      {
        source: '/solutions/gym-management-software-kharagpur',
        destination: '/solutions/for-gym-management-software-kharagpur',
        permanent: true,
      },
      // Additional SEO solution redirects
      {
        source: '/solutions/best-gym-management-software-india',
        destination: '/solutions/for-best-gym-management-software-india',
        permanent: true,
      },
      {
        source: '/solutions/gym-membership-management-software',
        destination: '/solutions/for-gym-membership-management-software',
        permanent: true,
      },
      {
        source: '/solutions/fitness-center-software-free-trial',
        destination: '/solutions/for-fitness-center-software-free-trial',
        permanent: true,
      },
      {
        source: '/solutions/cloud-based-gym-software',
        destination: '/solutions/for-cloud-based-gym-software',
        permanent: true,
      },
      {
        source: '/solutions/gym-owner-app-android',
        destination: '/solutions/for-gym-owner-app-android',
        permanent: true,
      },
      {
        source: '/solutions/gym-billing-software-with-upi',
        destination: '/solutions/for-gym-billing-software-with-upi',
        permanent: true,
      },
      {
        source: '/solutions/personal-trainer-management-software',
        destination: '/solutions/for-personal-trainer-management-software',
        permanent: true,
      },
      {
        source: '/solutions/gym-analytics-and-reporting',
        destination: '/solutions/for-gym-analytics-and-reporting',
        permanent: true,
      },
      {
        source: '/solutions/multi-branch-gym-management',
        destination: '/solutions/for-multi-branch-gym-management',
        permanent: true,
      },
      {
        source: '/solutions/gym-lead-management-crm',
        destination: '/solutions/for-gym-lead-management-crm',
        permanent: true,
      },
    ];
  },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
