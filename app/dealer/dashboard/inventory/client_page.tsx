"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function DealerInventoryClient({ dealer, listings }: { dealer: any, listings: any[] }) {
    const router = useRouter();
    const [filter, setFilter] = useState<'ALL' | 'NEW' | 'USED' | 'DEMO'>('ALL');

    const filteredListings = listings.filter(l => {
        if (filter === 'ALL') return true;
        return l.condition?.toUpperCase() === filter; // safely handle optional condition
    });

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
                        Inventory Manager 🚐
                        <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-muted font-sans font-normal">
                            {listings.length} Listings
                        </span>
                    </h1>
                    <p className="text-muted mt-1">Manage your active stock across all categories.</p>
                </div>
                <div className="flex gap-3">
                    <Link
                        href="/advertise?mode=dealer"
                        className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition shadow-lg flex items-center gap-2"
                    >
                        <span>+</span> Add Stock
                    </Link>
                </div>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-surface border border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-white">{listings.filter(l => l.condition === 'New').length}</div>
                    <div className="text-xs text-muted uppercase tracking-wider">New Stock</div>
                </div>
                <div className="bg-surface border border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-white">{listings.filter(l => l.condition === 'Used').length}</div>
                    <div className="text-xs text-muted uppercase tracking-wider">Used Stock</div>
                </div>
                <div className="bg-surface border border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-white">
                        {listings.reduce((sum, item) => sum + (item.viewCount || 0), 0)}
                    </div>
                    <div className="text-xs text-muted uppercase tracking-wider">Total Views</div>
                </div>
                <div className="bg-surface border border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">Active</div>
                    <div className="text-xs text-muted uppercase tracking-wider">Membership Status</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {['ALL', 'NEW', 'USED', 'DEMO'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f as any)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition whitespace-nowrap ${filter === f
                            ? 'bg-white text-black'
                            : 'bg-white/5 text-muted hover:bg-white/10'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Listings Grid */}
            <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-black/20 text-xs uppercase tracking-wider text-muted border-b border-white/5">
                            <th className="p-4">Vehicle</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Condition</th>
                            <th className="p-4 text-center">Views</th>
                            <th className="p-4 text-center">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filteredListings.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="p-12 text-center text-muted italic">
                                    No listings found in this category.
                                </td>
                            </tr>
                        ) : (
                            filteredListings.map((listing) => (
                                <tr key={listing.id} className="group hover:bg-white/5 transition">
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-12 bg-black rounded overflow-hidden relative">
                                                {listing.images && (
                                                    <img
                                                        src={JSON.parse(listing.images)[0]}
                                                        alt={listing.make}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{listing.year} {listing.make}</div>
                                                <div className="text-xs text-muted">{listing.model} • {listing.length}ft</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-white">
                                        ${listing.price.toLocaleString()}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${listing.condition === 'New' ? 'bg-blue-500/20 text-blue-400' :
                                            listing.condition === 'Demo' ? 'bg-purple-500/20 text-purple-400' :
                                                'bg-zinc-500/20 text-zinc-400'
                                            }`}>
                                            {listing.condition || 'Used'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center text-white font-mono">
                                        {listing.viewCount || 0}
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold uppercase">
                                            LIVE
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition">
                                            <Link href={`/used-caravans/${listing.id}`} className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition">
                                                View
                                            </Link>
                                            <Link
                                                href={`/advertise?mode=dealer&edit=${listing.id}`}
                                                className="px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs rounded transition font-bold"
                                            >
                                                Edit
                                            </Link>
                                            <button className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs rounded transition">
                                                Del
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
