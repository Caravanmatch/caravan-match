import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/dealer/dashboard/'],
        },
        sitemap: 'https://caravanmatch.com.au/sitemap.xml',
    }
}
