"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import RankingBar from "@/app/components/ui/RankingBar";

export default function LeadsClient({ dealer, tenders }: { dealer: any, tenders: any[] }) {
    const router = useRouter();
    const [selectedLead, setSelectedLead] = useState<any | null>(null);

    return (
        <div className="p-8 max-w-6xl mx-auto text-white">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold gradient-text">Lead Inbox 📬</h1>
                    <p className="text-zinc-400">Real families looking for caravans right now.</p>
                </div>
                <div className="flex items-center gap-4">
                    {dealer.marketIntel && (
                        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/50 flex items-center gap-1">
                            🧠 Market Intel Active
                        </span>
                    )}
                    <div className="bg-surface border border-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm text-zinc-400">Your Plan: </span>
                        <span className="font-bold text-primary">{dealer.planTier}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* List Column */}
                <div className="lg:col-span-1 space-y-4 h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                    {tenders.length === 0 && (
                        <div className="text-center text-zinc-500 py-10">
                            No active leads found.
                        </div>
                    )}

                    {tenders.map(lead => (
                        <div
                            key={lead.id}
                            onClick={() => setSelectedLead(lead)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedLead?.id === lead.id
                                ? 'bg-primary/10 border-primary'
                                : 'bg-surface border-white/5 hover:border-white/20'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-zinc-300">
                                    {lead.type}
                                </span>
                                {lead.hasQuoted && (
                                    <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                        Quoted ✅
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold truncate">{lead.description?.substring(0, 30)}...</h3>
                            <div className="flex justify-between items-end mt-2">
                                <div className="text-sm text-zinc-400">
                                    <p>Est. ${lead.custom_notes ? JSON.parse(lead.custom_notes).budget : 'N/A'}</p>
                                </div>
                                <div className="text-xs text-zinc-500">
                                    {new Date(lead.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detail Column */}
                <div className="lg:col-span-2 bg-surface border border-white/10 rounded-2xl p-8 min-h-[500px]">
                    {selectedLead ? (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="flex justify-between items-start border-b border-white/10 pb-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Lead #{selectedLead.id.slice(-6)}</h2>
                                    <div className="flex gap-4 text-sm text-zinc-400">
                                        <span className="flex items-center gap-1">📍 {selectedLead.client?.location || 'Australia'}</span>
                                        <span className="flex items-center gap-1">📅 Needed by {selectedLead.targetDate || 'ASAP'}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-zinc-400">Budget</p>
                                    <p className="text-2xl font-bold text-green-400">
                                        ${selectedLead.custom_notes ? JSON.parse(selectedLead.custom_notes).budget : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            {/* MARKET INTEL RANKING BAR */}
                            {selectedLead.hasQuoted && (
                                <RankingBar
                                    myPrice={getMyPrice(selectedLead, dealer.id)}
                                    competitorPrices={getCompetitorPrices(selectedLead, dealer.id)}
                                    marketIntelEnabled={dealer.marketIntel}
                                />
                            )}

                            {/* If Not Quoted - Show placeholder teaser ??? No, user said only "tender sent back to customer" i.e. quoted */}

                            <div className="space-y-4">
                                <div className="bg-black/20 p-4 rounded-lg">
                                    <h4 className="text-sm font-bold text-zinc-500 mb-2 uppercase">Description</h4>
                                    <p className="text-lg leading-relaxed">{leadDescription(selectedLead)}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-black/20 p-4 rounded-lg">
                                        <h4 className="text-sm font-bold text-zinc-500 mb-2 uppercase">Requirements</h4>
                                        <ul className="space-y-1 text-sm">
                                            {selectedLead.length && <li>📏 Length: {selectedLead.length}ft</li>}
                                            {selectedLead.sleeps && <li>🛏️ Sleeps: {selectedLead.sleeps}</li>}
                                            {selectedLead.tow_vehicle && <li>🚙 Tow User: {selectedLead.tow_vehicle}</li>}
                                        </ul>
                                    </div>
                                    <div className="bg-black/20 p-4 rounded-lg">
                                        <h4 className="text-sm font-bold text-zinc-500 mb-2 uppercase">Features</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {parseFeatures(selectedLead).map((f: string) => (
                                                <span key={f} className="text-xs bg-white/10 px-2 py-1 rounded">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                                {selectedLead.hasQuoted ? (
                                    <button disabled className="px-6 py-3 bg-zinc-700 text-zinc-400 rounded-xl font-bold cursor-not-allowed">
                                        Quote Sent
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => alert("Quote functionality coming in next sprint!")}
                                        className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition"
                                    >
                                        Send Quote 🚀
                                    </button>
                                )}
                            </div>

                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
                            <span className="text-4xl">👈</span>
                            <p>Select a lead to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Helpers
function getMyPrice(lead: any, dealerId: string) {
    // In real app, quotes would have price. For now randomizing or assuming present.
    // The server query fetched quotes.
    const myQuote = lead.quotes.find((q: any) => q.dealerId === dealerId);
    return myQuote ? Number(myQuote.price) : 0;
}

function getCompetitorPrices(lead: any, dealerId: string) {
    return lead.quotes
        .filter((q: any) => q.dealerId !== dealerId)
        .map((q: any) => Number(q.price));
}

function leadDescription(lead: any) {
    return lead.final_comments || lead.description || "No specific details provided.";
}

function parseFeatures(lead: any) {
    const features = [];
    if (lead.solar) features.push('Solar');
    if (lead.toilet) features.push('Ensuite');
    if (lead.ac) features.push('Air Con');
    if (lead.diesel_heater) features.push('Diesel Heater');
    return features;
}
