import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { randomBytes } from 'crypto';
import { sendEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const email = body.email; // Do not force lowercase, use DB matching

        // DEBUG: Print Key Prefix to Logs to verify Production vs Preview keys
        const key = process.env.RESEND_API_KEY || "MISSING";
        console.log(`[DEBUG] Using Resend Key starting with: ${key.substring(0, 5)}...`);

        console.log(`[DEBUG] Forgot Password Request for: ${email}`);

        // Generate 6-Digit Code
        const token = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = new Date(Date.now() + 3600000); // 1 hour

        // Try find Dealer first (Case Insensitive)
        let userType = 'dealer';
        let user: any = await prisma.dealer.findFirst({
            where: { email: { equals: email, mode: 'insensitive' } }
        });

        if (!user) {
            userType = 'client';
            user = await (prisma as any).client.findFirst({
                where: { email: { equals: email, mode: 'insensitive' } }
            });
        }

        if (user) {
            console.log(`[DEBUG] User found (Type: ${userType}, ID: ${user.id})`);

            // Update Token
            if (userType === 'dealer') {
                await prisma.dealer.update({
                    where: { id: user.id },
                    data: { resetToken: token, resetTokenExpiry: expiry }
                });
            } else {
                await (prisma as any).client.update({
                    where: { id: user.id },
                    data: { resetToken: token, resetTokenExpiry: expiry }
                });
            }

            // Send Real Email
            console.log(`[DEBUG] Attempting to send reset code via Resend...`);

            const result = await sendEmail({
                to: email,
                subject: 'Reset Password Code - Caravan Match',
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2>Password Reset Request</h2>
                        <p>Use the code below to reset your Caravan Match password:</p>
                        
                        <div style="background: #f4f4f5; font-size: 24px; font-weight: bold; letter-spacing: 5px; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
                            ${token}
                        </div>

                        <p>This code will expire in 1 hour.</p>
                        <p style="font-size: 12px; color: #666; margin-top: 20px;">If you didn't ask for this, you can safely ignore this email.</p>
                    </div>
                `
            });

            // CRITICAL: Check if we are incorrectly in simulation mode (Missing Keys)
            if ((result as any).simulated) {
                return NextResponse.json({
                    success: false,
                    error: "SERVER CONFIG ERROR: API Key Missing (Simulation Mode). Please check Vercel Env Vars."
                }, { status: 500 });
            }

            if (!result.success) {
                console.error("[DEBUG] Send Email Failed:", result.error);
                // Return exact error to client for debugging
                return NextResponse.json({
                    success: false,
                    error: "Email delivery failed",
                    details: result.error
                }, { status: 500 });
            }

            console.log("[DEBUG] Email sent successfully");
            return NextResponse.json({ success: true, message: "Email sent" });

        } else {
            console.log(`[DEBUG] User NOT found for email: ${email}`);
            // Return specific error for debugging
            return NextResponse.json({ success: false, error: "No account found with that email." }, { status: 404 });
        }

    } catch (error: any) {
        console.error("Forgot PW Server Error:", error);
        return NextResponse.json({ success: false, error: "Server error", details: error.message }, { status: 500 });
    }
}
