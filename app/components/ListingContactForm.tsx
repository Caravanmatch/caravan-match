"use client";

import { useState } from "react";

export default function ListingContactForm({ vanTitle, sellerEmail, listingId }: { vanTitle: string, sellerEmail: string, listingId: string }) {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        website_check: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact-seller', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    listingId
                })
            });

            if (res.ok) {
                setSent(true);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    if (sent) {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">The seller has been notified via email. They will reply to you directly.</p>
            </div>
        );
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot Field */}
            <input
                type="text"
                name="website_check"
                value={(formData as any).website_check}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
            />
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary text-white"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary text-white"
                required
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (Optional)"
                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary text-white"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={`Hi, I'm interested in your ${vanTitle}. Is it still available?`}
                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary text-white"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
