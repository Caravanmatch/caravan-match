import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        if (!process.env.DATABASE_URL) {
            return NextResponse.json({ success: false, error: 'DATABASE_URL missing' }, { status: 500 });
        }

        // Safety check for Prisma initialization
        if (!(prisma as any).dealer || !(prisma as any).client) {
            return NextResponse.json({ success: false, error: 'Prisma Client not fully initialized' }, { status: 500 });
        }

        console.log("Login API hit");
        const body = await request.json();
        const { email, password, role } = body;
        console.log("Login Payload:", email, role);

        if (role === 'dealer') {
            const dealer = await (prisma as any).dealer.findUnique({ where: { email } });

            // Simple password check (In prod, use bcrypt)
            if (dealer && dealer.password === password) {

                // Set simple session cookie
                (await cookies()).set('dealer_session', dealer.id, { httpOnly: true, path: '/' });

                return NextResponse.json({ success: true });
            }
        } else {
            const client = await (prisma as any).client.findUnique({ where: { email } });

            if (client && client.password === password) {
                (await cookies()).set('client_session', client.id, { httpOnly: true, path: '/' });
                return NextResponse.json({ success: true });
            }
        }

        return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
    }
}
