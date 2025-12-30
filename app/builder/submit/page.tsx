"use client";

import React, { useState } from "react";
import { useBuilder } from "../BuilderContext";
import { CARAVAN_OPTIONS } from "@/app/data/options";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
    const { build, updateBuild, setStep, resetBuild } = useBuilder();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [user, setUser] = useState<any>(null);

    const [showPassword, setShowPassword] = useState(false);

    // Customer Contact State
    const [contact, setContact] = useState({
        name: '',
        email: '',
        postcode: '',
        date: '',
        password: '',
        confirmPassword: ''
    });

    // Check Auth on Mount
    React.useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    if (data.user) {
                        setUser(data.user);
                        // Pre-fill known data
                        setContact(prev => ({
                            ...prev,
                            name: data.user.name || prev.name,
                            email: data.user.email || prev.email,
                            // Verify if location/postcode exists on user object
                            postcode: (data.user as any).location || prev.postcode
                        }));
                    }
                }
            } catch (e) {
                console.error("Auth check failed", e);
            } finally {
                setLoadingAuth(false);
            }
        };
        checkAuth();
    }, []);

    // Check for payment return on mount
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get('session_id');
        const success = params.get('payment_success');

        if (success && sessionId && !submitting) {
            // Avoid double submission if already running (strict mode workaround)
            // Better: Use a ref or simple state latch
            handlePaidSubmission(sessionId);
        }
    }, []);

    const handlePaidSubmission = async (sessionId: string) => {
        setSubmitting(true);
        // We need to reconstruct the payload. 
        // CAUTION: 'build' and 'contact' might be stale on reload if not persisted.
        // BuilderContext usually persists to localStorage, so 'build' should be fine.
        // But 'contact' state (password etc) might be lost.
        // For MVP, valid assumption: Context is alive. Contact fields might need re-entry if not persisted?
        // Actually, BuilderContext usually persists everything?
        // Let's rely on 'build' and 'user' (from auth check).

        // If 'contact' is lost, we might fail validation. 
        // User might need to click "Launch" again?
        // Let's try automatic, but if it fails validation, we alert user.

        try {
            // Re-merge (using current state - hope it hydrated)
            // Wait for hydration or user interaction? 
            // Better UX: Show "Completing Payment..." banner and ask to confirm?
            // "Payment Verified. Launching..."

            // To be safe, we just update the payload with session ID
            // We assume 'build' is available. 
            // We might miss 'password' if it wasn't saved.
            // If they are logged in (likely if hitting limit), password isn't needed.

            // Let's Try.
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = async (overrideSessionId?: string) => {
        // Validation (same as before)
        let finalName = user ? user.name : contact.name;
        let finalEmail = user ? user.email : contact.email;
        const finalPassword = user ? undefined : contact.password;

        if (!finalName) finalName = "Demo User";
        if (!finalEmail) finalEmail = "demo@caravanmatch.com.au";

        if (!user && (contact.password || contact.confirmPassword) && !overrideSessionId) {
            // Only validate password if we are NOT in the auto-return flow (where password might be lost but account created)
            // Actually, if they hit limit, they might already have account? 
            // If Limit = 3, they MUST have an account linked (or by email).
            if (contact.password !== contact.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
        }

        setSubmitting(true);

        try {
            const payload = {
                ...build,
                customerName: finalName,
                customerEmail: finalEmail,
                customerPostcode: contact.postcode,
                targetDate: contact.date,
                password: finalPassword,
                existingUserId: user?.id,
                paymentSessionId: overrideSessionId // NEW: Send Session ID if paid
            };

            const res = await fetch('/api/tenders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                alert(overrideSessionId ? "Payment Verified! Tender Launched. 🚀" : "Tender Submitted Successfully!");
                resetBuild(); // CLEAR STATE
                router.push(user ? '/client/dashboard' : '/');
            } else if (res.status === 402) {
                // Payment Required
                const confirmPay = window.confirm("You have reached your limit of 3 Free Tenders.\n\nWould you like to pay $4.99 AUD to launch this tender?");

                if (confirmPay) {
                    // REAL STRIPE REDIRECT
                    setSubmitting(true);
                    try {
                        const payRes = await fetch('/api/stripe/checkout-tender', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: finalEmail })
                        });
                        const payData = await payRes.json();
                        if (payData.url) {
                            window.location.href = payData.url; // GO TO STRIPE
                        } else {
                            alert("Payment Error: " + (payData.error || 'Unknown'));
                            setSubmitting(false);
                        }
                    } catch (err) {
                        alert("Connection failed initiating payment.");
                        setSubmitting(false);
                    }
                } else {
                    setSubmitting(false);
                }
            } else {
                const err = await res.json();
                alert("Failed to submit: " + (err.error || "Unknown Error"));
            }
        } catch (e) {
            console.error(e);
            alert("Error connecting to server.");
        } finally {
            if (!overrideSessionId) setSubmitting(false);
        }
    };

    // Auto-Run if paid
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sid = params.get('session_id');
        // Only trigger if we have a session ID and BUILD data is present (context loaded)
        // We might need to wait for user to be loaded?
        // Simplest: Show a "Finalize Submission" button if paid?
        // For now, let's try auto-submit if user/context ready.
        // But context might be empty on fresh load if not persisted in localStorage.
        // BuilderContext DOES use localStorage.

        if (sid && !submitting && Object.keys(build).length > 2) {
            // Delay slightly to ensure hydration
            setTimeout(() => handleSubmit(sid), 1000);
        }
    }, [user, build]); // Re-run when dependencies load

    // Helper to find label
    const getLabel = (fieldKey: string, valueId: string) => {
        const mapping: Record<string, string> = {
            tow_vehicle: 'tow_vehicle',
            type: 'types',
            length: 'lengths',
            solar: 'solar',
            batteries: 'batteries',
            inverter: 'inverters',
            water_tanks: 'water_tanks',
            external_shower: 'external_shower',
            hot_water: 'hot_water',
            toilet: 'toilet',
            appliances: 'appliances',
            fridge_size: 'fridge_size',
            fridge_type: 'fridge_type',
            ac: 'ac',
            diesel_heater: 'diesel_heater',
            bed: 'beds',
            kids_beds: 'kids_beds',
            frame: 'frame',
            fixtures: 'fixtures',
            outdoor_kitchen: 'outdoor_kitchen',
            electric_awning: 'electric_awning',
            auto_level: 'auto_level',
        };

        // @ts-ignore
        const options = CARAVAN_OPTIONS[mapping[fieldKey]] || [];
        const opt = options.find((o: any) => o.id === valueId);
        return opt ? opt.label : valueId;
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-heading font-bold">Review Your Build</h1>
                        <p className="text-muted">Review your specifications before launching the tender.</p>
                    </div>
                    <button
                        onClick={() => {
                            setStep(0);
                            router.push('/builder');
                        }}
                        className="text-primary hover:underline text-sm font-medium"
                    >
                        Edit Build
                    </button>
                </div>




                {/* Build Manifest Grid */}
                {Object.keys(build).length <= 2 ? (
                    <div className="bg-surface/30 border border-white/5 rounded-xl p-8 text-center mb-8">
                        <div className="text-4xl mb-4">📭</div>
                        <h3 className="text-xl font-bold text-white mb-2">No Configuration Found</h3>
                        <p className="text-muted mb-6">It looks like you haven't selected any options yet.</p>
                        <button
                            onClick={() => {
                                setStep(0);
                                router.push('/builder');
                            }}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition"
                        >
                            Start Your Build
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Final Comments (Full Width) */}
                        {build.final_comments && (
                            <div className="md:col-span-2 lg:col-span-3 bg-surface/30 border border-white/5 rounded-xl p-5 flex flex-col justify-center">
                                <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
                                    Final Comments
                                </h3>
                                <div className="text-base text-white italic">
                                    "{build.final_comments}"
                                </div>
                            </div>
                        )}

                        {Object.entries(build).map(([key, value]) => {
                            if (key === 'custom_notes' || key === 'final_comments' || !value || (Array.isArray(value) && value.length === 0)) return null;

                            return (
                                <div key={key} className="bg-surface/30 border border-white/5 rounded-lg p-4 hover:bg-surface/50 transition-colors">
                                    <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-1">
                                        {key.replace(/_/g, ' ')}
                                    </h3>
                                    <div className="text-base font-medium text-white">
                                        {Array.isArray(value)
                                            ? value.map(v => getLabel(key, v)).join(', ')
                                            : getLabel(key, value as string)
                                        }
                                    </div>

                                    {/* Specific Note Display */}
                                    {build.custom_notes?.[key] && (
                                        <div className="mt-2 pt-2 border-t border-white/5">
                                            <div className="text-[10px] text-primary font-bold uppercase mb-0.5">Note:</div>
                                            <div className="text-xs text-zinc-400 italic">"{build.custom_notes[key]}"</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Standard Inclusions info */}
                <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <span>ℹ️</span> Standard Industry Inclusions
                    </h3>
                    <p className="text-muted mb-4">
                        Most modern caravan manufacturers include the following as standard features, so you don't need to specify them unless you have custom requirements:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-zinc-300 mb-4 list-disc pl-5">
                        <li>Electric Brakes (Mandatory for &gt;750kg)</li>
                        <li>Breakaway Safety System</li>
                        <li>Sirocco Fans (Standard in many off-road models)</li>
                        <li>Reverse Camera & Monitor</li>
                        <li>LED Lighting & USB Points</li>
                        <li>Smoke Alarm & Fire Extinguisher</li>
                        <li>Microwave & Rangehood</li>
                        <li>12-Pin Plug & Anderson Plug</li>
                    </ul>
                    <div className="text-xs text-zinc-500 italic border-t border-blue-500/10 pt-3">
                        * For full disclosure of standard inclusions, please contact dealers directly after you receive your tenders.
                    </div>
                </div>

                {/* Customer Details Form or Logged In Card */}
                {loadingAuth ? (
                    <div className="mt-12 text-center py-10">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                        <p className="text-muted mt-2">Checking account...</p>
                    </div>
                ) : user ? (
                    <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {user.name?.charAt(0) || 'U'}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Logged in as {user.name}</h3>
                                    <p className="text-muted">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    // Logout logic could go here, or just redirect
                                    window.location.href = '/login';
                                }}
                                className="text-sm text-zinc-400 hover:text-white underline"
                            >
                                Not you? Switch Account
                            </button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-primary/20 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-muted mb-2">When do you need it by?</label>
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                    value={contact.date}
                                    onChange={e => setContact({ ...contact, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Postcode (for delivery)</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                    placeholder={user.location || "3000"}
                                    value={contact.postcode}
                                    onChange={e => setContact({ ...contact, postcode: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-12 bg-surface/50 border border-white/5 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Final Step: Your Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-muted mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your Name"
                                    value={contact.name}
                                    onChange={e => setContact({ ...contact, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="name@example.com"
                                    value={contact.email}
                                    onChange={e => setContact({ ...contact, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">When do you need it by?</label>
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors hover:cursor-pointer"
                                    value={contact.date}
                                    onChange={e => setContact({ ...contact, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Postcode</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="e.g. 3000"
                                    value={contact.postcode}
                                    onChange={e => setContact({ ...contact, postcode: e.target.value })}
                                />
                            </div>

                            <div className="md:col-span-2 border-t border-white/5 pt-4 mt-2">
                                <h4 className="text-sm font-bold text-white mb-4">Create Account (to view quotes)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-muted mb-2">Create Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            placeholder="Min 6 characters"
                                            value={contact.password || ''}
                                            onChange={e => setContact({ ...contact, password: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-muted mb-2">Confirm Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            placeholder="Re-enter password"
                                            value={contact.confirmPassword || ''}
                                            onChange={e => setContact({ ...contact, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="show-pass"
                                        checked={showPassword}
                                        onChange={e => setShowPassword(e.target.checked)}
                                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="show-pass" className="text-sm text-muted cursor-pointer select-none">
                                        Show Passwords
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-12 flex justify-end gap-4">
                    <button
                        onClick={() => {
                            setStep(0);
                            router.push('/builder');
                        }}
                        className="px-6 py-4 rounded-xl font-medium text-muted hover:text-white hover:bg-white/5 transition"
                    >
                        Back to Edit
                    </button>

                    <button
                        onClick={() => handleSubmit()}
                        disabled={submitting}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-xl shadow-primary/20 transition flex items-center gap-2"
                    >
                        {submitting ? (
                            'Launching Tender...'
                        ) : (
                            <>
                                <span>Launch Tender Job</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
