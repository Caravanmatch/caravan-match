"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TIERS = [
    {
        id: 'STARTER',
        name: 'Starter',
        price: '134.99',
        quotes: '5 Quotes / mo',
        features: ['Free Unlimited Marketplace Listings 🚐', 'Verified Badge 🛡️', 'Dedicated Account Mgr'],
        color: 'border-white/10'
    },
    {
        id: 'GROWTH',
        name: 'Growth',
        price: '149.99',
        quotes: '10 Quotes / mo',
        features: ['Free Unlimited Marketplace Listings 🚐', 'Verified Badge 🛡️', 'Dedicated Account Mgr'],
        popular: true,
        color: 'border-primary/50 ring-1 ring-primary/50'
    },
    {
        id: 'UNLIMITED',
        name: 'Unlimited',
        price: '209.98',
        quotes: 'Unlimited Quotes',
        features: [
            'Free Unlimited Marketplace Listings 🚐',
            'Includes ALL Features',
            'FEATURED on our Ads 🌟',
            'Dedicated Account Mgr'
        ],
        gradient: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/50'
    }
];

export default function DealerSubscriptionPage() {
    const router = useRouter();
    const [loading, setLoading] = useState<string | null>(null);
    const [includeMarketIntel, setIncludeMarketIntel] = useState(false);

    const handleSubscribe = async (tierId: string) => {
        setLoading(tierId);
        // Redirect to registration with Selected Plan and Add-on
        router.push(`/dealer/register?plan=${tierId}&addOn=${includeMarketIntel}`);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-32 pb-20 px-4">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                    Choose Your Growth Plan
                </h1>
                <p className="text-xl text-muted">
                    Scale your sales with flexible quote limits.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {TIERS.map((tier) => (
                    <div
                        key={tier.id}
                        className={`relative bg-surface rounded-2xl p-6 border flex flex-col ${tier.gradient || tier.color || 'border-white/10'} hover:scale-105 transition duration-300 shadow-xl`}
                    >
                        {/* 50% Off Badge */}
                        <div className="absolute -top-3 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-pulse">
                            50% OFF 6 Mths
                        </div>

                        {tier.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-muted uppercase tracking-wider">{tier.name}</h3>
                            <div className="flex flex-col mt-2">
                                {/* Discounted Price Display */}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm text-red-400 line-through decoration-white/50">${tier.price}</span>
                                    <span className="text-3xl font-bold text-white">${(parseFloat(tier.price) / 2).toFixed(2)}</span>
                                </div>
                                <span className="text-xs text-green-400 font-bold">First 6 Months Offer</span>
                            </div>
                            <div className="mt-4 py-2 px-3 bg-white/5 rounded-lg text-center font-bold text-white">
                                {tier.quotes}
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            {tier.features.map((feat, i) => (
                                <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span> {feat}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => handleSubscribe(tier.id)}
                            disabled={loading !== null}
                            className={`w-full py-3 rounded-xl font-bold transition ${tier.id === 'UNLIMITED' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-primary hover:bg-primary-hover text-white'}`}
                        >
                            {loading === tier.id ? 'Processing...' : `Select ${tier.name}`}
                        </button>
                    </div>
                ))}
            </div>

            {/* Market Intel Add-on */}
            <div className="mt-12 bg-surface border border-white/10 rounded-xl p-6 max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full text-2xl">🧠</div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Market Intelligence Add-on</h3>
                        <p className="text-sm text-muted">See your "Price Rank" against competitors on every tender.</p>
                        <p className="text-xs text-primary mt-1 font-bold">Only $29.99 / mo</p>
                    </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        className="w-6 h-6 rounded border-white/20 bg-white/5 checked:bg-primary transition"
                        checked={includeMarketIntel}
                        onChange={(e) => setIncludeMarketIntel(e.target.checked)}
                    />
                    <span className="text-white font-bold group-hover:text-primary transition">Add to Plan</span>
                </label>
            </div>

            <p className="mt-12 text-sm text-muted text-center leading-relaxed">
                <span className="text-xl font-bold text-white block mb-2">🔥 Limited Time Offer: 50% OFF First 6 Months!</span>
                Regular pricing resumes after 6 months. Cancel anytime.<br />
                <span className="text-primary font-bold">Offer valid for new subscribers only.</span>
            </p>
        </div>
    );
}
