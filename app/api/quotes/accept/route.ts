import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { quoteId } = body;

        const cookieStore = await cookies();
        const clientId = cookieStore.get('client_session')?.value;

        if (!clientId || !quoteId) {
            return NextResponse.json({ success: false, error: 'Unauthorized or Missing Data' }, { status: 400 });
        }

        // 1. Verify Quote belongs to a Tender owned by this Client
        const quote = await (prisma as any).quote.findUnique({
            where: { id: quoteId },
            include: { tender: true }
        });

        if (!quote || quote.tender.clientId !== clientId) {
            return NextResponse.json({ success: false, error: 'Invalid Quote' }, { status: 403 });
        }

        // 2. Update Quote Status -> ACCEPTED
        await (prisma as any).quote.update({
            where: { id: quoteId },
            data: { status: 'ACCEPTED' }
        });

        // 3. Update Tender Status -> COMPLETED
        await (prisma as any).tender.update({
            where: { id: quote.tenderId },
            data: { status: 'COMPLETED' }
        });

        // 4. (Optional) Reject other quotes? 
        // Keeping it simple: Just mark this one accepted.

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Accept Error:", error);
        return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
    }
}
