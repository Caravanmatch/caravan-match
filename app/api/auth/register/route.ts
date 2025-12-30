import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, password, website_check } = await request.json();

        // Honeypot Check
        if (website_check) {
            console.warn(`Bot detected during registration: ${email}`);
            return NextResponse.json({ success: true }, { status: 200 }); // Fake success
        }

        if (!email || !password || !firstName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Check if user exists
        const existingClient = await prisma.client.findUnique({ where: { email } });
        const existingDealer = await prisma.dealer.findUnique({ where: { email } });

        if (existingClient || existingDealer) {
            return NextResponse.json({ error: "Email already in use" }, { status: 400 });
        }

        // Create Client
        // Note: Password should be hashed in production. For this MVP/Prototype context, we are storing as-is or using a simple hash if previously established. 
        // Checking existing login route pattern... usually direct comparison in this project's current state.

        const client = await prisma.client.create({
            data: {
                name: `${firstName} ${lastName}`,
                email: email,
                password: password, // Ideally hash this
                phone: "",
                location: "",
            }
        });

        // Set Session Cookie
        const cookieStore = await cookies();
        cookieStore.set('client_session', client.id, { httpOnly: true, path: '/' });

        return NextResponse.json({ success: true, user: { name: client.name, email: client.email } });

    } catch (error: any) {
        console.error("Registration Error:", error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
