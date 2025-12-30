import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Fetch all dealers for the selection list
        // In production, we might filter by 'subscriptionStatus' or 'verified'
        const dealers = await prisma.dealer.findMany({
            where: {
                NOT: {
                    company: {
                        contains: 'test', // Filter out test accounts
                        mode: 'insensitive'
                    }
                }
            },
            select: {
                id: true,
                company: true,
                location: true,
            },
            orderBy: {
                company: 'asc',
            },
        });

        return NextResponse.json(dealers);
    } catch (error) {
        console.error("Failed to fetch dealers:", error);
        return NextResponse.json({ error: "Failed to fetch dealers" }, { status: 500 });
    }
}
