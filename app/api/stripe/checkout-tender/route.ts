import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;
        const origin = (await headers()).get('origin');

        // Create Checkout Session for $4.99 AUD
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'aud',
                        product_data: {
                            name: 'Launch Tender (Single)',
                            description: 'Launch your caravan build request to our dealer network.',
                        },
                        unit_amount: 499, // $4.99
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/builder/submit?payment_success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/builder/submit?canceled=true`,
            customer_email: email, // Pre-fill email
        });

        return NextResponse.json({ url: session.url });

    } catch (error: any) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
    }
}
