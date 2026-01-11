"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
    // 1. State Definitions
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // New Features State
    const [activeTab, setActiveTab] = useState('overview');
    const [dealers, setDealers] = useState<any[]>([]);

    // Edit Modal State
    const [editingAd, setEditingAd] = useState<any>(null);
    const [editForm, setEditForm] = useState({ description: '', images: '' });

    // 2. Initial Data Load (Stats & Overview)
    useEffect(() => {
        fetch('/api/admin/stats', { cache: 'no-store' })
            .then(async (res) => {
                if (res.status === 401) {
                    window.location.href = '/admin/login';
                    return;
                }
                const json = await res.json();
                if (json.error) throw new Error(json.error);
                setData(json);
            })
            .catch((err) => {
                console.error(err);
                setData({ error: err.message || "Unknown Error" });
            })
            .finally(() => setLoading(false));
    }, []);

    // 3. Lazy Load Dealers
    useEffect(() => {
        if (activeTab === 'dealers' && dealers.length === 0) {
            fetch('/api/admin/dealers')
                .then(res => res.json())
                .then(setDealers)
                .catch(console.error);
        }
    }, [activeTab]);

    // 4. Handlers
    const handleEditClick = (ad: any) => {
        setEditingAd(ad);
        setEditForm({ description: ad.description || '', images: ad.images || '' });
    };

    const handleSaveAd = async () => {
        if (!editingAd) return;
        try {
            const res = await fetch(`/api/admin/listings/${editingAd.id}`, {
                method: 'PUT',
                body: JSON.stringify(editForm),
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.ok) {
                alert("Saved!");
                setEditingAd(null);
                window.location.reload();
            } else {
                alert("Failed to save");
            }
        } catch (e) {
            console.error(e);
            alert("Error saving");
        }
    };

    // 5. Render Loading / Error States
    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading God View...</div>;

    if (data?.error) return (
        <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
            <h1 className="text-red-500 text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-zinc-400 mb-6">Error: {data.error}</p>
            <a href="/admin/login" className="px-4 py-2 bg-primary text-black font-bold rounded">Back to Login</a>
        </div>
    );

    if (!data || !data.stats) return <div className="min-h-screen bg-black text-white p-10">No Data Available.</div>;

    const { stats, recentTenders, recentDealers } = data;

    // 6. Main Render
    return (
        <div className="min-h-screen bg-black text-white font-sans pt-32 px-8 pb-8 relative">
            {/* Header */}
            <header className="flex justify-between items-center mb-6 border-b border-white/10 pb-6">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted">Welcome, Ben.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex bg-zinc-900 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'overview' ? 'bg-primary text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('dealers')}
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'dealers' ? 'bg-primary text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
                        >
                            Dealers DB
                        </button>
                    </div>
                    <Link href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition self-center">
                        Back to Site
                    </Link>
                </div>
            </header>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
                <>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                            <div className="text-sm text-muted uppercase tracking-wider mb-2">Total Tenders</div>
                            <div className="text-4xl font-bold text-primary">{stats.tenders}</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                            <div className="text-sm text-muted uppercase tracking-wider mb-2">Active Dealers</div>
                            <div className="text-4xl font-bold text-white">{stats.dealers}</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                            <div className="text-sm text-muted uppercase tracking-wider mb-2">Total Quotes</div>
                            <div className="text-4xl font-bold text-green-400">{stats.quotes}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Pending Ads Section */}
                            {data.pendingListings && data.pendingListings.length > 0 && (
                                <div className="bg-yellow-900/10 border border-yellow-500/20 p-6 rounded-xl animate-in fade-in">
                                    <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-500 mb-6">
                                        <span>⚠️</span> Pending Approvals ({data.pendingListings.length})
                                    </h2>
                                    <div className="space-y-4">
                                        {data.pendingListings.map((listing: any) => (
                                            <div key={listing.id} className="bg-black/50 border border-yellow-500/20 rounded-lg p-4 flex flex-col md:flex-row gap-4">
                                                <div className="flex-1 space-y-1">
                                                    <div className="font-bold text-lg text-white">
                                                        {listing.year} {listing.make} {listing.model}
                                                    </div>
                                                    <div className="text-yellow-200 font-mono">${listing.price.toLocaleString()}</div>
                                                    <p className="text-sm text-zinc-400 line-clamp-2">{listing.description}</p>
                                                    <div className="text-xs text-zinc-500 mt-2">
                                                        By: {listing.sellerName} ({listing.sellerEmail})
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={async () => {
                                                            if (!confirm('Approve this listing?')) return;
                                                            await fetch('/api/admin/listings/approve', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({ id: listing.id })
                                                            });
                                                            window.location.reload();
                                                        }}
                                                        className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition"
                                                    >
                                                        ✅ Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleEditClick(listing)}
                                                        className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition"
                                                    >
                                                        ✏️ Edit
                                                    </button>
                                                    <button
                                                        onClick={async () => {
                                                            if (!confirm('Permanently delete this ad?')) return;
                                                            const res = await fetch(`/api/admin/listings/${listing.id}`, { method: 'DELETE' });
                                                            if (res.ok) window.location.reload();
                                                            else alert("Delete failed");
                                                        }}
                                                        className="px-6 py-2 bg-red-900/40 hover:bg-red-900/60 text-red-400 font-bold rounded-lg transition"
                                                    >
                                                        🗑️ Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Recent Tenders List */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span>📋</span> Recent Tenders
                                </h2>
                                <div className="space-y-4">
                                    {recentTenders.map((t: any) => (
                                        <div key={t.id} className="bg-zinc-900 border border-white/5 rounded-lg p-5 hover:border-primary/50 transition">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="font-bold text-lg">
                                                        {t.length} {t.type} <span className="text-muted text-sm font-normal">({t.frame})</span>
                                                    </div>
                                                    <div className="text-sm text-muted">Client: {t.customerName} ({t.customerEmail})</div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${t.status === 'OPEN' ? 'bg-green-500/10 text-green-500' : 'bg-zinc-800 text-zinc-400'
                                                        }`}>
                                                        {t.status}
                                                    </div>
                                                    <button
                                                        onClick={async (e) => {
                                                            e.stopPropagation();
                                                            if (!confirm('Delete this tender and all its quotes?')) return;
                                                            const res = await fetch(`/api/admin/tenders/${t.id}`, { method: 'DELETE' });
                                                            if (res.ok) window.location.reload();
                                                            else alert("Delete failed");
                                                        }}
                                                        className="text-red-500 hover:text-red-400 px-2"
                                                        title="Delete Tender"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-sm mt-4 border-t border-white/5 pt-4">
                                                <div>
                                                    <span className="text-muted">Budget/Date:</span> <span className="text-white">{t.targetDate}</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted">Locale:</span> <span className="text-white">{t.customerPostcode}</span>
                                                </div>
                                            </div>
                                            {t.quotes.length > 0 && (
                                                <div className="mt-4 bg-black/30 p-3 rounded border border-white/5">
                                                    <div className="text-xs font-bold text-muted mb-2">QUOTES RECEIVED: {t.quotes.length}</div>
                                                    {t.quotes.map((q: any) => (
                                                        <div key={q.id} className="flex justify-between text-xs text-zinc-300 border-b border-white/5 last:border-0 py-1">
                                                            <span>{q.price}</span>
                                                            <span className="italic truncate max-w-[200px]">{q.description}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Dealers (Side Column) */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span>🏭</span> New Dealers
                            </h2>
                            <div className="space-y-4">
                                {recentDealers.map((d: any) => (
                                    <div key={d.id} className="bg-zinc-900 border border-white/5 rounded-lg p-4">
                                        <div className="font-bold text-white mb-1">{d.company}</div>
                                        <div className="text-xs text-muted mb-2">{d.name} • {d.email}</div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${d.subscriptionTier === 'PRO' ? 'border-primary text-primary' : 'border-zinc-700 text-zinc-500'
                                                }`}>
                                                {d.subscriptionTier}
                                            </span>
                                            <span className="text-[10px] text-zinc-500">
                                                Joined: {new Date(d.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* DEALERS TAB */}
            {activeTab === 'dealers' && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span>🏭</span> Dealer Database ({dealers.length})
                    </h2>
                    <div className="w-full overflow-x-auto bg-zinc-900 border border-white/5 rounded-xl">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-muted uppercase text-xs">
                                <tr>
                                    <th className="p-4">Company</th>
                                    <th className="p-4">Contact</th>
                                    <th className="p-4">Plan</th>
                                    <th className="p-4">Quotes</th>
                                    <th className="p-4">Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {dealers.map((d: any) => (
                                    <tr key={d.id} className="hover:bg-white/5 transition">
                                        <td className="p-4 font-bold">{d.company}</td>
                                        <td className="p-4">
                                            <div className="text-white">{d.name}</div>
                                            <div className="text-zinc-500 text-xs">{d.email}</div>
                                            <div className="text-zinc-500 text-xs">{d.phone}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-0.5 rounded text-xs px-2 font-bold ${d.tier === 'PRO' ? 'bg-primary/20 text-primary' : 'bg-zinc-800 text-zinc-400'}`}>
                                                {d.tier}
                                            </span>
                                        </td>
                                        <td className="p-4 font-mono">{d.quotesSent}</td>
                                        <td className="p-4 text-zinc-500 flex justify-between items-center">
                                            {new Date(d.joined).toLocaleDateString()}
                                            <button
                                                onClick={async () => {
                                                    if (!confirm(`Delete dealer ${d.company}? This will remove all their quotes.`)) return;
                                                    const res = await fetch(`/api/admin/dealers/${d.id}`, { method: 'DELETE' });
                                                    if (res.ok) {
                                                        // Optimistic update
                                                        setDealers(dealers.filter(x => x.id !== d.id));
                                                    } else {
                                                        alert("Delete failed");
                                                    }
                                                }}
                                                className="ml-4 text-red-500 hover:text-red-400 bg-red-500/10 px-2 py-1 rounded text-xs font-bold transition"
                                            >
                                                🗑️ Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editingAd && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-white/10 rounded-xl w-full max-w-2xl p-6 shadow-2xl">
                        <h2 className="text-xl font-bold mb-4">Edit Listing</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-muted mb-2">Description</label>
                                <textarea
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none min-h-[150px]"
                                    value={editForm.description}
                                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-muted mb-2">Photos (Clear to remove)</label>
                                <input
                                    type="text"
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                    value={editForm.images}
                                    onChange={(e) => setEditForm({ ...editForm, images: e.target.value })}
                                />
                                <p className="text-xs text-zinc-500 mt-1">
                                    Current MVP uses a single URL string. Clear this field to 'delete' the photo.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                onClick={() => setEditingAd(null)}
                                className="px-5 py-2 hover:bg-white/10 rounded-lg transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveAd}
                                className="px-5 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary-hover transition"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
