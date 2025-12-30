import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        // Auth Check
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }

        const updated = await prisma.usedCaravan.update({
            where: { id },
            data: { status: 'APPROVED' }
        });

        // Optional: Send "Your Ad is Live" email here

        return NextResponse.json({ success: true, listing: updated });

    } catch (error) {
        console.error("Approval Error:", error);
        return NextResponse.json({ error: "Failed to approve listing" }, { status: 500 });
    }
}
