import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { sendEmail, EmailTemplates } from '@/lib/email';
import { headers } from 'next/headers';
export const dynamic = 'force-dynamic';
// Security: You should add a Webhook Secret check here in production

export async function POST(request: Request) {
    const body = await request.text();
    const signature = (await headers()).get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!secret) {
            // In development without a secret, we might parse directly, but warn loudly.
            // For rigorous production: throw error.
            if (process.env.NODE_ENV === 'production') {
                throw new Error("Missing STRIPE_WEBHOOK_SECRET in production");
            }
            console.warn("⚠️ STRIPE_WEBHOOK_SECRET missing. Skipping signature verification (Dev Only).");
            event = JSON.parse(body);
        } else {
            event = stripe.webhooks.constructEvent(body, signature, secret);
        }
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // 1. Checkout Completed (Initial Sign Up)
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const dealerId = session.metadata?.dealerId;
        const listingId = session.metadata?.listingId;

        // Handle Dealer Subscription Sign Up
        if (dealerId && session.subscription) {
            console.log(`💰 New Subscription! Dealer ${dealerId}`);
            const updatedDealer = await prisma.dealer.update({
                where: { id: dealerId },
                data: {
                    subscriptionStatus: 'TRIAL', // Starts with Trial
                    planTier: session.metadata?.tier || 'STARTER',
                    stripeCustomerId: session.customer as string,
                    stripeSubscriptionId: session.subscription as string,
                    hasUsedTrial: true
                }
            });

            // Send Welcome Email
            await sendEmail({
                to: updatedDealer.email,
                subject: 'Welcome to Caravan Match! 🚐',
                html: EmailTemplates.welcomeDealer(updatedDealer.name)
            });
        }

        // Handle Private Ad Payment (One-off)
        if (listingId) {
            console.log(`💰 Ad Payment success! listing ${listingId}`);

            // Fetch listing to get email
            const listing = await prisma.usedCaravan.findUnique({ where: { id: listingId } });

            if (listing) {
                // Calculate Expiry (6 Months = ~180 Days)
                const sixMonthsFromNow = new Date();
                sixMonthsFromNow.setDate(sixMonthsFromNow.getDate() + 180);

                await prisma.usedCaravan.update({
                    where: { id: listingId },
                    data: {
                        status: 'APPROVED',
                        expiresAt: sixMonthsFromNow
                    }
                });

                // Send Approval Email
                await sendEmail({
                    to: listing.sellerEmail,
                    subject: 'Your Ad is Live! 🚐',
                    html: EmailTemplates.listingApproved(listing.sellerName, listing.id)
                });
            }
        }
    }

    // 2. Subscription Updated (Trial -> Active, or Payment Failed)
    if (event.type === 'customer.subscription.updated') {
        const subscription = event.data.object;
        // Search by Stripe Sub ID
        const dealer = await prisma.dealer.findFirst({
            where: { stripeSubscriptionId: subscription.id }
        });

        if (dealer) {
            console.log(`🔄 Sub Update: ${dealer.id} -> ${subscription.status}`);
            await prisma.dealer.update({
                where: { id: dealer.id },
                data: {
                    subscriptionStatus: subscription.status.toUpperCase(), // 'active', 'trialing', 'past_due'
                    // Check logic for 'active' to ensure tier consistency if needed
                }
            });
        }
    }

    // 3. Subscription Deleted (Canceled)
    if (event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object;
        const dealer = await prisma.dealer.findFirst({
            where: { stripeSubscriptionId: subscription.id }
        });

        if (dealer) {
            console.log(`❌ Sub Canceled: ${dealer.id}`);
            await prisma.dealer.update({
                where: { id: dealer.id },
                data: { subscriptionStatus: 'CANCELED' }
            });
        }
    }

    return NextResponse.json({ received: true });
}
