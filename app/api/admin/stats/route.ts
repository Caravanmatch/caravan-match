import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';

export async function GET() {
    try {
        // Auth Check
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const [
            totalTenders,
            totalDealers,
            totalQuotes,
            recentTenders,
            recentDealers,
            pendingListings
        ] = await Promise.all([
            prisma.tender.count(),
            prisma.dealer.count(),
            prisma.quote.count(),
            prisma.tender.findMany({
                take: 10,
                orderBy: { createdAt: 'desc' },
                include: { quotes: true }
            }),
            prisma.dealer.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' }
            }),
            prisma.usedCaravan.findMany({
                where: { status: 'PENDING' },
                orderBy: { createdAt: 'desc' },
                include: { client: true }
            })
        ]);

        return NextResponse.json({
            stats: {
                tenders: totalTenders,
                dealers: totalDealers,
                quotes: totalQuotes
            },
            recentTenders,
            recentDealers,
            pendingListings
        });

    } catch (error) {
        console.error("Admin Stats Error:", error);
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
