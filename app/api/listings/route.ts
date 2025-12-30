import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Log received data for debugging
        console.log("Received listing data:", data);

        const missing = [];
        if (!data.make) missing.push("make");
        if (!data.category) missing.push("category");
        if (!data.email) missing.push("email");
        if (!data.price) missing.push("price");
        if (!data.year) missing.push("year");

        if (missing.length > 0) {
            console.error("Missing fields:", missing);
            return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
        }

        const cookieStore = await import('next/headers').then(mod => mod.cookies());
        const clientId = cookieStore.get('client_session')?.value;
        const dealerId = cookieStore.get('dealer_session')?.value;

        if (!clientId && !dealerId) {
            return NextResponse.json({ error: "Unauthorized. Please login to sell your van." }, { status: 401 });
        }

        const listingData: any = {
            category: data.category,
            year: parseInt(data.year) || 0,
            make: data.make,
            model: data.model || "",
            length: parseFloat(data.length) || 0,
            sleeps: data.sleeps || "2",
            price: parseFloat(data.price) || 0,
            description: data.description || "",
            images: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
            sellerName: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
            sellerEmail: data.email,
            sellerPhone: data.phone || "",
            location: data.location || "",
            condition: data.condition || "Used" // Default to Used
        };

        if (dealerId) {
            // SECURITY: Verify Dealer Subscription
            const dealer = await prisma.dealer.findUnique({
                where: { id: dealerId }
            });

            if (!dealer || !['ACTIVE', 'TRIAL'].includes(dealer.subscriptionStatus)) {
                return NextResponse.json({ error: "Active dealer subscription required." }, { status: 403 });
            }

            listingData.dealerId = dealerId;
            listingData.status = "APPROVED"; // Dealers skip payment/pending
        } else {
            listingData.clientId = clientId;
            listingData.status = "PENDING"; // Clients need to pay
        }

        const listing = await prisma.usedCaravan.create({
            data: listingData,
        });

        return NextResponse.json({ success: true, id: listing.id });
    } catch (error: any) {
        console.error("Failed to create listing:", error);
        return NextResponse.json({ error: "Internal Server Error: " + error.message, details: error }, { status: 500 });
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const make = searchParams.get("make");

    const whereClause: any = {
        status: "APPROVED", // Only show approved listings in the marketplace
    };

    if (make && make !== "Any Make") {
        whereClause.make = make;
    }

    try {
        const listings = await prisma.usedCaravan.findMany({
            where: whereClause,
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(listings);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
    }
}
