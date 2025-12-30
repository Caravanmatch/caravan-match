import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail, EmailTemplates } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, listingId, website_check } = body;

        // Honeypot Check
        if (website_check) {
            console.warn(`Spam bot caught on enquiry: ${email}`);
            return NextResponse.json({ success: true }); // Fake success
        }

        if (!name || !email || !message || !listingId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Fetch the Listing to get Seller Details
        const listing = await prisma.usedCaravan.findUnique({
            where: { id: listingId }
        });

        if (!listing) {
            return NextResponse.json({ error: "Listing not found" }, { status: 404 });
        }

        // 2. Save Enquiry to Database
        await prisma.enquiry.create({
            data: {
                name,
                email,
                phone: phone || null,
                message,
                listingId,
                status: 'NEW'
            }
        });

        // 3. Send Email to Seller
        // Note: In a real marketplace, we might mask emails or store messages in DB.
        // For MVP, we send directly to seller.
        const vanTitle = `${listing.year} ${listing.make} ${listing.model}`;

        const emailResult = await sendEmail({
            to: listing.sellerEmail,
            subject: `New Enquiry: ${vanTitle}`,
            html: EmailTemplates.newEnquiry(
                listing.sellerName,
                name,
                email,
                phone,
                message,
                vanTitle,
                listing.id
            )
        });

        if (!emailResult.success) {
            console.error("Failed to send enquiry email:", emailResult.error);
            // We still return success to the user so they don't think it failed, but log internally.
            // Or return error if critical.
        }

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error("Contact API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
