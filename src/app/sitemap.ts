import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fitexo.in';

    const routes = [
        '',
        '/product/integrations',
        '/product/api',
        '/company/about',
        '/company/careers',
        '/company/blog',
        '/company/press',
        '/resources/documentation',
        '/resources/help-center',
        '/resources/community',
        '/resources/webinars',
        '/legal/privacy',
        '/legal/terms',
        '/legal/security',
        '/legal/gdpr',
        '/solutions/gym-management-software-midnapore',
        '/solutions/automated-billing-for-fitness-centers',
        '/solutions/whatsapp-integrated-gym-software',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly' as any,
        priority: route === '' ? 1 : 0.8,
    }));
}
