import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://caravanmatch.com.au'

    // 1. Static Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/builder`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/used-caravans`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/towing-calculator`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/dealer/subscription`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/advertise`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/towing-weights`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/buy-caravans-nsw`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/buy-caravans-qld`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    // 2. Dynamic Routes (Used Caravans)
    let caravanRoutes: MetadataRoute.Sitemap = [];
    try {
        const caravans = await prisma.usedCaravan.findMany({
            where: { status: 'APPROVED' },
            select: { id: true, updatedAt: true }
        });

        caravanRoutes = caravans.map(van => ({
            url: `${baseUrl}/used-caravans/${van.id}`,
            lastModified: van.updatedAt,
            changeFrequency: 'weekly',
            priority: 0.8
        }));
    } catch (error) {
        console.error("Sitemap Error:", error);
    }

    return [...staticRoutes, ...caravanRoutes]
}
