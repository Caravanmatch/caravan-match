import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';

// POST: Dealer submits a quote
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { dealerId, tenderId, price, description } = body;

        if (!dealerId || !tenderId || !price) {
            return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
        }

        // 1. Check Dealer Subscription Tier & Limits
        const dealer = await (prisma as any).dealer.findUnique({ where: { id: dealerId } });

        if (!dealer) {
            return NextResponse.json({ success: false, error: 'Dealer not found' }, { status: 404 });
        }

        // TIER LIMITS
        const LIMITS: Record<string, number> = {
            'STARTER': 5,
            'GROWTH': 10,
            'PRO': 20,
            'UNLIMITED': 999999
        };

        const limit = LIMITS[dealer.planTier] || 0; // Default to 0 if unknown tier

        // Gatekeeper Logic
        // Allow if:
        // 1. Plan is UNLIMITED
        // 2. OR Subscription is ACTIVE/TRIAL AND QuotesUsed < Limit
        const isActive = dealer.subscriptionStatus === 'ACTIVE' || dealer.subscriptionStatus === 'TRIAL';

        if (!isActive) {
            return NextResponse.json({
                success: false,
                error: 'Active Subscription Required',
                requiresUpgrade: true
            }, { status: 403 });
        }

        if (dealer.planTier !== 'UNLIMITED' && dealer.quotesUsedThisMonth >= limit) {
            return NextResponse.json({
                success: false,
                error: `Monthly Quote Limit Reached (${limit}). Upgrade to submit more.`,
                requiresUpgrade: true
            }, { status: 403 });
        }

        const quote = await (prisma as any).quote.create({
            data: {
                dealerId,
                tenderId,
                price,
                description,
                status: 'PENDING'
            }
        });

        // Loophole: Also update Tender status to IN_PROGRESS if it's currently OPEN
        // This signifies "Activity" has started
        await (prisma as any).tender.update({
            where: { id: tenderId },
            data: { status: 'IN_PROGRESS' }
        });

        // Increment Usage Count
        await (prisma as any).dealer.update({
            where: { id: dealerId },
            data: { quotesUsedThisMonth: { increment: 1 } }
        });

        // --- EMAIL NOTIFICATIONS ---
        try {
            const { sendEmail, EmailTemplates } = await import('@/lib/email');

            // Need to fetch Customer Email from Tender
            const tender = await (prisma as any).tender.findUnique({
                where: { id: tenderId },
                select: { customerEmail: true }
            });

            if (tender && tender.customerEmail) {
                await sendEmail({
                    to: tender.customerEmail,
                    subject: `New Quote Received! ($${price.toLocaleString()})`,
                    html: EmailTemplates.newQuoteCustomer(tenderId, dealer.company || dealer.name, price)
                });
            }
        } catch (emailErr) {
            console.error("Email notification failed (non-critical):", emailErr);
        }
        // ---------------------------

        return NextResponse.json({ success: true, quote });
    } catch (error) {
        console.error('Error creating quote:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
