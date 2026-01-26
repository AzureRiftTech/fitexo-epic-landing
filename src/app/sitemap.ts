import { localities } from '@/lib/data/localities';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fitexo.in';

    // Base routes
    const routes = [
        '',
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
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Programmatic SEO routes
    const pSeoRoutes = localities.map((loc) => ({
        url: `${baseUrl}/manage/${loc.city.toLowerCase()}/${loc.locality.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...pSeoRoutes];
}
