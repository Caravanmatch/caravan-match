"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeButton() {
    const pathname = usePathname();

    // Don't show on the actual home page
    if (pathname === "/") return null;

    return (
        <Link
            href="/"
            className="fixed bottom-28 right-6 z-50 p-4 rounded-full bg-primary text-white shadow-xl hover:bg-primary-hover hover:scale-110 transition-all duration-300 group flex items-center justify-center"
            title="Return to Home"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {/* Tooltip text for extra clarity on hover */}
            <span className="absolute right-full mr-3 px-2 py-1 bg-surface border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                Return Home
            </span>
        </Link>
    );
}
