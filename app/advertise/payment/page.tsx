"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AdvertisePaymentForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const listingId = searchParams.get('listingId');
    const [submitting, setSubmitting] = useState(false);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!listingId) {
            alert("Error: No listing found. Please create a listing first.");
            return;
        }

        setSubmitting(true);

        try {
            const res = await fetch('/api/stripe/checkout-ad', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ listingId })
            });

            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Payment Error:", data);
                alert("Payment Failed: " + (data.error || data.details || "Unknown error"));
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Order Summary */}
            <div className="space-y-6">
                <h1 className="text-3xl font-heading font-bold">Review & Pay</h1>

                <div className="bg-surface border border-white/10 rounded-2xl p-6 space-y-4">
                    <h2 className="font-bold text-lg">Order Summary</h2>

                    <div className="flex justify-between items-center text-muted">
                        <span>Standard Ad (First 14 Days)</span>
                        <span className="text-white">FREE</span>
                    </div>
                    <div className="flex justify-between items-center text-muted text-sm">
                        <span>*Includes 20 Photos</span>
                        <span>Included</span>
                    </div>

                    <div className="h-px bg-white/10 my-2" />

                    <div className="flex justify-between items-center font-bold text-xl">
                        <span>Total Due Today</span>
                        <span className="text-green-400">$0.00</span>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-sm text-primary-200">
                    <p className="font-bold mb-1">Subscription Terms</p>
                    <p>After the initial 14 days, your ad will renew automatically at <span className="text-white font-bold">$15.00/month</span> until the van is sold. You can cancel at any time.</p>
                </div>
            </div>

            {/* Right: Payment Form */}
            <div className="bg-surface border border-white/10 rounded-2xl p-8 h-fit">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>💳</span> Secure Checkout
                </h2>

                <form onSubmit={handlePayment} className="space-y-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                        <p className="text-white font-medium mb-2">You will be redirected to Stripe to complete your payment.</p>
                        <div className="flex justify-center gap-2 text-2xl filter grayscale opacity-70">
                            <span>💳</span><span>💳</span><span>💳</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                    >
                        {submitting ? 'Redirecting...' : (
                            <>
                                <span>Proceed to Secure Checkout</span>
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center text-muted">
                        Secured by Stripe.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default function AdvertisePaymentPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-6 flex justify-center">
            <Suspense fallback={<div className="text-center text-white p-20">Loading Payment Details...</div>}>
                <AdvertisePaymentForm />
            </Suspense>
        </div>
    );
}
