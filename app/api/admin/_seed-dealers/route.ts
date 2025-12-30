import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

const DEALERS = [
    "Jayco", "Lotus Caravans", "New Age Caravans", "Crusader Caravans", "Supreme Caravans",
    "JB Caravans", "Kedron Caravans", "Bushtracker", "Zone RV", "Urban Caravans",
    "Essential Caravans", "Royal Flair", "Network RV", "Retreat Caravans", "Nova Caravans",
    "Titanium Caravans", "Sunland Caravans", "Design RV", "Leader Caravans", "Windsor Caravans",
    "Coromal", "Avan", "Goldstream RV", "Paramount Caravans", "Viscount Caravans",
    "Millard", "On The Move Caravans", "Wonderland RV", "Masterpiece Caravans", "Spinifex Caravans",
    "Australian Off Road (AOR)", "Kimberley Kampers", "Patriot Campers", "Track Trailer", "Cub Campers",
    "Mars Campers", "Black Series", "MDC Camper Trailers", "Ezytrail Campers", "Austrack Campers",
    "Lumberjack Camper Trailers", "Stoney Creek Campers", "Skamper Kampers", "Blue Tongue Campers", "Signature Camper Trailers",
    "Opus Camper", "Ultimate Campers", "Complete Campsite", "Mountain Trail RV", "Rhinomax Campers",
    "Lifestyle Campers", "Swag Camper Trailers", "Market Direct Campers", "Eagle Outdoors", "Condor Caravans"
];

export async function GET() {
    try {
        const results = [];

        for (const name of DEALERS) {
            // Create a sanitized email slug
            const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '');
            const email = `contact@${slug}.com.au.test`; // .test to ensure no accidental real emails

            // Check if exists
            const existing = await prisma.dealer.findUnique({
                where: { email }
            });

            if (!existing) {
                const dealer = await prisma.dealer.create({
                    data: {
                        name: `${name} Rep`,
                        company: name,
                        email: email,
                        password: "password123", // Default placeholder
                        location: "Australia",
                        subscriptionTier: "FREE",
                        subscriptionStatus: "ACTIVE", // So they show up
                        phone: "0400 000 000",
                        website: `https://www.${slug}.com.au`,
                        logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
                    }
                });
                results.push(dealer.company);
            }
        }

        return NextResponse.json({
            success: true,
            added: results.length,
            dealers: results
        });

    } catch (error) {
        console.error("Seeding failed:", error);
        return NextResponse.json({ error: "Seeding failed", details: String(error) }, { status: 500 });
    }
}
