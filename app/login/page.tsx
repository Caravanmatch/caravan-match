"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { Suspense } from 'react';

function LoginForm() {
    const [role, setRole] = useState<'dealer' | 'client'>('dealer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Call API
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, role })
        });

        if (res.ok) {
            if (redirectUrl) {
                router.push(redirectUrl);
            } else if (role === 'dealer') {
                router.push('/dealer/dashboard');
            } else {
                router.push('/client/dashboard');
            }
            router.refresh();
        } else {
            const data = await res.json();
            console.error("Login failed:", data);
            alert("Login Failed: " + (data.error || "Unknown Error"));
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 pt-24">
            <Link href="/" className="mb-8 text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                CARAVAN<span className="text-primary">MATCH</span>
            </Link>

            <div className="w-full max-w-md bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>

                {/* Role Toggle */}
                <div className="flex bg-white/5 p-1 rounded-lg mb-8">
                    <button
                        type="button"
                        onClick={() => {
                            setRole('client');
                            setEmail('client@example.com');
                            setPassword('password123');
                        }}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'client' ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-white'}`}
                    >
                        Customer
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setRole('dealer');
                            setEmail('admin@caravanmatch.com.au');
                            setPassword('admin123');
                        }}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'dealer' ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-white'}`}
                    >
                        Dealer Partner
                    </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-muted hover:text-white transition"
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
                        <div className="flex justify-end mt-1">
                            <Link href="/forgot-password" className="text-xs text-muted hover:text-white transition-colors">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition mt-4">
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-muted">
                    {role === 'dealer' ? (
                        <div className="space-y-2">
                            <p>Want to become a dealer partner? <Link href="/dealer/register" className="text-primary hover:underline">Register here</Link></p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <p>Don't have an account? <Link href="/register" className="text-primary hover:underline">Sign Up</Link></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
