import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

// GET: Fetch single listing (for editing)
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const listing = await prisma.usedCaravan.findUnique({
            where: { id: id },
        });

        if (!listing) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        return NextResponse.json(listing);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch listing" }, { status: 500 });
    }
}

// PUT: Update listing
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const data = await request.json();

        const cookieStore = await cookies();
        const clientId = cookieStore.get('client_session')?.value;
        const dealerId = cookieStore.get('dealer_session')?.value;

        if (!clientId && !dealerId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const listing = await prisma.usedCaravan.findUnique({ where: { id } });
        if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });

        // Ownership & Subscription Check
        if (clientId && listing.clientId !== clientId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        if (dealerId) {
            if ((listing as any).dealerId !== dealerId) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

            // SECURITY: Verify Active Subscription on Edit
            const dealer = await prisma.dealer.findUnique({ where: { id: dealerId } });
            if (!dealer || dealer.subscriptionStatus !== 'ACTIVE') {
                return NextResponse.json({ error: "Active dealer subscription required." }, { status: 403 });
            }
        }

        // Clean Update Data
        const updateData: any = {
            category: data.category,
            year: parseInt(data.year) || 0,
            make: data.make,
            model: data.model || "",
            length: parseFloat(data.length) || 0,
            sleeps: data.sleeps || "2",
            price: parseFloat(data.price) || 0,
            description: data.description || "",
            sellerName: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
            sellerEmail: data.email,
            sellerPhone: data.phone || "",
            location: data.location || "",
            condition: data.condition || (listing as any).condition
        };

        // Only update images if they are provided / changed
        if (data.images) {
            // In a real app we would handle array logic better
            // updateData.images = ...
        }

        const updated = await prisma.usedCaravan.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(updated);

    } catch (error) {
        console.error("Update Error:", error);
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}

// DELETE: Remove listing
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const clientId = cookieStore.get('client_session')?.value;
        const dealerId = cookieStore.get('dealer_session')?.value;

        if (!clientId && !dealerId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Verify ownership
        const listing = await prisma.usedCaravan.findUnique({
            where: { id: id },
        });

        if (!listing) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        if (clientId && listing.clientId !== clientId) {
            return NextResponse.json({ error: "Forbidden. You do not own this listing." }, { status: 403 });
        }
        if (dealerId && (listing as any).dealerId !== dealerId) {
            return NextResponse.json({ error: "Forbidden. You do not own this listing." }, { status: 403 });
        }

        // Delete
        await prisma.usedCaravan.delete({
            where: { id: id },
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Delete Listing Error:", error);
        return NextResponse.json({ error: "Failed to delete listing" }, { status: 500 });
    }
}
