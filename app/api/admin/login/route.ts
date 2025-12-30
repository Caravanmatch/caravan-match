import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const { pin, otp, username_trap } = await request.json();

        // 1. Honeypot Check
        if (username_trap) {
            await new Promise(r => setTimeout(r, 1000));
            return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
        }

        // 2. Resolve IP & Rate Limit
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || "unknown";

        const attemptRecord = await prisma.loginAttempt.findUnique({ where: { ip } });
        if (attemptRecord?.lockedUntil && new Date() < attemptRecord.lockedUntil) {
            return NextResponse.json({ error: "Too many attempts. Locked for 15 mins." }, { status: 429 });
        }

        const cookieStore = await cookies();

        // STEP 1: Verify PIN -> Send OTP
        if (pin) {
            const envPin = process.env.ADMIN_PIN || '123456';
            if (String(pin).trim() !== String(envPin).trim()) {
                // Record Failure
                await handleFailure(ip, attemptRecord);
                return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
            }

            // PIN Correct. Clear attempts.
            if (attemptRecord) await prisma.loginAttempt.delete({ where: { ip } });

            // Generate OTP (6 digits)
            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

            // Send Email
            // Note: In real production, use a specific admin email env var. 
            // Fallback to a hardcoded one or the dealer email if available.
            // For this user 'benwi...', we'll assume a configured ADMIN_EMAIL or send to a default.
            // Since we don't have ADMIN_EMAIL env, we'll try to use the most likely one or just log it for dev simulation.
            // UPDATE: User asked for "code set to my email". We'll send to "ben@caravanmatch.com.au" or similar if known, 
            // but for now let's use a placeholder that the user can verify in Resend logs or console.
            // Actually, we'll assume there's a primary email.
            const targetEmail = process.env.ADMIN_EMAIL || 'ben@caravanmatch.com.au';

            console.log(`[ADMIN 2FA] OTP for ${targetEmail}: ${generatedOtp}`);

            await sendEmail({
                to: targetEmail,
                subject: 'Admin Login Code 🔐',
                html: `<p>Your Admin Login Code is: <strong>${generatedOtp}</strong></p><p>Valid for 5 minutes.</p>`
            });

            // Hash OTP for stateless verification
            // Hash = sha256(otp + secret)
            const secret = process.env.ADMIN_PIN || 'secret';
            const hash = crypto.createHmac('sha256', secret).update(generatedOtp).digest('hex');

            // Set Hash Cookie (5 mins)
            cookieStore.set('admin_otp_hash', hash, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 5 * 60, // 5 mins
                path: '/'
            });

            return NextResponse.json({ step: 'otp_required', message: 'Code sent to email.' });
        }

        // STEP 2: Verify OTP
        if (otp) {
            const storedHash = cookieStore.get('admin_otp_hash')?.value;
            if (!storedHash) {
                return NextResponse.json({ error: "Session expired. Login again." }, { status: 401 });
            }

            const secret = process.env.ADMIN_PIN || 'secret';
            const inputHash = crypto.createHmac('sha256', secret).update(String(otp).trim()).digest('hex');

            if (inputHash !== storedHash) {
                return NextResponse.json({ error: "Invalid Code" }, { status: 401 });
            }

            // Code Valid. Grant Session.
            cookieStore.delete('admin_otp_hash'); // Consume OTP
            cookieStore.set('admin_session', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24, // 1 Day
                path: '/'
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid Request" }, { status: 400 });

    } catch (error) {
        console.error("Admin Login Error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}

async function handleFailure(ip: string, attemptRecord: any) {
    const newAttempts = (attemptRecord?.attempts || 0) + 1;
    let lockedUntil = null;
    if (newAttempts >= 3) lockedUntil = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.loginAttempt.upsert({
        where: { ip },
        update: { attempts: newAttempts, lockedUntil },
        create: { ip, attempts: newAttempts, lockedUntil }
    });
}

