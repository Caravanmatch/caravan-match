import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import DealerDashboardClient from './client_page';

export default async function DealerDashboardPage() {
    // 1. Check Auth
    const cookieStore = await cookies();
    const dealerId = cookieStore.get('dealer_session')?.value;

    console.log("DASHBOARD HIT. Cookie:", dealerId);

    if (!dealerId) {
        console.log("No dealer cookie, redirecting to /login");
        redirect('/login');
    }

    // 2. Fetch Data
    const [dealer, tenders] = await Promise.all([
        prisma.dealer.findUnique({
            where: { id: dealerId },
            include: { quotes: true }
        }),
        prisma.tender.findMany({
            orderBy: { createdAt: 'desc' },
            include: { quotes: { select: { price: true, dealerId: true } } } // Fetch competitor prices (anonymous)
        })
    ]);

    if (!dealer) redirect('/login');

    // 3. Calculate Stats
    const totalTenders = tenders.length;
    const quotesSent = dealer.quotes.length;
    const quotesAccepted = dealer.quotes.filter(q => q.status === 'ACCEPTED').length;
    const winRate = quotesSent > 0 ? Math.round((quotesAccepted / quotesSent) * 100) : 0;

    // Weekly Average
    const daysSinceJoin = Math.max(1, Math.floor((new Date().getTime() - new Date(dealer.createdAt).getTime()) / (1000 * 60 * 60 * 24)));
    const weeksActive = Math.max(1, daysSinceJoin / 7);
    const weeklyAvg = Math.round(totalTenders / weeksActive);

    const stats = {
        totalOpportunities: totalTenders,
        weeklyFlow: weeklyAvg,
        winRate: winRate,
        quotesSent: quotesSent
    };

    // 4. Calculate Ranks (Market Intel)
    const processedTenders = tenders.map(t => {
        // Sort quotes by price asc
        const sortedQuotes = t.quotes
            .map(q => ({ ...q, priceVal: parseFloat(q.price) }))
            .sort((a, b) => a.priceVal - b.priceVal);

        // Find my rank
        const myQuoteIndex = sortedQuotes.findIndex(q => q.dealerId === dealer.id);
        const myRank = myQuoteIndex !== -1 ? myQuoteIndex + 1 : null;
        const totalCompetitors = t.quotes.length;

        return {
            ...t,
            marketIntel: {
                myRank,
                totalCompetitors,
                lowestPrice: sortedQuotes[0]?.priceVal || 0
            }
        };
    });

    // 6. Render Client Component
    return <DealerDashboardClient dealer={dealer} tenders={processedTenders} stats={stats} />;
}
