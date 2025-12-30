import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const results = {
        database: { status: 'PENDING', message: '' },
        stripe: { status: 'PENDING', message: '' },
        env: { status: 'PENDING', message: '' },
        usedCaravanTable: { status: 'PENDING', message: '' }
    };

    const { searchParams } = new URL(request.url);
    if (searchParams.get('action') === 'test_email') {
        const to = searchParams.get('to') || 'ben@caravanmatch.com.au';
        const { sendEmail } = await import('@/lib/email');
        const testRes = await sendEmail({
            to,
            subject: 'Test Email from Diagnostics',
            html: `<h1>It Works!</h1><p>Resend is configured correctly.</p><p>Sent to: ${to}</p>`
        });
        return NextResponse.json({
            target: to,
            apiKeyPresent: !!process.env.RESEND_API_KEY,
            result: testRes
        });
    }

    // 1. Check Environment Variables
    try {
        const missing = [];
        if (!process.env.DATABASE_URL) missing.push("DATABASE_URL");
        if (!process.env.STRIPE_SECRET_KEY) missing.push("STRIPE_SECRET_KEY");

        if (missing.length > 0) {
            results.env = { status: 'ERROR', message: `Missing: ${missing.join(', ')}` };
        } else {
            results.env = { status: 'OK', message: 'All critical keys present' };
        }
    } catch (e: any) {
        results.env = { status: 'ERROR', message: e.message };
    }

    // 2. Check Database Connection (General)
    try {
        await prisma.$queryRaw`SELECT 1`;
        results.database = { status: 'OK', message: 'Connected to Neon Postgres' };
    } catch (e: any) {
        console.error("DB Error:", e);
        results.database = { status: 'ERROR', message: e.message };
    }

    // 3. Check Specific Table (UsedCaravan) - The troublemaker
    try {
        const count = await prisma.usedCaravan.count();
        results.usedCaravanTable = { status: 'OK', message: `Table exists. Records: ${count}` };
    } catch (e: any) {
        console.error("Table Error:", e);
        results.usedCaravanTable = { status: 'ERROR', message: 'Table verification failed. Migration needed?' };
    }

    // 4. Check Stripe Connection
    try {
        const products = await stripe.products.list({ limit: 1 });
        results.stripe = { status: 'OK', message: 'Connected to Stripe API' };
    } catch (e: any) {
        console.error("Stripe Error:", e);
        results.stripe = { status: 'ERROR', message: e.message };
    }

    return NextResponse.json(results);
}
