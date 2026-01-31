import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default rule for all crawlers
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/private/', '/dashboard/'],
            },
            // Google crawlers - full access with specific permissions
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Video',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-News',
                allow: '/',
            },
            {
                userAgent: 'Storebot-Google',
                allow: '/',
            },
            // Bing crawlers - full access
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'BingPreview',
                allow: '/',
            },
            {
                userAgent: 'msnbot',
                allow: '/',
            },
            // DuckDuckGo crawler
            {
                userAgent: 'DuckDuckBot',
                allow: '/',
            },
            // Yahoo/Oath crawlers
            {
                userAgent: 'Slurp',
                allow: '/',
            },
            // Yandex crawlers
            {
                userAgent: 'Yandex',
                allow: '/',
            },
            {
                userAgent: 'YandexBot',
                allow: '/',
            },
            {
                userAgent: 'YandexImages',
                allow: '/',
            },
            // Baidu crawler (China)
            {
                userAgent: 'Baiduspider',
                allow: '/',
            },
            // Brave Search crawler
            {
                userAgent: 'Brave',
                allow: '/',
            },
            // Mojeek (privacy-focused search)
            {
                userAgent: 'MojeekBot',
                allow: '/',
            },
            // Qwant (European search engine)
            {
                userAgent: 'Qwantify',
                allow: '/',
            },
            // ===== AI/LLM CRAWLERS - WELCOMED =====
            // OpenAI/ChatGPT crawlers
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            // Anthropic/Claude crawlers
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            // Google AI/Gemini crawlers
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Gemini',
                allow: '/',
            },
            // Perplexity AI crawler
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Cohere AI crawler
            {
                userAgent: 'cohere-ai',
                allow: '/',
            },
            // Meta AI crawler
            {
                userAgent: 'FacebookBot',
                allow: '/',
            },
            {
                userAgent: 'Meta-ExternalAgent',
                allow: '/',
            },
            {
                userAgent: 'meta-externalagent',
                allow: '/',
            },
            // Microsoft Copilot/AI crawlers
            {
                userAgent: 'Copilot',
                allow: '/',
            },
            // Apple AI crawler (AppleBot)
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            // You.com AI search
            {
                userAgent: 'YouBot',
                allow: '/',
            },
            // Neeva AI search
            {
                userAgent: 'NeevaBot',
                allow: '/',
            },
            // Common Crawl (used by many AI models)
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            // Diffbot (AI data extraction)
            {
                userAgent: 'Diffbot',
                allow: '/',
            },
            // Bytedance/TikTok crawler
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
            // Amazon Alexa crawler
            {
                userAgent: 'ia_archiver',
                allow: '/',
            },
            // Ahrefs SEO crawler
            {
                userAgent: 'AhrefsBot',
                allow: '/',
            },
            // SEMrush SEO crawler
            {
                userAgent: 'SemrushBot',
                allow: '/',
            },
            // Moz SEO crawler
            {
                userAgent: 'rogerbot',
                allow: '/',
            },
            // Social media preview bots
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'WhatsApp',
                allow: '/',
            },
            {
                userAgent: 'TelegramBot',
                allow: '/',
            },
            {
                userAgent: 'Slackbot',
                allow: '/',
            },
            {
                userAgent: 'Discordbot',
                allow: '/',
            },
            // Pinterest crawler
            {
                userAgent: 'Pinterest',
                allow: '/',
            },
            // Archive.org crawler
            {
                userAgent: 'archive.org_bot',
                allow: '/',
            },
        ],
        sitemap: 'https://fitexo.in/sitemap.xml',
        host: 'https://fitexo.in',
    };
}
