import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json(); // Need to parse JSON body
        const dealerId = body.dealerId;

        if (!dealerId) return NextResponse.json({ error: 'No dealerId' }, { status: 400 });

        await prisma.dealer.update({
            where: { id: dealerId },
            data: { subscriptionTier: 'PRO' }
        });

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
