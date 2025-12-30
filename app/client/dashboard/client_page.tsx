"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
// import LogoutButton from '@/app/dealer/dashboard/LogoutButton'; // Can't easily import if not exported properly or different path

export default function ClientDashboardClient({ client, tenders, listings = [] }: { client: any, tenders: any[], listings?: any[] }) {

    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'builds' | 'ads'>('builds');

    const handleAcceptQuote = async (quoteId: string) => {
        if (!confirm("Are you sure you want to accept this quote? This will mark the tender as COMPLETED.")) return;

        try {
            const res = await fetch('/api/quotes/accept', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quoteId })
            });

            if (res.ok) {
                // Celebration!
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#d97706', '#ffffff', '#fbbf24'] // Gold/Amber theme
                });
                router.refresh();
            } else {
                alert("Failed to accept quote. Please try again.");
            }
        } catch (error) {
            console.error("Accept error:", error);
            alert("Something went wrong.");
        }
    };

    const handleDeleteListing = async (id: string) => {
        if (!confirm("Are you sure you want to PERMANENTLY delete this ad?")) return;
        try {
            const res = await fetch(`/api/listings/${id}`, { method: 'DELETE' });
            if (res.ok) {
                router.refresh();
            } else {
                alert("Failed to delete ad.");
            }
        } catch (e) {
            console.error(e);
            alert("Error deleting ad.");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 pt-24 md:pt-28 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-white">My Dashboard</h1>
                        <p className="text-muted">Welcome back, {client.name}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/login" className="px-4 py-2 text-sm text-muted hover:text-white transition">Logout</Link>
                    </div>
                </header>

                {/* Tabs */}
                <div className="flex gap-6 border-b border-white/10 mb-8">
                    <button
                        onClick={() => setActiveTab('builds')}
                        className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'builds' ? 'border-primary text-white' : 'border-transparent text-muted hover:text-white'}`}
                    >
                        My Builds ({tenders.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('ads')}
                        className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'ads' ? 'border-primary text-white' : 'border-transparent text-muted hover:text-white'}`}
                    >
                        My Ads ({listings.length})
                    </button>
                </div>

                {activeTab === 'builds' && (
                    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        <div className="flex justify-end mb-2">
                            <Link href="/builder" className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition text-sm">
                                + New Build
                            </Link>
                        </div>

                        {tenders.length === 0 ? (
                            <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">You haven't designed a caravan yet.</h3>
                                <p className="text-muted mb-6">Start using the builder to create your dream rig.</p>
                                <Link href="/builder" className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition">
                                    Go to Builder
                                </Link>
                            </div>
                        ) : (
                            tenders.map((tender) => (
                                <div key={tender.id} className="group bg-surface/50 border border-white/5 rounded-xl overflow-hidden transition-all hover:border-primary/30">
                                    {/* Header */}
                                    <div className="p-6 border-b border-white/5 flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider 
                                                    ${tender.status === 'OPEN' ? 'bg-green-500/10 text-green-500' : 'bg-white/10 text-muted'}
                                                    ${tender.status === 'COMPLETED' ? 'bg-blue-500/10 text-blue-500' : ''}
                                                    `}>
                                                    {tender.status}
                                                </span>
                                                <span className="text-xs text-muted">Created {new Date(tender.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {tender.length} {tender.type}
                                            </h3>
                                        </div>
                                        <div className="font-mono text-xs text-zinc-500 flex items-center gap-4">
                                            <span>{tender.id.slice(-6).toUpperCase()}</span>
                                            <button
                                                onClick={async (e) => {
                                                    e.preventDefault();
                                                    if (confirm("Are you sure you want to DELETE this tender? This cannot be undone.")) {
                                                        try {
                                                            const res = await fetch(`/api/tenders/${tender.id}`, { method: 'DELETE' });
                                                            if (res.ok) {
                                                                alert("Tender deleted.");
                                                                router.refresh();
                                                            } else {
                                                                alert("Failed to delete.");
                                                            }
                                                        } catch (err) {
                                                            console.error(err);
                                                            alert("Error deleting.");
                                                        }
                                                    }
                                                }}
                                                className="text-muted hover:text-red-500 transition-colors p-1"
                                                title="Delete Tender"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Specs Summary */}
                                    {/* Specs Summary */}
                                    <div className="p-6 bg-black/20 space-y-4">
                                        <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-400">
                                            <div>
                                                <strong className="text-white block mb-1">Configuration</strong>
                                                <div className="space-y-1">
                                                    <div>Frame: <span className="text-white">{tender.frame}</span></div>
                                                    <div>Tow Vehicle: <span className="text-white">{tender.tow_vehicle || 'Not set'}</span></div>
                                                    <div>Sleeps: <span className="text-white">{tender.type?.includes("Family") ? "Family (2+)" : "Couples (2)"}</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <strong className="text-white block mb-1">Power & Climate</strong>
                                                <div className="space-y-1">
                                                    <div>Solar: <span className="text-white">{tender.solar}</span></div>
                                                    <div>Batteries: <span className="text-white">{tender.batteries}</span></div>
                                                    <div>AC: <span className="text-white">{tender.ac || 'N/A'}</span></div>
                                                    <div>Heating: <span className="text-white">{tender.diesel_heater || 'N/A'}</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <strong className="text-white block mb-1">Water & Amenities</strong>
                                                <div className="space-y-1">
                                                    <div>Water: <span className="text-white">{tender.water_tanks}</span></div>
                                                    <div>Hot Water: <span className="text-white">{tender.hot_water}</span></div>
                                                    <div>Toilet: <span className="text-white">{tender.toilet || 'Standard'}</span></div>
                                                    <div>Fridge: <span className="text-white">{tender.fridge_size} ({tender.fridge_type})</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Appliances & Extras */}
                                        <div className="pt-4 border-t border-white/5">
                                            <strong className="text-white block mb-2 text-xs uppercase tracking-wider">Appliances & Inclusions</strong>
                                            <div className="flex flex-wrap gap-2">
                                                {(() => {
                                                    try {
                                                        const apps = typeof tender.appliances === 'string' ? JSON.parse(tender.appliances) : tender.appliances;
                                                        return Array.isArray(apps) && apps.length > 0
                                                            ? apps.map((a: string) => <span key={a} className="px-2 py-1 bg-white/10 rounded text-xs text-white">{a}</span>)
                                                            : <span className="text-zinc-500 text-xs text-italic">None selected</span>;
                                                    } catch (e) { return null; }
                                                })()}

                                                {/* Other Extras */}
                                                {tender.washing_machine && <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">Washing Machine</span>}
                                                {tender.outdoor_kitchen && (() => {
                                                    try {
                                                        const kitchen = typeof tender.outdoor_kitchen === 'string' ? JSON.parse(tender.outdoor_kitchen) : tender.outdoor_kitchen;
                                                        return Array.isArray(kitchen) && kitchen.length > 0 ? <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">Outdoor Kitchen</span> : null;
                                                    } catch (e) { return null; }
                                                })()}
                                            </div>
                                        </div>

                                        {/* Notes */}
                                        {tender.final_comments && (
                                            <div className="pt-4 border-t border-white/5">
                                                <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Notes</strong>
                                                <p className="text-sm text-zinc-300 italic">"{tender.final_comments}"</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quotes Section */}
                                    <div className="p-6 bg-primary/5 border-t border-white/5">
                                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                                            Dealer Quotes ({tender.quotes?.length || 0})
                                        </h4>

                                        {(!tender.quotes || tender.quotes.length === 0) ? (
                                            <p className="text-sm text-muted italic">Waiting for dealers to review your spec...</p>
                                        ) : (
                                            <div className="space-y-4">
                                                {tender.quotes.map((quote: any) => (
                                                    <div key={quote.id} className={`bg-surface border ${quote.status === 'ACCEPTED' ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-white/10'} rounded-lg p-5 flex flex-col gap-4 relative overflow-hidden`}>

                                                        {quote.status === 'ACCEPTED' && (
                                                            <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                                                                ACCEPTED
                                                            </div>
                                                        )}

                                                        {/* Quote Header */}
                                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/5 pb-4">
                                                            <div>
                                                                <div className="font-bold text-white text-lg">{quote.dealer?.company || 'Dealer'}</div>
                                                                <div className="text-xs text-muted flex items-center gap-3">
                                                                    <span>{quote.dealer?.location || 'Location Pending'}</span>
                                                                    {quote.dealer?.website && (
                                                                        <a href={`https://${quote.dealer.website}`} target="_blank" className="text-primary hover:underline">
                                                                            Visit Website
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="font-bold text-green-400 text-2xl">{quote.price}</div>
                                                                <div className="text-xs text-muted">Quoted {new Date(quote.createdAt).toLocaleDateString()}</div>
                                                            </div>
                                                        </div>

                                                        {/* Message */}
                                                        <div className="bg-black/20 p-4 rounded-lg text-sm text-zinc-300 italic">
                                                            "{quote.description}"
                                                        </div>

                                                        {/* Contact Action */}
                                                        <div className="flex justify-between items-center pt-2">

                                                            {/* Accept Button (Only if Tender is OPEN/IN_PROGRESS or this is the accepted one) */}
                                                            <div>
                                                                {(tender.status === 'OPEN' || tender.status === 'IN_PROGRESS' || quote.status === 'ACCEPTED') && (
                                                                    <button
                                                                        onClick={() => handleAcceptQuote(quote.id)}
                                                                        disabled={quote.status === 'ACCEPTED'}
                                                                        className={`px-5 py-2 font-bold rounded-lg transition shadow-lg flex items-center gap-2
                                                                            ${quote.status === 'ACCEPTED'
                                                                                ? 'bg-green-500/20 text-green-400 cursor-default'
                                                                                : 'bg-green-600 hover:bg-green-500 text-white hover:scale-105'}
                                                                        `}
                                                                    >
                                                                        {quote.status === 'ACCEPTED' ? (
                                                                            <><span>✓</span> Accepted</>
                                                                        ) : (
                                                                            <><span>✅</span> Accept Quote</>
                                                                        )}
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {quote.dealer?.phone ? (
                                                                <div className="flex gap-3">
                                                                    <a href={`tel:${quote.dealer.phone}`} className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-lg transition flex items-center gap-2">
                                                                        <span>📞</span> {quote.dealer.phone}
                                                                    </a>
                                                                    <a href={`mailto:${quote.dealer.email}`} className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition flex items-center gap-2">
                                                                        <span>✉️</span> Email Dealer
                                                                    </a>
                                                                </div>
                                                            ) : (
                                                                <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg opacity-50 cursor-not-allowed">
                                                                    Contact Info Pending
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === 'ads' && (
                    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        <div className="flex justify-end mb-2">
                            <Link href="/advertise" className="px-4 py-2 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition text-sm">
                                + Sell a Van
                            </Link>
                        </div>

                        {listings.length === 0 ? (
                            <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">You haven't listed any caravans.</h3>
                                <p className="text-muted mb-6">Create a listing to reach thousands of buyers.</p>
                                <Link href="/advertise" className="px-6 py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition">
                                    Sell Your Van
                                </Link>
                            </div>
                        ) : (
                            listings.map((ad) => (
                                <div key={ad.id} className="group bg-surface/50 border border-white/5 rounded-xl overflow-hidden transition-all hover:border-violet-500/30 flex flex-col md:flex-row">
                                    {/* Image Thumb */}
                                    <div className="md:w-64 h-48 md:h-auto bg-black relative">
                                        <img src={ad.images} alt={ad.make} className="w-full h-full object-cover" />
                                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                                            {ad.status}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-2xl font-bold text-white mb-1">
                                                    {ad.year} {ad.make} {ad.model}
                                                </h3>
                                                <div className="text-xl font-bold text-green-400">
                                                    ${ad.price.toLocaleString()}
                                                </div>
                                            </div>
                                            <p className="text-muted text-sm mb-4">{ad.category} • {ad.length}ft • Sleeps {ad.sleeps}</p>
                                            <p className="text-zinc-400 text-sm line-clamp-2">{ad.description}</p>
                                        </div>

                                        <div className="mt-6 flex justify-end gap-3 border-t border-white/5 pt-4">
                                            <Link
                                                href={`/advertise?edit=${ad.id}`}
                                                className="px-4 py-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 text-sm font-bold rounded-lg transition"
                                            >
                                                Edit Ad
                                            </Link>

                                            <button
                                                onClick={() => handleDeleteListing(ad.id)}
                                                className="px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 text-sm font-bold rounded-lg transition"
                                            >
                                                Delete Ad
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
