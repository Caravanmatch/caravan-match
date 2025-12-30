import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import DealerInventoryClient from './client_page';

export const dynamic = 'force-dynamic';

export default async function DealerInventoryPage() {
    const cookieStore = await cookies();
    const dealerId = cookieStore.get('dealer_session')?.value;

    if (!dealerId) {
        redirect('/dealer/login');
    }

    const dealer = await prisma.dealer.findUnique({
        where: { id: dealerId },
        include: {
            listings: {
                orderBy: { createdAt: 'desc' }
            }
        }
    });

    if (!dealer) redirect('/dealer/login');

    return <DealerInventoryClient dealer={dealer} listings={dealer.listings} />;
}
