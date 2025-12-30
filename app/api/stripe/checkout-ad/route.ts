import { NextResponse } from 'next/server';
import { stripe, STRIPE_PRICES } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { listingId } = await request.json();

        if (!listingId) {
            return NextResponse.json({ error: "Missing listing ID" }, { status: 400 });
        }

        const listing = await prisma.usedCaravan.findUnique({
            where: { id: listingId }
        });

        if (!listing) {
            return NextResponse.json({ error: "Listing not found" }, { status: 404 });
        }

        // Create Checkout Session
        // Create Checkout Session (Free Trial Subscription)
        // Logic: $0 Now (Free Trial), Start $15/mo subscription after 14 days
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: STRIPE_PRICES.PRIVATE_AD_RECURRING, // $15/mo Recurring
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            subscription_data: {
                trial_period_days: 14, // Free for 14 days
                metadata: {
                    listingId: listing.id
                }
            },
            success_url: `${request.headers.get('origin')}/used-caravans?success=true`,
            cancel_url: `${request.headers.get('origin')}/advertise/payment?canceled=true&listingId=${listingId}`,
            metadata: {
                listingId: listing.id,
                type: 'private_ad_subscription'
            },
            customer_email: listing.sellerEmail,
        });

        return NextResponse.json({ url: session.url });

    } catch (error: any) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({
            error: error.message || "Checkout failed",
            details: process.env.STRIPE_SECRET_KEY ? "Key Present" : "Key Missing"
        }, { status: 500 });
    }
}
