import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Used Caravans For Sale Australia | Marketplace | Private & Dealer',
    description: 'Find the best deals on used caravans for sale across Australia. Browse a wide range of off-road, luxury, and family vans from private sellers and verified dealers.',
    keywords: ['used caravans for sale', 'buy second hand caravan australia', 'caravan marketplace', 'cheap caravans australia', 'off road caravans for sale'],
}

export default function UsedCaravansLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
