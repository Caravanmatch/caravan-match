import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { token, password } = await request.json();

        // Find user by token
        const dealer = await prisma.dealer.findFirst({
            where: {
                resetToken: token,
                resetTokenExpiry: { gt: new Date() } // Must not be expired
            }
        });

        if (dealer) {
            await prisma.dealer.update({
                where: { id: dealer.id },
                data: {
                    password: password,
                    resetToken: null,
                    resetTokenExpiry: null
                }
            });
            return NextResponse.json({ success: true });
        }

        const client = await (prisma as any).client.findFirst({
            where: {
                resetToken: token,
                resetTokenExpiry: { gt: new Date() }
            }
        });

        if (client) {
            await (prisma as any).client.update({
                where: { id: client.id },
                data: {
                    password: password,
                    resetToken: null,
                    resetTokenExpiry: null
                }
            });
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid or expired token." }, { status: 400 });

    } catch (error) {
        console.error("Reset PW Error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
