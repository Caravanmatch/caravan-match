"use client";

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DealerLoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role: 'dealer' })
            });

            if (res.ok) {
                // If redirect param exists, go there. Else dashboard.
                if (redirectUrl) {
                    router.push(redirectUrl);
                } else {
                    router.push('/dealer/dashboard');
                }
                router.refresh();
            } else {
                const data = await res.json();
                alert("Login Failed: " + (data.error || "Invalid credentials"));
            }
        } catch (error) {
            console.error(error);
            alert("Login error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-zinc-900/50 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
            <h1 className="text-2xl font-bold text-white mb-2 text-center">Dealer Portal</h1>
            <p className="text-zinc-400 text-center mb-8 text-sm">Manage stock, view leads, and grow your sales.</p>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Business Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition"
                        placeholder="sales@dealership.com.au"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-3 text-zinc-500 hover:text-white transition"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <button
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition mt-2 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Access Dashboard"}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-500">
                <p>Not a partner yet? <Link href="/dealer/register" className="text-blue-400 hover:underline">Register Dealership</Link></p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <Link href="/login" className="text-xs text-zinc-600 hover:text-white transition">Looking for Customer Login?</Link>
            </div>
        </div>
    );
}

export default function DealerLoginPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <Link href="/" className="relative z-10 mb-8 text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                CARAVAN<span className="text-blue-500">MATCH</span>
            </Link>

            <div className="relative z-10 w-full flex justify-center">
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <DealerLoginForm />
                </Suspense>
            </div>
        </div>
    );
}
