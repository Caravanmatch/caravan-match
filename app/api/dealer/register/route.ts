import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
// import { sendEmail, EmailTemplates } from '@/lib/email'; // Moved to dynamic import
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Anti-Spam Check (Honeypot)
        if (body.website_url_check && body.website_url_check.length > 0) {
            console.warn(`Spam bot caught: ${body.email}`);
            // Return fake success to confuse bots, or just error
            return NextResponse.json({ success: false, error: "Validation failed." }, { status: 400 });
        }

        // 2. Duplicate Check
        const existing = await prisma.dealer.findUnique({
            where: { email: body.email }
        });

        if (existing) {
            return NextResponse.json({ success: false, error: "Email already registered." }, { status: 400 });
        }

        // 3. Create Dealer (Auto-Approved for Speed)
        const dealer = await prisma.dealer.create({
            data: {
                company: body.company,
                name: body.name,
                email: body.email,
                phone: body.phone,
                // abn: body.abn, // TODO: Run migration to add these columns
                // acn: body.acn,
                password: body.password, // Storing plain text for MVP

                // Defaults
                subscriptionStatus: 'TRIAL',
                planTier: body.planTier || 'STARTER',
                subscriptionTier: body.planTier === 'STARTER' ? 'FREE' : 'PRO', // Simple logic for now
                location: 'Australia', // Default
                quotesUsedThisMonth: 0,
                hasUsedTrial: false,
                marketIntel: body.marketIntel || false,
            } as any
        });


        // 4. Send Welcome Email
        try {
            const { sendEmail, EmailTemplates } = await import('@/lib/email');

            console.log(`[DEBUG] Sending welcome email to: ${dealer.email}`);

            const result = await sendEmail({
                to: dealer.email,
                subject: 'Welcome to Caravan Match! (14 Days Free)',
                html: EmailTemplates.welcomeDealer(dealer.name)
            });

            if (!result.success) {
                console.error("[DEBUG] Welcome Email Failed:", result.error);
                // Return success:false so UI knows, but id is created
                return NextResponse.json({
                    success: false,
                    id: dealer.id,
                    error: "Account created but email failed: " + JSON.stringify(result.error)
                }, { status: 201 }); // 201 Created
            }
        } catch (e) {
            console.error("Failed to send welcome email", e);
            // Don't block registration
        }

        // 4. Auto Login
        (await cookies()).set('dealer_session', dealer.id, { httpOnly: true, path: '/' });

        return NextResponse.json({ success: true, id: dealer.id });

    } catch (error) {
        console.error("Dealer registration error:", error);
        return NextResponse.json({ success: false, error: "Registration failed: " + ((error as any).message || error) }, { status: 500 });
    }
}
