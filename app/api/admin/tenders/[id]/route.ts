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

        // Delete the tender (Quotes will be deleted via cascade if configured, otherwise we might need to manual delete)
        // Assuming schema has relation with onDelete: Cascade, or we just delete the tender and let quotes dangle (bad) or fail.
        // Let's assume standard behavior. If it fails due to FK constraint, we'll need to update Schema or delete quotes first.
        // For safely, let's delete quotes first.

        await prisma.quote.deleteMany({
            where: { tenderId: id }
        });

        await prisma.tender.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Admin Delete Tender Error:", error);
        return NextResponse.json({ error: "Failed to delete tender" }, { status: 500 });
    }
}
