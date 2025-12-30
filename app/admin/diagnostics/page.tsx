"use client";

import { useState } from "react";

export default function DiagnosticsPage() {
    const [results, setResults] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const runScan = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/diagnostics');
            const data = await res.json();
            setResults(data);
        } catch (error) {
            alert("Failed to run scan");
        } finally {
            setLoading(false);
        }
    };

    const StatusBadge = ({ status }: { status: string }) => {
        if (status === 'OK') return <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">PASS</span>;
        if (status === 'ERROR') return <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-bold">FAIL</span>;
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-bold">PENDING</span>;
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold">System Diagnostics</h1>
                    <p className="text-muted">Scan the platform for connectivity and configuration issues.</p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={runScan}
                        disabled={loading}
                        className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {loading ? 'Running System Scan...' : 'Start Diagnosis 🕵️‍♂️'}
                    </button>
                    <a href="/admin/dashboard" className="px-6 py-3 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition flex items-center">
                        Back to Dashboard
                    </a>
                </div>

                {results && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-4">

                        {/* Database */}
                        <div className="bg-surface border border-white/10 p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Database Connection</h3>
                                <p className="text-sm text-muted">{results.database.message}</p>
                            </div>
                            <StatusBadge status={results.database.status} />
                        </div>

                        {/* Specific Table */}
                        <div className="bg-surface border border-white/10 p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Listings Table (UsedCaravan)</h3>
                                <p className="text-sm text-muted">{results.usedCaravanTable.message}</p>
                            </div>
                            <StatusBadge status={results.usedCaravanTable.status} />
                        </div>

                        {/* Stripe */}
                        <div className="bg-surface border border-white/10 p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Stripe Payments</h3>
                                <p className="text-sm text-muted">{results.stripe.message}</p>
                            </div>
                            <StatusBadge status={results.stripe.status} />
                        </div>

                        {/* Environment */}
                        <div className="bg-surface border border-white/10 p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Environment Variables</h3>
                                <p className="text-sm text-muted">{results.env.message}</p>
                            </div>
                            <StatusBadge status={results.env.status} />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
