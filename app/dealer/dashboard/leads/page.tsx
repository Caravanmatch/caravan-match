import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import LeadsClient from "./client_page";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
    const cookieStore = await cookies();
    const dealerId = cookieStore.get('dealer_session')?.value;

    if (!dealerId) redirect('/login');

    const dealer = await prisma.dealer.findUnique({
        where: { id: dealerId },
        include: { quotes: true }
    });

    if (!dealer) redirect('/login');

    // Fetch Tenders (Matching Algorithm - Mock: Fetch All Open for now)
    // In future: Match by location/type
    const tenders = await prisma.tender.findMany({
        where: {
            status: { in: ['OPEN', 'IN_PROGRESS'] }
        },
        orderBy: { createdAt: 'desc' },
        include: {
            client: {
                select: { name: true, location: true } // Privacy: Don't show full details until quoted?
            },
            quotes: {
                select: { dealerId: true }
            }
        }
    });

    // Mark which ones I've already quoted
    const processedTenders = tenders.map(t => ({
        ...t,
        hasQuoted: t.quotes.some(q => q.dealerId === dealerId)
    }));

    return <LeadsClient dealer={dealer} tenders={processedTenders} />;
}
