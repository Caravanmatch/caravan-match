"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProfileButton({ className = "" }: { className?: string }) {
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Don't show on login page to avoid clutter
    const isLoginPage = pathname === "/login";

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Auth check failed", error);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [pathname]); // Re-check on nav change

    if (isLoginPage || loading) return null;

    if (user) {
        const dashboardLink = user.role === 'dealer' ? '/dealer/dashboard' : '/client/dashboard';

        const handleLogout = async () => {
            await fetch('/api/auth/logout', { method: 'POST' });
            // Force a full document reload to clear all client state/caches
            window.location.href = '/';
        };

        return (
            <div className={`flex items-center gap-2 ${className}`}>
                <Link
                    href={dashboardLink}
                    className={`flex items-center gap-3 px-4 py-2 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-surface hover:border-primary/50 transition-all shadow-lg group`}
                >
                    <div className="text-right hidden sm:block">
                        <div className="text-xs text-muted uppercase tracking-wider font-bold">My Dashboard</div>
                        <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                            {user.displayName}
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="text-lg">👤</span>
                    </div>
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-10 h-10 rounded-full bg-surface/50 border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-all"
                    title="Log Out"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <Link
                href="/login"
                className="text-sm font-bold text-muted hover:text-white transition-colors"
            >
                Login
            </Link>
            <Link
                href="/builder"
                className="px-5 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-primary-hover shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
            >
                Sign Up
            </Link>
        </div>
    );
}
