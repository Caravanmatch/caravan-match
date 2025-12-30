import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const admin = await prisma.dealer.findUnique({
            where: { email: 'admin@caravanmatch.com.au' }
        });

        if (!admin) {
            await prisma.dealer.create({
                data: {
                    name: "Admin User",
                    company: "Caravan Match HQ",
                    email: "admin@caravanmatch.com.au",
                    password: "admin123", // Matches frontend default
                    location: "Melbourne",
                    subscriptionTier: "PRO",
                    subscriptionStatus: "ACTIVE",
                    phone: "1300 000 000",
                    website: "https://caravanmatch.com.au"
                }
            });
            return NextResponse.json({ status: "Created Admin" });
        }
        return NextResponse.json({ status: "Admin Exists", id: admin.id });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
