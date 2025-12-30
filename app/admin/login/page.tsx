"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const [step, setStep] = useState<'pin' | 'otp'>('pin');
    const [pin, setPin] = useState('');
    const [otp, setOtp] = useState('');
    const [showPin, setShowPin] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const body = step === 'pin' ? { pin } : { otp };

            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (res.ok) {
                if (data.step === 'otp_required') {
                    setStep('otp');
                    setLoading(false);
                    // alert("Code sent to email!");
                } else if (data.success) {
                    router.push('/admin/dashboard');
                }
            } else {
                alert(data.error || "Login failed");
                if (step === 'pin') setPin('');
                if (step === 'otp') setOtp('');
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            alert("Connection error");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
            <div className="max-w-md w-full bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center">
                <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
                <p className="text-muted mb-8">
                    {step === 'pin' ? 'Enter 6-digit Security PIN' : 'Enter Email Verification Code'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot for Bots */}
                    <input
                        type="text"
                        name="username_trap"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {step === 'pin' ? (
                        <div className="relative">
                            <input
                                type={showPin ? "text" : "password"}
                                maxLength={6}
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-center text-2xl tracking-[1em] focus:outline-none focus:border-primary transition"
                                placeholder="••••••"
                                autoFocus
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition"
                                onClick={() => setShowPin(!showPin)}
                            >
                                {showPin ? (
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
                    ) : (
                        <input
                            type="text"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-primary transition"
                            placeholder="123456"
                            autoFocus
                        />
                    )}

                    <button
                        disabled={loading || (step === 'pin' ? pin.length < 4 : otp.length < 4)}
                        className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
                    >
                        {loading ? (step === 'pin' ? 'Verifying...' : 'Checking Code...') : (step === 'pin' ? 'Next' : 'Verify & Login')}
                    </button>

                    <div className="text-xs text-zinc-500">
                        {step === 'pin' ? 'Restricted Area. IP Logged.' : 'Check your email inbox.'}
                    </div>
                </form>
            </div>
        </div>
    );
}
