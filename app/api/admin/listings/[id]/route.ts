import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function PUT(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    try {
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;
        const { description, images } = await request.json();

        const updatedListing = await prisma.usedCaravan.update({
            where: { id },
            data: {
                description,
                images // Storing as string or JSON based on current schema (String currently)
            }
        });

        return NextResponse.json({ success: true, listing: updatedListing });

    } catch (error) {
        console.error("Admin Update Error:", error);
        return NextResponse.json({ error: "Failed to update listing" }, { status: 500 });
    }
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    try {
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;

        // Delete the listing
        await prisma.usedCaravan.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Admin Delete Listing Error:", error);
        return NextResponse.json({ error: "Failed to delete listing" }, { status: 500 });
    }
}
