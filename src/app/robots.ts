import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/_next/'],
        },
        sitemap: 'https://fitexo.in/sitemap.xml',
        // Explicitly welcoming AI crawlers
        host: 'https://fitexo.in',
    };
}
