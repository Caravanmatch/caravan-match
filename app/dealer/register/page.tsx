"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function RegisterForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const plan = searchParams.get('plan') || 'STARTER';
    const addOn = searchParams.get('addOn') === 'true';

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        abn: '',
        acn: '',
        password: '',
        confirmPassword: '',
        planTier: plan,
        marketIntel: addOn,
        // Honeypot field (should be left empty by humans)
        website_url_check: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            // 1. Create Account
            const res = await fetch('/api/dealer/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                // 2. Account Created Successfuly. Now Redirect to Payment.
                try {
                    const paymentRes = await fetch('/api/stripe/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            tier: formData.planTier,
                            marketIntel: formData.marketIntel
                        })
                    });

                    if (paymentRes.ok) {
                        const paymentData = await paymentRes.json();
                        if (paymentData.url) {
                            window.location.href = paymentData.url;
                            return;
                        }
                    }
                    // Fallback
                    console.error("Payment redirect failed");
                    alert("Account created. Proceeding to dashboard.");
                    router.push('/dealer/dashboard');

                } catch (payErr) {
                    console.error("Payment setup error", payErr);
                    router.push('/dealer/dashboard');
                }

            } else {
                alert(data.error || "Registration failed.");
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            alert("Connection error.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
            <Link href="/" className="mb-8 text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                CARAVAN<span className="text-primary">MATCH</span>
            </Link>

            <div className="w-full max-w-md bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Partner Registration</h1>
                    <p className="text-muted text-sm">Join Australia's fastest growing caravan network.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot - Hidden */}
                    <input
                        type="text"
                        name="website_url_check"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website_url_check}
                        onChange={e => setFormData({ ...formData, website_url_check: e.target.value })}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">ABN</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                placeholder="00 000 000 000"
                                value={formData.abn}
                                onChange={e => setFormData({ ...formData, abn: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">ACN (Optional)</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                placeholder="000 000 000"
                                value={formData.acn}
                                onChange={e => setFormData({ ...formData, acn: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Company Name</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            placeholder="Eagle Caravans Pty Ltd"
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Contact Name</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            placeholder="sales@eaglecaravans.com.au"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Mobile / Direct Phone</label>
                        <input
                            required
                            type="tel"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            placeholder="0400 000 000"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Create Password</label>
                        <div className="relative">
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pr-12 text-white focus:border-primary focus:outline-none"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition"
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

                    <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Confirm Password</label>
                        <div className="relative">
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pr-12 text-white focus:border-primary focus:outline-none"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition mt-6 disabled:opacity-50"
                    >
                        {loading ? 'Setting up account...' : 'Create Account & Setup Payment'}
                    </button>

                    <p className="text-xs text-center text-muted mt-4">
                        By registering, you agree to our Terms of Service. Accounts are subject to verification.
                    </p>
                </form>

                <div className="mt-6 text-center text-sm text-muted">
                    <p>Already a partner? <Link href="/login" className="text-primary hover:underline">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default function DealerRegisterPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterForm />
        </Suspense>
    );
}
