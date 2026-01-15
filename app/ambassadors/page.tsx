"use client";

import { useState } from "react";
import Link from "next/link";

export default function AmbassadorPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tiktok: "",
        youtube: "",
        instagram: "",
        otherChannels: "",
        followers: "",
        pitch: "",
        agreedToTerms: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.agreedToTerms) {
            alert("You must agree to the terms and conditions to apply.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/ambassadors/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Failed to submit application. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-24">
                <div className="max-w-2xl w-full bg-surface border border-white/10 rounded-2xl p-8 text-center space-y-6">
                    <div className="text-6xl">🎉</div>
                    <h1 className="text-3xl font-bold text-white">Application Received!</h1>
                    <p className="text-muted text-lg">
                        Thanks for applying to be a Founding Ambassador. We'll review your application and get back to you within 48 hours.
                    </p>
                    <Link href="/" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-xl border-2 border-white hover:bg-primary-hover transition">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary mb-4">
                        ⭐ Limited to 20 Founding Members
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold">
                        Become a <span className="text-primary">Founding Ambassador</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Help us disrupt the caravan industry and earn a share of our monthly revenue. Forever.
                    </p>
                </div>

                {/* TL;DR Box */}
                <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-6 mb-12">
                    <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                        <span>⚡</span> TL;DR
                    </h3>
                    <p className="text-white text-base leading-relaxed">
                        You promote us (1-2 posts/month) → We share 10% of revenue → Payouts start when we're profitable. <strong>No guarantees</strong>, but huge upside if we succeed.
                    </p>
                </div>

                {/* The Offer */}
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/30 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">💰 The Offer</h2>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">✓</span>
                            <span><strong className="text-white">10% Revenue Pool:</strong> Split between 20 Founding Ambassadors</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">✓</span>
                            <span><strong className="text-white">Passive Income:</strong> Monthly payouts once paid subscriptions begin</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">✓</span>
                            <span><strong className="text-white">Lifetime Partnership:</strong> As long as you remain active, you earn</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-black/30 rounded-lg border border-white/10">
                        <p className="text-sm text-muted">
                            <strong className="text-white">Example:</strong> If CaravanMatch generates $50,000/month in revenue, the pool is $5,000. Split 20 ways = <strong className="text-primary">$250/month each</strong>. At $100k/month? That's <strong className="text-primary">$500/month each</strong>.
                        </p>
                    </div>
                </div>

                {/* What We're Looking For */}
                <div className="bg-surface border border-white/10 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">🎯 Who We're Looking For</h2>
                    <ul className="space-y-2 text-muted">
                        <li>• Active TikTok, YouTube, or Instagram creators in the caravan/4x4/camping niche</li>
                        <li>• Genuine passion for the Australian caravan community</li>
                        <li>• Willing to authentically promote CaravanMatch to your audience</li>
                        <li>• Committed to creating at least 1-2 pieces of content per month</li>
                    </ul>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="bg-surface border border-white/10 rounded-2xl p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Application Form</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Total Followers (Approx)</label>
                            <input
                                type="text"
                                name="followers"
                                value={formData.followers}
                                onChange={handleChange}
                                placeholder="e.g. 5,000"
                                className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Social Media Channels</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">TikTok Handle</label>
                                <input
                                    type="text"
                                    name="tiktok"
                                    value={formData.tiktok}
                                    onChange={handleChange}
                                    placeholder="@yourhandle"
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">YouTube Channel</label>
                                <input
                                    type="text"
                                    name="youtube"
                                    value={formData.youtube}
                                    onChange={handleChange}
                                    placeholder="Channel URL or @handle"
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Instagram Handle</label>
                                <input
                                    type="text"
                                    name="instagram"
                                    value={formData.instagram}
                                    onChange={handleChange}
                                    placeholder="@yourhandle"
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Other Channels</label>
                                <input
                                    type="text"
                                    name="otherChannels"
                                    value={formData.otherChannels}
                                    onChange={handleChange}
                                    placeholder="Facebook, Blog, etc."
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Why should we select you? *</label>
                        <textarea
                            name="pitch"
                            value={formData.pitch}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Tell us about your audience, your content style, and why you'd be a great ambassador for CaravanMatch..."
                            className="w-full bg-background border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary transition resize-none"
                        />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="bg-black/30 border border-white/10 rounded-lg p-6 space-y-4">
                        <h3 className="text-lg font-bold text-white">Terms & Conditions</h3>
                        <div className="text-sm text-muted space-y-2 max-h-64 overflow-y-auto">
                            <p><strong className="text-white">1. Revenue Share Structure:</strong> Founding Ambassadors will collectively receive 10% of CaravanMatch's monthly net revenue, split equally among active participants.</p>

                            <p><strong className="text-white">2. Payment Commencement:</strong> Payouts will ONLY begin once CaravanMatch transitions from free trials to paid subscriptions and generates positive net revenue. There is NO guarantee of when this will occur.</p>

                            <p><strong className="text-white">3. Net Revenue Definition:</strong> "Net Revenue" means gross revenue minus operating costs, refunds, chargebacks, and payment processing fees. CaravanMatch reserves the right to define and calculate net revenue at its sole discretion.</p>

                            <p><strong className="text-white">4. Activity Requirements:</strong> To remain eligible, Ambassadors must create and publish at least ONE (1) piece of promotional content per month featuring CaravanMatch. Failure to meet this requirement for two consecutive months will result in removal from the program.</p>

                            <p><strong className="text-white">5. Content Approval:</strong> All promotional content must be authentic and align with CaravanMatch's brand values. CaravanMatch reserves the right to request content changes or removal.</p>

                            <p><strong className="text-white">6. No Guaranteed Income:</strong> This is NOT employment. There is NO guaranteed minimum payment. If the platform generates $0 in net revenue, Ambassadors receive $0.</p>

                            <p><strong className="text-white">7. Termination:</strong> CaravanMatch may terminate any Ambassador's participation at any time for breach of terms, inactivity, or conduct detrimental to the brand. Upon termination, all future revenue share rights are forfeited.</p>

                            <p><strong className="text-white">8. Tax Responsibility:</strong> Ambassadors are solely responsible for reporting and paying all applicable taxes on revenue share payments.</p>

                            <p><strong className="text-white">9. Intellectual Property:</strong> Ambassadors grant CaravanMatch a perpetual, royalty-free license to use any content created for promotional purposes.</p>

                            <p><strong className="text-white">10. Modification Rights:</strong> CaravanMatch reserves the right to modify these terms with 30 days' notice. Continued participation constitutes acceptance of modified terms.</p>
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleChange}
                                className="mt-1 w-5 h-5 accent-primary"
                            />
                            <span className="text-sm text-white">
                                I have read and agree to the Terms & Conditions above. I understand that payouts only begin once the platform generates net revenue, and there is no guaranteed income. *
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !formData.agreedToTerms}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl border-2 border-white hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg"
                    >
                        {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
}
