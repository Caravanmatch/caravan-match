import { NextResponse } from 'next/server';
import { stripe, STRIPE_PRICES } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { tier, marketIntel, listingId } = await request.json();
        const cookieStore = await cookies();

        // --- 1. HANDLE DEALER SUBSCRIPTION ---
        if (tier) {
            const dealerId = cookieStore.get('dealer_session')?.value;
            if (!dealerId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

            const dealer = await prisma.dealer.findUnique({ where: { id: dealerId } });
            if (!dealer) return NextResponse.json({ error: "Dealer not found" }, { status: 404 });

            // Map Tier ID to Stripe Price ID
            let priceId;
            switch (tier) {
                case 'STARTER': priceId = STRIPE_PRICES.DEALER_STARTER; break;
                case 'GROWTH': priceId = STRIPE_PRICES.DEALER_GROWTH; break;
                case 'PRO': priceId = STRIPE_PRICES.DEALER_PRO; break;
                case 'UNLIMITED': priceId = STRIPE_PRICES.DEALER_UNLIMITED; break;
                default: return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
            }

            const lineItems = [{ price: priceId, quantity: 1 }];
            if (marketIntel) lineItems.push({ price: STRIPE_PRICES.MARKET_INTEL, quantity: 1 });

            const session = await stripe.checkout.sessions.create({
                customer_email: dealer.email,
                line_items: lineItems,
                mode: 'subscription',
                subscription_data: { trial_period_days: 30 },
                discounts: [{ coupon: '50OFF6M' }],
                success_url: `${request.headers.get('origin')}/dealer/dashboard?success=true&tier=${tier}`,
                cancel_url: `${request.headers.get('origin')}/dealer/subscription?canceled=true`,
                metadata: { dealerId: dealer.id, tier: tier }
            });

            return NextResponse.json({ url: session.url });
        }

        // --- 2. HANDLE PRIVATE LISTING FEE ($70) ---
        if (listingId) {
            // Fetch listing to verify / get email
            // Simplified: just passing ID. Ideally verify ownership.

            const session = await stripe.checkout.sessions.create({
                line_items: [{
                    price_data: {
                        currency: 'aud',
                        product_data: {
                            name: 'Standard Caravan Listing (6 Months)',
                            description: 'Listing fee for 6 months. Renewal options available.',
                        },
                        unit_amount: 8900, // $89.00
                    },
                    quantity: 1,
                }],
                mode: 'payment',
                success_url: `${request.headers.get('origin')}/client/dashboard?listing_success=true`,
                cancel_url: `${request.headers.get('origin')}/advertise?canceled=true`,
                metadata: {
                    listingId: listingId,
                    type: 'PRIVATE_LISTING'
                }
            });

            return NextResponse.json({ url: session.url });
        }

        return NextResponse.json({ error: "Invalid request type" }, { status: 400 });

    } catch (error) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
    }
}
