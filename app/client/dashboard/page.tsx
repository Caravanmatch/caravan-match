import Link from "next/link";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import ClientDashboardClient from './client_page';

export const dynamic = 'force-dynamic';

export default async function ClientDashboard() {
    const cookieStore = await cookies();
    const clientId = cookieStore.get('client_session')?.value;

    if (!clientId) {
        redirect('/login');
    }

    // Fetch client info, tenders, and their private listings
    const [client, tenders, listings] = await Promise.all([
        prisma.client.findUnique({ where: { id: clientId } }),
        prisma.tender.findMany({
            where: { clientId: clientId },
            include: {
                quotes: {
                    include: { dealer: true } // Include Dealer name for the quote card
                }
            },
            orderBy: { createdAt: 'desc' }
        }),
        prisma.usedCaravan.findMany({
            where: { clientId: clientId },
            orderBy: { createdAt: 'desc' }
        })
    ]);

    if (!client) redirect('/login');

    return <ClientDashboardClient client={client} tenders={tenders} listings={listings} />;
}
