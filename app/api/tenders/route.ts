import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';

// POST: Create a new Tender (Customer submits)
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const cookieStore = await cookies();
        const clientId = cookieStore.get('client_session')?.value;

        // 1. Check Tender Limit (By Client ID OR Email)
        // Free Limit: 3 Tenders

        let isPaid = false;

        // Secure Payment Verification
        if (body.paymentSessionId) {
            try {
                // Determine Secret (Dev/Prod) - Handled by lib/stripe
                // Verify Session
                // Dynamic Import to avoid startup errors if Stripe not configured in some envs? 
                // No, lib/stripe handles this safely typically.
                const { stripe } = await import('@/lib/stripe');
                const session = await stripe.checkout.sessions.retrieve(body.paymentSessionId);
                if (session.payment_status === 'paid') {
                    isPaid = true;
                }
            } catch (e) {
                console.error("Payment Verification Failed:", e);
            }
        }

        if (isPaid) {
            // Authorized Bypass
        } else {
            let count = 0;

            if (clientId) {
                const client = await (prisma as any).client.findUnique({ where: { id: clientId } });
                count = client?.tenderCount || 0;
            } else if (body.customerEmail) {
                // Guest: Check by Email
                count = await prisma.tender.count({
                    where: { customerEmail: body.customerEmail }
                });
            }

            if (count >= 3) {
                return NextResponse.json({
                    success: false,
                    error: 'Free Limit Reached (3 Tenders).',
                    requiresPayment: true
                }, { status: 402 });
            }
        }

        // 2. Account Creation / Linking
        let finalClientId = clientId;

        // If no logged in user, but email & password provided -> Create/Find User
        if (!finalClientId && body.customerEmail && body.password) {
            const existingClient = await (prisma as any).client.findUnique({
                where: { email: body.customerEmail }
            });

            if (existingClient) {
                // If they exist, we link them. 
                // NOTE: In a strict security model, we'd require login first. 
                // For MVP friction-reduction, we link if email matches.
                finalClientId = existingClient.id;
            } else {
                // Create New Client
                const newClient = await (prisma as any).client.create({
                    data: {
                        email: body.customerEmail,
                        password: body.password, // Storing plain for MVP speed
                        name: body.customerName || 'Caravan Enthusiast',
                        location: body.customerPostcode || 'Australia',
                        phone: '' // Optional in flow
                    }
                });
                finalClientId = newClient.id;

                // Set cookie for immediate login
                (await cookies()).set('client_session', newClient.id, { httpOnly: true, path: '/' });
            }
        }

        // Ensure we handle the arrays correctly
        // If appliances is missing, default to empty array
        const appliancesData = body.appliances || [];

        const tender = await (prisma as any).tender.create({
            data: {
                // Link to Client if logged in
                ...(finalClientId && { clientId: finalClientId }),
                // Customer Details
                customerName: body.customerName,
                customerEmail: body.customerEmail,
                customerPostcode: body.customerPostcode,
                targetDate: body.targetDate,

                tow_vehicle: body.tow_vehicle,
                type: body.type,
                length: body.length,
                frame: body.frame,
                solar: body.solar,
                batteries: body.batteries,
                inverter: body.inverter,
                water_tanks: body.water_tanks,
                external_shower: body.external_shower,
                hot_water: body.hot_water,
                toilet: body.toilet,
                fridge_size: body.fridge_size,
                fridge_type: body.fridge_type,

                appliances: JSON.stringify(appliancesData),

                ac: body.ac,
                diesel_heater: body.diesel_heater,
                bed: body.bed,
                kids_beds: body.kids_beds,
                fixtures: body.fixtures,
                outdoor_kitchen: JSON.stringify(body.outdoor_kitchen || []),
                electric_awning: body.electric_awning,
                auto_level: body.auto_level,
                final_comments: body.final_comments,

                custom_notes: JSON.stringify(body.custom_notes || {}),

                status: 'OPEN',
            },
        });

        // Increment Client Tender Count
        if (finalClientId) {
            await (prisma as any).client.update({
                where: { id: finalClientId },
                data: { tenderCount: { increment: 1 } }
            });
        }

        // --- EMAIL NOTIFICATIONS ---
        try {
            const { sendEmail, EmailTemplates } = await import('@/lib/email');

            // 1. Notify Admin (Ben)
            await sendEmail({
                to: 'ben@caravanmatch.com.au', // Replace with real admin email or env var
                subject: `New Tender: ${tender.id.slice(-6)}`,
                html: EmailTemplates.newTenderAdmin(tender.id, body.customerName, body.customerPostcode)
            });

            // 2. Notify Customer (Welcome/Confirmation)
            if (body.customerEmail && body.customerName) {
                await sendEmail({
                    to: body.customerEmail,
                    subject: 'Your Dream Build is Live! 🚀',
                    html: EmailTemplates.welcomeCustomer(body.customerName)
                });
            }
        } catch (emailErr) {
            console.error("Email notification failed (non-critical):", emailErr);
        }

        // 3. Notify Active Dealers (Lead Alert)
        try {
            const { sendEmail, EmailTemplates } = await import('@/lib/email');

            // Find dealers who are Active or Trialing
            const activeDealers = await (prisma as any).dealer.findMany({
                where: {
                    subscriptionStatus: { in: ['ACTIVE', 'TRIAL'] }
                },
                select: { email: true, name: true }
            });

            console.log(`🔔 Notifying ${activeDealers.length} dealers of new lead.`);

            // Send in parallel (fire and forget mostly, but we await to ensure loop triggers)
            await Promise.all(activeDealers.map((dealer: any) =>
                sendEmail({
                    to: dealer.email,
                    subject: `New Lead in ${body.customerPostcode || 'Australia'}: ${body.type || 'Caravan'}`,
                    html: EmailTemplates.newLeadAlert(
                        dealer.name,
                        tender.id,
                        body.customerPostcode || 'Australia',
                        body.type || 'Caravan'
                    )
                })
            ));

        } catch (dealerErr) {
            console.error("Dealer Notification Error:", dealerErr);
        }
        // ---------------------------

        return NextResponse.json({ success: true, id: tender.id });
    } catch (error) {
        console.error('Error creating tender:', error);
        return NextResponse.json({ success: false, error: 'Failed to create tender' }, { status: 500 });
    }
}

// GET: Fetch all Tenders (Dealer Dashboard)
export async function GET() {
    try {
        const tenders = await prisma.tender.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(tenders);
    } catch (error) {
        console.error('Error fetching tenders:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
    }
}
