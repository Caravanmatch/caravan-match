import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendEmail } from '@/lib/email';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            tiktok,
            youtube,
            instagram,
            otherChannels,
            followers,
            pitch,
            agreedToTerms
        } = body;

        // Validation
        if (!name || !email || !pitch || !agreedToTerms) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create ambassador application
        const application = await prisma.ambassadorApplication.create({
            data: {
                name,
                email,
                phone: phone || null,
                tiktok: tiktok || null,
                youtube: youtube || null,
                instagram: instagram || null,
                otherChannels: otherChannels || null,
                followers: followers || null,
                pitch,
                status: 'PENDING',
            },
        });

        // Send notification email to admin
        const socialChannels = [
            tiktok ? `TikTok: ${tiktok}` : null,
            youtube ? `YouTube: ${youtube}` : null,
            instagram ? `Instagram: ${instagram}` : null,
            otherChannels ? `Other: ${otherChannels}` : null,
        ].filter(Boolean).join('<br/>');

        await sendEmail({
            to: 'ben@caravanmatch.com.au',
            subject: `🌟 New Ambassador Application: ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #eab308;">New Founding Ambassador Application</h2>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Applicant Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <p><strong>Followers:</strong> ${followers || 'Not specified'}</p>
                    </div>

                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Social Channels</h3>
                        <p>${socialChannels || 'None provided'}</p>
                    </div>

                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Why They Should Be Selected</h3>
                        <p style="white-space: pre-wrap;">${pitch}</p>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background: #eab308; color: white; border-radius: 8px;">
                        <p style="margin: 0;"><strong>Application ID:</strong> ${application.id}</p>
                        <p style="margin: 10px 0 0 0;"><strong>Status:</strong> PENDING REVIEW</p>
                    </div>
                </div>
            `
        });

        return NextResponse.json({ success: true, id: application.id });
    } catch (error) {
        console.error('Ambassador application error:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
