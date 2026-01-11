"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DealerSidebar({ dealer }: { dealer: any }) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        { label: 'Overview', path: '/dealer/dashboard', icon: '📊' },
        { label: 'Inventory (Stock)', path: '/dealer/dashboard/inventory', icon: '🚐' },
        { label: 'Lead Inbox', path: '/dealer/dashboard/leads', icon: '📥' },
    ];

    return (
        <aside className="w-full md:w-64 bg-surface/50 border-r border-white/5 p-6 flex flex-col md:min-h-screen">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🕵️</span>
                    <h1 className="text-xl font-heading font-bold text-white">Dealer Portal</h1>
                </div>
                <p className="text-xs text-muted truncate">{dealer.company}</p>
            </div>

            <div className="space-y-1 flex-1">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${isActive(item.path)
                            ? 'bg-primary text-white font-bold'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}

                <button
                    onClick={async () => {
                        const res = await fetch('/api/stripe/portal', { method: 'POST' });
                        const data = await res.json();
                        if (data.url) window.location.href = data.url;
                        else alert("No billing account found. Subscriptions are managed after your first payment/trial setup.");
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition"
                >
                    <span>⚙️</span> Manage Subscription
                </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <Link href="/" className="flex items-center gap-2 text-sm text-muted hover:text-white transition px-4 py-2">
                    <span>←</span> Exit Portal
                </Link>
            </div>
        </aside>
    );
}
