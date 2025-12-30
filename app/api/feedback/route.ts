import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, comment } = body;

        // Validation
        if (!name || !email || !comment) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // Import dynamically to avoid circular deps if any, mostly for cleanness
        const { sendEmail, EmailTemplates } = await import('@/lib/email');

        // Send to Admin (Ben)
        await sendEmail({
            to: 'ben@caravanmatch.com.au', // Use the admin email
            subject: `Feedback from ${name}`,
            html: EmailTemplates.feedbackReceived(name, email, comment)
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Feedback Error:", error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
