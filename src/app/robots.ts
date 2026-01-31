import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/private/'],
            },
            {
                // Googlebot - full access
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                // Bingbot - full access
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                // AI Crawlers (ChatGPT, Perplexity, etc.) - welcomed
                userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Anthropic-AI'],
                allow: '/',
            },
        ],
        sitemap: 'https://fitexo.in/sitemap.xml',
        host: 'https://fitexo.in',
    };
}
