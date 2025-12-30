import { Suspense } from "react";
import AdvertiseClient from "./advertise-client";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Sell Your Caravan Online | $70 Flat Fee | Caravan Match",
    description: "List your caravan for sale on Australia's premium marketplace. One-time $70 fee until sold. Reach thousands of serious buyers instantly.",
    openGraph: {
        title: "Sell Your Caravan Online | $70 Flat Fee",
        description: "List your caravan for sale. One-time $70 fee until sold.",
    }
};

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function AdvertisePage({ searchParams }: { searchParams: { mode?: string } }) {
    const cookieStore = await cookies();
    const dealerId = cookieStore.get('dealer_session')?.value;
    let dealer = null;

    if (dealerId) {
        dealer = await prisma.dealer.findUnique({ where: { id: dealerId } });
    }

    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
            <AdvertiseClient dealer={dealer} />
        </Suspense>
    );
}
