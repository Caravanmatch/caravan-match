"use client";

import React from "react";
import { CARAVAN_OPTIONS } from "@/app/data/options";

interface DetailedOption {
    id: string;
    label: string;
    description?: string;
    pros?: string[];
    cons?: string[];
}

export function InfoGuideContent() {
    const renderOptionGroup = (title: string, options: any[]) => (
        <section className="bg-surface/30 p-6 rounded-2xl border border-white/5 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-3">
                {title}
            </h2>
            <div className="grid gap-4">
                {options.map((opt: DetailedOption) => (
                    <div key={opt.id} className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-base font-bold text-white">{opt.label}</h3>
                                {opt.description && (
                                    <p className="text-muted text-sm mt-1">{opt.description}</p>
                                )}
                            </div>
                        </div>

                        {(opt.pros || opt.cons) && (
                            <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
                                {opt.pros && (
                                    <div className="bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                        <h4 className="text-green-400 text-[10px] font-bold uppercase tracking-wider mb-2">✅ Pros</h4>
                                        <ul className="space-y-1">
                                            {opt.pros.map((p, i) => (
                                                <li key={i} className="text-[11px] text-zinc-300 flex items-start gap-2">
                                                    <span>•</span> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {opt.cons && (
                                    <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                        <h4 className="text-red-400 text-[10px] font-bold uppercase tracking-wider mb-2">❌ Cons</h4>
                                        <ul className="space-y-1">
                                            {opt.cons.map((c, i) => (
                                                <li key={i} className="text-[11px] text-zinc-300 flex items-start gap-2">
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
        <div>
            {renderOptionGroup("⛺ Caravan Types", CARAVAN_OPTIONS.types)}
            {renderOptionGroup("🏗️ Construction (Frame)", CARAVAN_OPTIONS.frame)}
            {renderOptionGroup("🚿 Hot Water Systems", CARAVAN_OPTIONS.hot_water)}
            {renderOptionGroup("🚽 Toilets", CARAVAN_OPTIONS.toilet)}
            {renderOptionGroup("⚡ Solar & Inverters", [...CARAVAN_OPTIONS.solar, ...CARAVAN_OPTIONS.inverters])}
            {renderOptionGroup("🔋 Batteries", CARAVAN_OPTIONS.batteries)}
            {renderOptionGroup("❄️ Fridges", CARAVAN_OPTIONS.fridge_type)}
            {renderOptionGroup("📏 Fridge Sizes", CARAVAN_OPTIONS.fridge_size)}
            {renderOptionGroup("❄️ Air Conditioning", CARAVAN_OPTIONS.ac)}
            {renderOptionGroup("🚙 Tow Vehicles", CARAVAN_OPTIONS.tow_vehicle)}

            {/* Specialized DRS Info - Added Per Request */}
            <section className="bg-surface/30 p-6 rounded-2xl border border-white/5 shadow-lg mb-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-3">
                    🌪️ Dust Reduction Systems (DRS)
                </h2>
                <div className="space-y-4 text-sm text-zinc-300">
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                        <h3 className="font-bold text-white mb-2">Key Types & How They Work:</h3>
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-primary">Positive Pressure Systems (DRS):</strong> The most common type. Fans pull outside air through a large filter (often on the roof) and pump it into the caravan, keeping the internal pressure higher than the outside, so dust can't get in.
                            </li>
                            <li>
                                <strong className="text-primary">Active vs. Passive:</strong> Some (like Dometic) are passive and work automatically as you move, while others (like Carafan) use powerful fans with adjustable speeds and remote controls for maximum effect.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
