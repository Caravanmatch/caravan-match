import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies();
        const dealerId = cookieStore.get('dealer_session')?.value;

        if (!dealerId) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const dealer = await prisma.dealer.findUnique({
            where: { id: dealerId }
        });

        if (!dealer) {
            return NextResponse.json({ error: "Dealer not found" }, { status: 404 });
        }

        // We need a Stripe Customer ID to create a portal session.
        // Assuming we store `stripeCustomerId` on the Dealer model.
        // If not, we might need to search Stripe by email (less robust).

        let customerId = dealer.stripeCustomerId;

        if (!customerId) {
            // Fallback: Try retrieve by email if ID not saved yet
            const customers = await stripe.customers.list({ email: dealer.email, limit: 1 });
            if (customers.data.length > 0) {
                customerId = customers.data[0].id;
                // Ideally save this back to DB
                await prisma.dealer.update({
                    where: { id: dealer.id },
                    data: { stripeCustomerId: customerId }
                });
            } else {
                return NextResponse.json({ error: "No billing account found. Have you subscribed yet?" }, { status: 400 });
            }
        }

        const origin = request.headers.get('origin') || 'https://www.caravanmatch.com.au';

        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${origin}/dealer/dashboard`,
        });

        return NextResponse.json({ url: session.url });

    } catch (error: any) {
        console.error("Stripe Portal Error:", error);
        return NextResponse.json({ error: "Failed to load portal" }, { status: 500 });
    }
}
