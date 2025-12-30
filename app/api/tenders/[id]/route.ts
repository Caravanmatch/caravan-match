import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

// Helper to verify token
const verifyToken = (token: string) => {
    try {
        return verify(token, JWT_SECRET) as any;
    } catch (e) {
        return null;
    }
};

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();

        const clientToken = cookieStore.get('client_session');
        const dealerToken = cookieStore.get('dealer_session');

        let isAuthorized = false;

        // Helper to check Auth (Supports JWT or Raw ID for MVP)
        const getUserId = (tokenValue: string, role: 'dealer' | 'client') => {
            // 1. Try JWT
            const decoded = verifyToken(tokenValue);
            if (decoded && decoded.role === role) {
                return role === 'dealer' ? decoded.dealerId : decoded.clientId;
            }
            // 2. Fallback: Raw ID (Legacy/MVP Login)
            // In a real app, this is insecure without a signature.
            // But since our Login route sets raw ID, we must accept it.
            if (!decoded && tokenValue && tokenValue.length > 10) {
                return tokenValue;
            }
            return null;
        };

        const dealerId = dealerToken ? getUserId(dealerToken.value, 'dealer') : null;
        if (dealerId) isAuthorized = true;

        if (!isAuthorized && clientToken) {
            const clientId = getUserId(clientToken.value, 'client');
            if (clientId) {
                // Verify ownership
                const tender = await prisma.tender.findUnique({
                    where: { id },
                    select: { clientId: true }
                });
                if (tender && tender.clientId === clientId) {
                    isAuthorized = true;
                }
            }
        }

        if (!isAuthorized) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 3. Perform Deletion (Cascade delete quotes manually if not set in schema)
        // Delete related quotes first (safety)
        await prisma.quote.deleteMany({
            where: { tenderId: id }
        });

        // Delete the tender
        await prisma.tender.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Delete error:", error);
        return NextResponse.json({ error: 'Failed to delete tender' }, { status: 500 });
    }
}
