import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Caravan Sales Australia | Used Caravans For Sale Marketplace',
    description: 'The best marketplace for caravan sales in Australia. Browse a wide range of off-road, luxury, and family used caravans for sale from private sellers and verified dealers.',
    keywords: ['caravan sales', 'used caravans for sale', 'buy second hand caravan australia', 'caravan marketplace', 'cheap caravans australia', 'off road caravans for sale'],
}

export default function UsedCaravansLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
