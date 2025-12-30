import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const cookieStore = await cookies();
    cookieStore.delete('dealer_session'); // Standard delete
    cookieStore.delete('client_session');

    // Force expire just in case
    cookieStore.set('dealer_session', '', { maxAge: 0, path: '/' });
    cookieStore.set('client_session', '', { maxAge: 0, path: '/' });

    return NextResponse.json({ success: true });
}
