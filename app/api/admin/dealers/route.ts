import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const dealers = await prisma.dealer.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { quotes: true }
                }
            }
        });

        const safeDealers = dealers.map(d => ({
            id: d.id,
            company: d.company,
            name: d.name,
            email: d.email,
            phone: d.phone,
            tier: d.subscriptionTier,
            joined: d.createdAt,
            quotesSent: d._count.quotes
        }));

        return NextResponse.json(safeDealers);

    } catch (error) {
        console.error("Admin Dealers Error:", error);
        return NextResponse.json({ error: "Failed to fetch dealers" }, { status: 500 });
    }
}
