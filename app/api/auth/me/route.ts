import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

// Helper to verify token
const verifyToken = (token: string) => {
    try {
        return verify(token, JWT_SECRET) as any;
    } catch (e) {
        return null;
    }
};

export async function GET() {
    const cookieStore = await cookies();
    const dealerToken = cookieStore.get('dealer_session');
    const clientToken = cookieStore.get('client_session');

    // Helper to extract ID (JWT or Raw)
    const getId = (token: string) => {
        const decoded = verifyToken(token);
        if (decoded) return { id: decoded.dealerId || decoded.clientId, role: decoded.role };
        // Fallback to raw ID
        return { id: token, role: null }; // Role unknown from raw ID, have to guess or query
    };

    // Check Dealer
    if (dealerToken) {
        const { id } = getId(dealerToken.value);
        // Try finding dealer
        const dealer = await prisma.dealer.findUnique({
            where: { id },
            select: { id: true, name: true, email: true, company: true }
        });
        if (dealer) {
            return NextResponse.json({
                user: {
                    ...dealer,
                    role: 'dealer',
                    displayName: dealer.company || dealer.name
                }
            });
        }
    }

    // Check Client
    if (clientToken) {
        const { id } = getId(clientToken.value);
        const client = await prisma.client.findUnique({
            where: { id },
            select: { id: true, name: true, email: true }
        });
        if (client) {
            return NextResponse.json({
                user: {
                    ...client,
                    role: 'client',
                    displayName: client.name
                }
            });
        }
    }

    return NextResponse.json({ user: null });
}
