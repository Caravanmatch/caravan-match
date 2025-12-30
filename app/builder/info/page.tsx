"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CARAVAN_OPTIONS } from "@/app/data/options";

// Type guard or helper to access the new fields
interface DetailedOption {
    id: string;
    label: string;
    description?: string;
    pros?: string[];
    cons?: string[];
}

export default function InfoPage() {

    // Helper to render the cards
    const renderOptionGroup = (title: string, options: any[]) => (
        <section className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                {title}
            </h2>
            <div className="grid gap-6">
                {options.map((opt: DetailedOption) => (
                    <div key={opt.id} className="bg-zinc-900/50 p-5 rounded-xl border border-white/5 hover:bg-zinc-900/80 transition">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">{opt.label}</h3>
                                {opt.description && (
                                    <p className="text-muted text-sm mt-1">{opt.description}</p>
                                )}
                            </div>
                        </div>

                        {(opt.pros || opt.cons) && (
                            <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
                                {opt.pros && (
                                    <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                        <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">✅ Pros</h4>
                                        <ul className="space-y-1">
                                            {opt.pros.map((p, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                                                    <span>•</span> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {opt.cons && (
                                    <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                        <h4 className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">❌ Cons</h4>
                                        <ul className="space-y-1">
                                            {opt.cons.map((c, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                                                    <span>•</span> {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-white p-6 md:p-12">
            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-8 flex flex-col md:flex-row items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-md py-4 z-10 border-b border-white/5">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">Complete Options Guide</h1>
                        <p className="text-muted text-sm">Detailed comparison of every component to help you decide.</p>
                    </div>
                    <Link href="/builder" className="text-primary hover:text-white font-bold text-lg transition flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10">
                        <span>← Back to Builder</span>
                    </Link>
                </div>

                <div className="space-y-12 pb-20">

                    <div className="grid md:grid-cols-1 gap-12">
                        {renderOptionGroup("🚙 Tow Vehicles", CARAVAN_OPTIONS.tow_vehicle)}
                        {renderOptionGroup("⛺ Caravan Types", CARAVAN_OPTIONS.types)}
                        {renderOptionGroup("🏗️ Construction (Frame)", CARAVAN_OPTIONS.frame)}
                        {renderOptionGroup("🚿 Hot Water Systems", CARAVAN_OPTIONS.hot_water)}
                        {renderOptionGroup("🚽 Toilets", CARAVAN_OPTIONS.toilet)}
                        {renderOptionGroup("⚡ Solar & Inverters", [...CARAVAN_OPTIONS.solar, ...CARAVAN_OPTIONS.inverters])}
                        {renderOptionGroup("🔋 Batteries", CARAVAN_OPTIONS.batteries)}
                        {renderOptionGroup("❄️ Fridges", CARAVAN_OPTIONS.fridge_type)}
                    </div>

                    <div className="mt-8 text-center p-8 bg-surface/30 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold mb-4">Ready to choose?</h2>
                        <Link href="/builder" className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-amber-600 text-white font-bold text-xl rounded-2xl hover:scale-105 shadow-2xl shadow-primary/30 transition transform">
                            Start Building Now ➜
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
