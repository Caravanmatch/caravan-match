"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert("Thank you for your feedback! We've received it.");
                router.push('/');
            } else {
                alert("Failed to submit feedback. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-md w-full relative z-10 animate-in fade-in zoom-in duration-500">
                <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white mb-6 transition">
                    ← Back Home
                </Link>

                <div className="bg-surface/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                    <h1 className="text-3xl font-heading font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        We Value Your Feedback
                    </h1>
                    <p className="text-muted mb-8 text-sm">
                        Tell us about your experience or suggest a new feature.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">First Name</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Your Comments</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                                placeholder="How can we improve?"
                                value={formData.comment}
                                onChange={e => setFormData({ ...formData, comment: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={submitting}
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transitionshadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                        >
                            {submitting ? 'Sending...' : 'Send Feedback'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
