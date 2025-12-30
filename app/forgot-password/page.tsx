"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Email, 2: Code+Password
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    // Step 1: Request Code
    const handleRequestCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setStep(2); // Move to Step 2
            } else {
                alert(`Error: ${data.error || "Failed to send code."}`);
            }
        } catch (err) {
            console.error(err);
            alert("Connection error.");
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Reset Password
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // We use the same API endpoint structure, sending code as "token"
            const res = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: code, // Validation uses "token" field
                    password
                })
            });

            if (res.ok) {
                alert("Password Reset Successfully! Redirecting to login...");
                router.push('/login');
            } else {
                const data = await res.json();
                alert(`Error: ${data.error || "Failed to reset password."}`);
            }
        } catch (err) {
            console.error(err);
            alert("Connection error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 pt-24">
            <Link href="/" className="mb-8 text-2xl font-heading font-bold tracking-tight text-white hover:opacity-80 transition">
                CARAVAN<span className="text-primary">MATCH</span>
            </Link>

            <div className="w-full max-w-md bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    {step === 1 ? 'Reset Password' : 'Enter Verification'}
                </h1>

                {step === 1 ? (
                    // STEP 1: EMAIL FORM
                    <form onSubmit={handleRequestCode} className="space-y-4">
                        <p className="text-sm text-muted mb-4 text-center">
                            Enter your email address and we will send you a 6-digit verification code.
                        </p>
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                placeholder="name@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            disabled={loading}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition mt-4"
                        >
                            {loading ? 'Sending Code...' : 'Send Code'}
                        </button>
                    </form>
                ) : (
                    // STEP 2: CODE + PASSWORD FORM
                    <form onSubmit={handleResetPassword} className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-300">
                        <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-4 text-center">
                            <p className="text-sm text-white">
                                Code sent to <span className="font-bold">{email}</span>
                            </p>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Verification Code</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-center text-2xl tracking-widest font-mono focus:border-primary focus:outline-none uppercase"
                                placeholder="123456"
                                maxLength={6}
                                value={code}
                                onChange={e => setCode(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">New Password</label>
                            <input
                                required
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                placeholder="New Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            disabled={loading}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition mt-4"
                        >
                            {loading ? 'Verifying...' : 'Reset Password'}
                        </button>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-sm text-muted hover:text-white mt-2"
                        >
                            Use different email?
                        </button>
                    </form>
                )}

                <div className="mt-6 text-center text-sm text-muted">
                    <Link href="/login" className="hover:text-white transition">Cancel and go back</Link>
                </div>
            </div>
        </div>
    );
}
