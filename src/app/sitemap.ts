import { getAllLocalities, getUniqueCities } from '@/lib/data/localities';
import { keywordSlugs } from './features/[keyword]/page';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fitexo.in';
    const lastModified = new Date();

    // ============================
    // 1. Core Static Routes
    // ============================
    const coreRoutes = [
        { path: '', priority: 1.0, changeFreq: 'daily' },
        { path: '/pricing', priority: 0.9, changeFreq: 'weekly' },
        { path: '/features', priority: 0.9, changeFreq: 'weekly' },
        { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified,
        changeFrequency: route.changeFreq as 'daily' | 'weekly' | 'monthly',
        priority: route.priority,
    }));

    // ============================
    // 2. Legal & Company Pages
    // ============================
    const staticPages = [
        '/legal/privacy',
        '/legal/terms',
        '/legal/security',
        '/legal/gdpr',
        '/company/about',
        '/company/careers',
        '/company/blog',
        '/company/press',
        '/resources/documentation',
        '/resources/help-center',
        '/resources/community',
        '/resources/webinars',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ============================
    // 3. Keyword/Feature Pages (Programmatic SEO)
    // ============================
    const keywordRoutes = keywordSlugs.map((slug) => ({
        url: `${baseUrl}/features/${slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // ============================
    // 4. City-Level Pages (Programmatic SEO)
    // ============================
    const uniqueCities = getUniqueCities();
    const cityRoutes = uniqueCities.map((city) => ({
        url: `${baseUrl}/gym-software/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
    }));

    // ============================
    // 5. Area/Locality Pages (Programmatic SEO)
    // ============================
    const allLocalities = getAllLocalities();
    const localityRoutes = allLocalities.map((loc) => ({
        url: `${baseUrl}/manage/${loc.city.toLowerCase().replace(/\s+/g, '-')}/${loc.locality.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ============================
    // 6. Industry/Vertical Pages
    // ============================
    const industryPages = [
        'gym',
        'yoga-studio',
        'crossfit-box',
        'personal-training',
        'martial-arts',
        'pilates-studio',
        'dance-studio',
        'swimming-academy',
        'sports-academy',
        'wellness-center',
    ].map((industry) => ({
        url: `${baseUrl}/solutions/${industry}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // ============================
    // 7. Comparison Pages (SEO Content)
    // ============================
    const comparisonPages = [
        'fitexo-vs-gymdesk',
        'fitexo-vs-mindbody',
        'fitexo-vs-glofox',
        'fitexo-vs-zenplanner',
        'fitexo-vs-wodify',
        'fitexo-vs-pushpress',
        'fitexo-vs-okfit',
        'fitexo-vs-kondria',
        'fitexo-vs-gym-manager',
        'best-gym-software-india',
        'top-10-gym-management-software-india',
    ].map((comparison) => ({
        url: `${baseUrl}/compare/${comparison}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.65,
    }));

    // ============================
    // 8. Product/Feature Deep Pages
    // ============================
    const productPages = [
        { path: '/product/whatsapp-automation', priority: 0.8 },
        { path: '/product/biometric-integration', priority: 0.8 },
        { path: '/product/billing-invoicing', priority: 0.8 },
        { path: '/product/member-management', priority: 0.8 },
        { path: '/product/analytics-dashboard', priority: 0.75 },
        { path: '/product/mobile-app', priority: 0.75 },
        { path: '/product/lead-management', priority: 0.7 },
        { path: '/product/class-scheduling', priority: 0.7 },
        { path: '/product/api', priority: 0.6 },
        { path: '/product/integrations', priority: 0.6 },
    ].map((page) => ({
        url: `${baseUrl}${page.path}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }));

    // Combine all routes
    return [
        ...coreRoutes,
        ...staticPages,
        ...keywordRoutes,
        ...cityRoutes,
        ...localityRoutes,
        ...industryPages,
        ...comparisonPages,
        ...productPages,
    ];
}
