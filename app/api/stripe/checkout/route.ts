import { NextResponse } from 'next/server';
import { stripe, STRIPE_PRICES } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { tier, marketIntel, listingId, promoCode } = await request.json();
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
                subscription_data: { trial_period_days: 180 }, // 6 Months Free
                discounts: [{ coupon: '50OFF3M' }], // Then 50% off for 3 Months (Coupon applies after trial)
                success_url: `${request.headers.get('origin')}/dealer/dashboard?success=true&tier=${tier}`,
                cancel_url: `${request.headers.get('origin')}/dealer/subscription?canceled=true`,
                metadata: {
                    dealerId: dealer.id,
                    tier: tier,
                    marketIntel: marketIntel ? 'true' : 'false'
                }
            });

            return NextResponse.json({ url: session.url });
        }

        // --- 2. HANDLE PRIVATE LISTING FEE ($70) ---
        // --- 2. HANDLE PRIVATE LISTING FEE ($89 + Auto-Renew) ---
        if (listingId) {
            // Check for Promo Code (e.g. "NOTGREY" -> Free Listing)
            // Promo Code is already destructured above

            if (promoCode && (promoCode.toUpperCase() === 'NOTGREY' || promoCode.toUpperCase() === 'CAMP')) {
                // BYPASS STRIPE: Activate Listing Immediately
                await prisma.usedCaravan.update({
                    where: { id: listingId },
                    data: { status: 'APPROVED' }
                });

                return NextResponse.json({
                    url: `${request.headers.get('origin')}/client/dashboard?listing_success=true`
                });
            }

            // Normal Flow: Stripe Checkout
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    // A. The One-Time Fee ($89) - Charged IMMEDIATELY
                    {
                        price_data: {
                            currency: 'aud',
                            product_data: {
                                name: 'Standard Caravan Listing (6 Months)',
                                description: 'Listing fee for 6 months. Auto-renews at $15/mo until sold.',
                            },
                            unit_amount: 8900, // $89.00
                        },
                        quantity: 1,
                    },
                    // B. The Recurring Subscription ($15/mo) - Starts in 180 Days
                    {
                        price: STRIPE_PRICES.PRIVATE_AD_RECURRING,
                        quantity: 1,
                    }
                ],
                mode: 'subscription',
                subscription_data: {
                    trial_period_days: 180, // Free for 6 months (only charges the one-time fee now)
                    metadata: { listingId: listingId }
                },
                success_url: `${request.headers.get('origin')}/client/dashboard?listing_success=true`,
                cancel_url: `${request.headers.get('origin')}/advertise?canceled=true`,
                metadata: {
                    listingId: listingId,
                    type: 'PRIVATE_LISTING'
                },
                allow_promotion_codes: true
            });

            return NextResponse.json({ url: session.url });
        }

        return NextResponse.json({ error: "Invalid request type" }, { status: 400 });

    } catch (error) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
    }
}
