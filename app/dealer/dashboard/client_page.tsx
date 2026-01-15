"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import { useState } from 'react';

// Client Component Wrapper for logic
export default function DealerDashboardClient({ dealer, tenders, stats }: { dealer: any, tenders: any[], stats: any }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Quote Status Logic
    const hasValidSubscription = ['ACTIVE', 'TRIAL', 'DISCOUNT'].includes(dealer.subscriptionStatus || 'TRIAL');
    const isFreeTier = !hasValidSubscription;

    // Determine button text/action
    const getButtonAction = (tender: any) => {
        if (isFreeTier) return { label: 'Upgrade to Quote 🔒', action: () => alert("Upgrade to PRO to unlock quoting!") };
        return { label: 'Start Quote', action: () => setQuotingTender(tender) };
    };

    // Filter State
    const activeFilter = searchParams.get('filter') || 'OPEN'; // Default to OPEN (Unread/New)

    // Filter Logic
    const filteredTenders = tenders.filter(t => {
        if (activeFilter === 'ALL') return true;
        if (activeFilter === 'SAVED') return false; // Mock feature
        return t.status === activeFilter;
    });

    // Counts
    const counts = {
        OPEN: tenders.filter(t => t.status === 'OPEN').length,
        IN_PROGRESS: tenders.filter(t => t.status === 'IN_PROGRESS').length,
        COMPLETED: tenders.filter(t => t.status === 'COMPLETED').length,
        ALL: tenders.length
    };

    const StatusTab = ({ id, label, icon }: { id: string, label: string, icon: string }) => (
        <button
            onClick={() => router.push(`${pathname}?filter=${id}`)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${activeFilter === id
                ? 'bg-primary text-white font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
        >
            <div className="flex items-center gap-3">
                <span>{icon}</span>
                <span>{label}</span>
            </div>
            {counts[id as keyof typeof counts] > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === id ? 'bg-white/20 text-white' : 'bg-white/10 text-zinc-400'}`}>
                    {counts[id as keyof typeof counts]}
                </span>
            )}
        </button>
    );

    // Quote State
    const [quotingTender, setQuotingTender] = useState<any | null>(null);
    const [viewingTender, setViewingTender] = useState<any | null>(null);
    const [quoteForm, setQuoteForm] = useState({ price: '', description: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleQuoteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/quotes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    dealerId: dealer.id,
                    tenderId: quotingTender.id,
                    price: quoteForm.price,
                    description: quoteForm.description
                })
            });

            if (res.ok) {
                alert("Quote Sent! 🚀");
                setQuotingTender(null);
                setQuoteForm({ price: '', description: '' });
                router.refresh();
            } else {
                alert("Failed to send quote.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending quote.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col md:flex-row relative">

            {/* Quote Modal */}
            {quotingTender && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Quote for {quotingTender.customerName || 'Customer'}</h3>
                            <button onClick={() => setQuotingTender(null)} className="text-muted hover:text-white">✕</button>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4 flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-full">
                                🏢
                            </div>
                            <div>
                                <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">Posting As</div>
                                <div className="text-white font-bold">{dealer.company || dealer.name}</div>
                            </div>
                        </div>

                        <form onSubmit={handleQuoteSubmit} className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-4">
                                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Building</div>
                                <div className="text-sm font-medium text-white">{quotingTender.length} {quotingTender.type} ({quotingTender.frame})</div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Price Estimate</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="$0.00"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                    value={quoteForm.price}
                                    onChange={e => setQuoteForm({ ...quoteForm, price: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Message to Customer</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Hi! We'd love to build this. Here's what we can do..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                    value={quoteForm.description}
                                    onChange={e => setQuoteForm({ ...quoteForm, description: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={submitting}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition flex justify-center items-center gap-2"
                            >
                                {submitting ? 'Sending...' : 'Send Quote 🚀'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            {activeFilter === 'ALL' ? 'All Tenders' :
                                activeFilter === 'OPEN' ? 'New Opportunities' :
                                    activeFilter === 'IN_PROGRESS' ? 'Quoting in Progress' : 'Completed Jobs'}

                            {/* Trust Badge */}
                            {hasValidSubscription && (
                                <div className="group relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse"></div>
                                    <span className="relative bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-xl flex items-center gap-1 cursor-help">
                                        🛡️ Verified Partner
                                    </span>
                                    {/* Tooltip */}
                                    <div className="absolute top-full mt-2 hidden group-hover:block w-48 bg-black/90 p-2 rounded text-xs text-center border border-white/10 z-10">
                                        Your dealership is verified and highlighted to customers.
                                    </div>
                                </div>
                            )}
                        </h2>
                        <p className="text-muted mt-1">Manage your leads and quotes.</p>

                        {/* Horizontal Filter Tabs (Moved from duplicate Sidebar) */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {[
                                { id: 'OPEN', label: 'Unread / New', icon: '📥' },
                                { id: 'IN_PROGRESS', label: 'In Progress', icon: '⚡' },
                                { id: 'COMPLETED', label: 'Completed', icon: '✅' },
                                { id: 'ALL', label: 'All Tenders', icon: '📂' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => router.push(`${pathname}?filter=${tab.id}`)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeFilter === tab.id
                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.label}
                                    {counts[tab.id as keyof typeof counts] > 0 && (
                                        <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeFilter === tab.id ? 'bg-white/20' : 'bg-black/30'}`}>
                                            {counts[tab.id as keyof typeof counts]}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="flex gap-4">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl min-w-[100px] text-center">
                            <div className="text-2xl font-bold text-white">{stats.totalOpportunities}</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted font-bold">Total Leads</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl min-w-[100px] text-center">
                            <div className="text-2xl font-bold text-green-400">~{stats.weeklyFlow}</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted font-bold">/ Week</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl min-w-[100px] text-center">
                            <div className="text-2xl font-bold text-blue-400">{stats.winRate}%</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted font-bold">Win Rate</div>
                        </div>
                    </div>
                </header>

                <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {filteredTenders.length === 0 ? (
                        <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10 border-dashed">
                            <h3 className="text-lg font-bold text-white mb-2">No tenders in this list</h3>
                            <p className="text-muted">Check "All Tenders" or wait for new leads.</p>
                        </div>
                    ) : (
                        filteredTenders.map((tender) => (
                            <div key={tender.id} className="bg-surface/50 border border-white/5 hover:border-primary/50 transition-all rounded-xl p-6 group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider 
                                                ${tender.status === 'OPEN' ? 'bg-green-500/10 text-green-500' :
                                                    tender.status === 'IN_PROGRESS' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                                {tender.status.replace('_', ' ')}
                                            </span>

                                            {tender.status === 'OPEN' && tender.expiresAt && (
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border animate-pulse
                                                    ${new Date(tender.expiresAt).getTime() - Date.now() < 24 * 60 * 60 * 1000
                                                        ? 'bg-red-500/20 text-red-400 border-red-500/30'
                                                        : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}`}>
                                                    ⏳ {(() => {
                                                        const diff = new Date(tender.expiresAt).getTime() - Date.now();
                                                        if (diff <= 0) return 'Expired';
                                                        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                                                        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                        if (days > 0) return `${days}d ${hours}h left`;
                                                        return `${hours}h left`;
                                                    })()}
                                                </span>
                                            )}

                                            <span className="text-xs text-muted">
                                                {new Date(tender.createdAt).toLocaleDateString()}
                                            </span>
                                            {/* Privacy: Only show name, not email */}
                                            {tender.customerName && (
                                                <span className="text-xs text-zinc-400 font-medium">
                                                    Client: {tender.customerName}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {tender.length || 'Custom'} {tender.type} {tender.tow_vehicle ? `(Towing: ${tender.tow_vehicle})` : ''}
                                        </h3>
                                        <div className="text-sm text-muted mt-1">
                                            {tender.customerPostcode ? `Location: ${tender.customerPostcode}` : 'Location n/a'} • Target: {tender.targetDate || 'ASAP'}
                                        </div>

                                        {/* Market Intel (Rank Tracker) */}
                                        {tender.marketIntel && tender.marketIntel.myRank && (
                                            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10">
                                                <span className="text-xs font-bold text-muted uppercase tracking-wider">Quote Rank:</span>
                                                {dealer.marketIntel ? (
                                                    <span className={`text-sm font-bold ${tender.marketIntel.myRank === 1 ? 'text-green-400' : 'text-amber-400'}`}>
                                                        #{tender.marketIntel.myRank} <span className="text-zinc-500 text-xs font-normal">of {tender.marketIntel.totalCompetitors}</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                                                        🔒 Upgrade to unlock
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 w-full md:w-auto">
                                        {/* Status Actions */}
                                        {tender.status === 'OPEN' && (
                                            <button
                                                className={`px-4 py-2 text-sm font-bold rounded-lg transition ${isFreeTier ? 'bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                                                onClick={getButtonAction(tender).action}
                                            >
                                                {getButtonAction(tender).label}
                                            </button>
                                        )}
                                        <button
                                            onClick={() => setViewingTender(tender)}
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition border border-white/10"
                                        >
                                            View Specs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main >

            {/* View Specs Modal */}
            {
                viewingTender && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                        <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Full Build Specifications</h3>
                                    <p className="text-sm text-muted">tender-{viewingTender.id.slice(-6)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={async () => {
                                            if (confirm("WARNING: Are you sure you want to delete this tender? This will remove it for EVERYONE (including the customer).")) {
                                                try {
                                                    const res = await fetch(`/api/tenders/${viewingTender.id}`, { method: 'DELETE' });
                                                    if (res.ok) {
                                                        alert("Tender deleted.");
                                                        setViewingTender(null);
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
                                        className="p-2 hover:bg-red-500/10 hover:text-red-500 text-muted rounded-full transition"
                                        title="Delete Tender"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                    <button onClick={() => setViewingTender(null)} className="p-2 hover:bg-white/10 rounded-full transition">✕</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Key Stats */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10 md:col-span-2 flex justify-between items-center">
                                    <div>
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Target Date</div>
                                        <div className="text-white font-medium">{viewingTender.targetDate || 'Flexible'}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Location</div>
                                        <div className="text-white font-medium">{viewingTender.customerPostcode || 'Australia'}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Tow Vehicle</div>
                                        <div className="text-white font-medium">{viewingTender.tow_vehicle || 'Not Specified'}</div>
                                    </div>
                                </div>

                                {/* Dynamic Fields */}
                                {[
                                    { label: 'Type', value: viewingTender.type },
                                    { label: 'Length', value: viewingTender.length },
                                    { label: 'Frame', value: viewingTender.frame },
                                    { label: 'Solar', value: viewingTender.solar },
                                    { label: 'Batteries', value: viewingTender.batteries },
                                    { label: 'Inverter', value: viewingTender.inverter },
                                    { label: 'Water', value: viewingTender.water_tanks },
                                    { label: 'Hot Water', value: viewingTender.hot_water },
                                    { label: 'Toilet', value: viewingTender.toilet },
                                    { label: 'Beds', value: viewingTender.bed },
                                    { label: 'Kids Beds', value: viewingTender.kids_beds },
                                    { label: 'Fridge', value: viewingTender.fridge_size },
                                    { label: 'Fridge Type', value: viewingTender.fridge_type },
                                    { label: 'AC', value: viewingTender.ac },
                                    { label: 'Diesel Heater', value: viewingTender.diesel_heater },
                                    { label: 'Ext. Shower', value: viewingTender.external_shower },
                                    { label: 'Awning', value: viewingTender.electric_awning },
                                    { label: 'Auto Level', value: viewingTender.auto_level },
                                    { label: 'Fixtures', value: viewingTender.fixtures },
                                ].map((field) => field.value && (
                                    <div key={field.label} className="border-b border-white/5 pb-2">
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">{field.label}</div>
                                        <div className="text-white">{field.value}</div>
                                    </div>
                                ))}

                                {/* Appliances List */}
                                {viewingTender.appliances && (
                                    <div className="md:col-span-2">
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Requested Appliances</div>
                                        <div className="flex flex-wrap gap-2">
                                            {(() => {
                                                try {
                                                    const apps = typeof viewingTender.appliances === 'string'
                                                        ? JSON.parse(viewingTender.appliances)
                                                        : viewingTender.appliances;
                                                    return Array.isArray(apps) && apps.length > 0 ? apps.map((a: string) => (
                                                        <span key={a} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                                                            {a.replace(/_/g, ' ')}
                                                        </span>
                                                    )) : <span className="text-zinc-500 text-sm">None selected</span>
                                                } catch (e) {
                                                    return <span className="text-zinc-500 text-sm">None selected</span>
                                                }
                                            })()}
                                        </div>
                                    </div>
                                )}

                                {/* Outdoor Kitchen List */}
                                {viewingTender.outdoor_kitchen && (
                                    <div className="md:col-span-2">
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Outdoor Kitchen</div>
                                        <div className="flex flex-wrap gap-2">
                                            {(() => {
                                                try {
                                                    const items = typeof viewingTender.outdoor_kitchen === 'string'
                                                        ? JSON.parse(viewingTender.outdoor_kitchen)
                                                        : viewingTender.outdoor_kitchen;
                                                    return Array.isArray(items) && items.length > 0 ? items.map((a: string) => (
                                                        <span key={a} className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded border border-amber-500/20">
                                                            {a.replace(/_/g, ' ')}
                                                        </span>
                                                    )) : <span className="text-zinc-500 text-sm">None specific</span>
                                                } catch (e) {
                                                    return <span className="text-zinc-500 text-sm">None specific</span>
                                                }
                                            })()}
                                        </div>
                                    </div>
                                )}

                                {/* Final Thoughts */}
                                {viewingTender.final_comments && (
                                    <div className="md:col-span-2 bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl mt-2">
                                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Customer Notes</div>
                                        <div className="text-sm text-zinc-300 italic">"{viewingTender.final_comments}"</div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end gap-3">
                                <button onClick={() => setViewingTender(null)} className="px-4 py-2 hover:text-white text-muted transition">Close</button>
                                {viewingTender.status === 'OPEN' && (
                                    <button
                                        onClick={() => {
                                            setViewingTender(null);
                                            setQuotingTender(viewingTender);
                                        }}
                                        className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg"
                                    >
                                        Start Quote
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
