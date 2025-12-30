import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const client = await prisma.client.findUnique({
            where: { email: 'client@example.com' }
        });

        if (!client) {
            await prisma.client.create({
                data: {
                    name: "Test Customer",
                    email: "client@example.com",
                    password: "password123", // Matches frontend default
                    location: "Melbourne",
                    phone: "0400 123 456"
                }
            });
            return NextResponse.json({ status: "Created Client" });
        }
        return NextResponse.json({ status: "Client Exists", id: client.id });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
