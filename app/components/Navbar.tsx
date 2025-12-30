"use client";

import Link from "next/link";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
    return (
        <nav className="w-full py-4 md:py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 z-50 glass-panel fixed top-0 border-b-0 border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                    CARAVAN<span className="text-primary">MATCH</span>
                </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium text-muted items-center">
                <Link href="/builder" className="hover:text-white transition">Builder</Link>
                <Link href="/used-caravans" className="hover:text-white transition">Marketplace</Link>
                <Link href="/resources/towing-calculator" className="hover:text-white transition">Weights</Link>
                <Link href="/advertise" className="text-primary hover:text-primary-hover font-bold transition">Sell Your Van</Link>
                <Link href="/dealer/subscription" className="hover:text-foreground transition">Dealer Plans</Link>
                <ProfileButton />
            </div>
        </nav>
    );
}
