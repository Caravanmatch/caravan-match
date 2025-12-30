import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    try {
        const cookieStore = await cookies();
        const isAdmin = cookieStore.get('admin_session')?.value === 'true';

        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;

        // Delete dealer. Quotes should be deleted first to avoid FK issues.
        await prisma.quote.deleteMany({
            where: { dealerId: id }
        });

        await prisma.dealer.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Admin Delete Dealer Error:", error);
        return NextResponse.json({ error: "Failed to delete dealer" }, { status: 500 });
    }
}
