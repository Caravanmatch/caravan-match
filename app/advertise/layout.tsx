import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sell My Caravan Australia | List for Free | Caravan Match',
    description: 'Looking to sell my caravan? List your caravan for free on Caravan Match and reach thousands of buyers across Australia. Quick, easy, and secure listing process.',
    keywords: ['sell my caravan', 'list caravan for sale', 'how to sell caravan australia', 'free caravan advertising', 'sell used caravan'],
}

export default function AdvertiseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
