import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import DealerSidebar from './components/DealerSidebar';

export default async function DealerDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = await cookies();
    const dealerId = cookieStore.get('dealer_session')?.value;

    if (!dealerId) {
        redirect('/login');
    }

    const dealer = await prisma.dealer.findUnique({
        where: { id: dealerId }
    });

    if (!dealer) {
        redirect('/login');
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col md:flex-row pt-24 md:pt-28">
            <DealerSidebar dealer={dealer} />
            <div className="flex-1 overflow-y-auto h-[calc(100vh-7rem)]">
                {children}
            </div>
        </div>
    );
}
