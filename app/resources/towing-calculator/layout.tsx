import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Free Caravan Towing Weight Calculator Australia | GVM, GCM, ATM',
    description: 'Calculate your caravan towing weights accurately. Our free tool checks vehicle GVM, GCM, ATM, and Rear Axle Load (including leverage) to ensure you are legal and safe on Australian roads.',
    keywords: ['towing calculator', 'caravan weights calculator', 'calculate caravan gvm', 'tow ball weight calculator australia', 'caravan safety tool'],
}

export default function TowingCalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
