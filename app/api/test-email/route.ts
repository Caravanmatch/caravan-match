import { NextResponse } from 'next/server';
import { sendEmail, EmailTemplates } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email required" }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY || "";
        const keyPrefix = apiKey ? apiKey.substring(0, 5) + "..." : "MISSING";

        console.log(`[DEBUG] Test Email to: ${email}`);
        console.log(`[DEBUG] Key Prefix: ${keyPrefix}`);

        const result = await sendEmail({
            to: email,
            subject: 'Welcome to Caravan Match! 🚐 (Test)',
            html: EmailTemplates.welcomeDealer("Test Dealer")
        });

        return NextResponse.json({
            success: true,
            debug_info: {
                key_prefix: keyPrefix,
                env_var_present: !!process.env.RESEND_API_KEY,
                node_env: process.env.NODE_ENV
            },
            result_from_lib: result
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
