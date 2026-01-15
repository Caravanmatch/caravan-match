"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always close mobile menu on scroll
            if (isMobileMenuOpen) {
                return; // Don't auto-hide navbar if menu is open
            }

            // Show if at top or scrolling up
            if (currentScrollY < 10 || currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Hide if scrolling down and past threshold
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobileMenuOpen]);

    return (
        <>
            <nav
                className={`w-full py-4 md:py-6 px-4 md:px-8 flex justify-between items-center z-50 glass-panel fixed top-0 border-b-0 border-white/5 backdrop-blur-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                        CARAVAN<span className="text-primary">MATCH</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm font-medium text-muted items-center">
                    <Link href="/builder" className="hover:text-white transition">Builder</Link>
                    <Link href="/used-caravans" className="hover:text-white transition">Marketplace</Link>
                    <Link href="/guides" className="hover:text-white transition">Guides</Link>
                    <Link href="/resources/towing-calculator" className="hover:text-white transition">Weights</Link>
                    <Link href="/advertise" className="text-primary hover:text-primary-hover font-bold transition">Sell Your Van</Link>
                    <Link href="/dealer/subscription" className="hover:text-foreground transition whitespace-nowrap">Dealer Plans</Link>
                    <ProfileButton />
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="md:hidden text-2xl text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    <Link href="/builder" className="text-2xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>Builder</Link>
                    <Link href="/used-caravans" className="text-2xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link>
                    <Link href="/guides" className="text-2xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>Guides</Link>
                    <Link href="/resources/towing-calculator" className="text-2xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>Weights</Link>
                    <Link href="/advertise" className="text-2xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Sell Your Van</Link>
                    <Link href="/dealer/subscription" className="text-xl font-medium text-muted" onClick={() => setIsMobileMenuOpen(false)}>Dealer Plans</Link>

                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <ProfileButton />
                    </div>
                </div>
            )}
        </>
    );
}
