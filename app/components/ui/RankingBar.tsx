"use client";

import { useMemo } from "react";

interface RankingBarProps {
    myPrice: number;
    competitorPrices: number[];
    marketIntelEnabled: boolean;
}

export default function RankingBar({ myPrice, competitorPrices, marketIntelEnabled }: RankingBarProps) {

    // LOCKED STATE
    if (!marketIntelEnabled) {
        return (
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4 group">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex items-center justify-center flex-col gap-2">
                    <span className="text-2xl">🔒</span>
                    <p className="font-bold text-white">Unlock Price Ranking</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = '/dealer/subscription';
                        }}
                        className="text-xs bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded-lg transition"
                    >
                        Get Market Intel ($29/mo)
                    </button>
                </div>
                {/* Blurred fake content behind */}
                <div className="opacity-30 blur-sm">
                    <h4 className="text-xs font-bold text-zinc-500 mb-2 uppercase">Price Rank</h4>
                    <div className="h-4 bg-gradient-to-r from-emerald-500 to-red-500 rounded-full w-full"></div>
                    <div className="flex justify-between text-xs mt-1 text-zinc-500">
                        <span>Low</span>
                        <span>High</span>
                    </div>
                </div>
            </div>
        );
    }

    // ACTIVE STATE
    const stats = useMemo(() => {
        const allPrices = [...competitorPrices, myPrice].sort((a, b) => a - b);
        const min = allPrices[0];
        const max = allPrices[allPrices.length - 1];
        const avg = allPrices.reduce((a, b) => a + b, 0) / allPrices.length;

        // Prevent divide by zero if only 1 quote
        const range = max - min || 1;

        // Calculate My Position % (0 = Lowest, 100 = Highest)
        let myPos = ((myPrice - min) / range) * 100;

        // Clamp (just in case)
        myPos = Math.max(0, Math.min(100, myPos));

        return { min, max, avg, myPos, count: allPrices.length };
    }, [myPrice, competitorPrices]);

    return (
        <div className="bg-black/20 p-4 rounded-xl border border-white/5">
            <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Price Rank 🏆</h4>
                <span className="text-xs text-zinc-500">{stats.count} Quotes</span>
            </div>

            <div className="relative h-6 w-full mb-1">
                {/* Background Track Gradient */}
                <div className="absolute top-2 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500 rounded-full opacity-30"></div>

                {/* Min/Max Markers */}
                <div className="absolute top-2 left-0 w-1 h-2 bg-emerald-500 rounded-sm" title={`Min: $${stats.min}`}></div>
                <div className="absolute top-2 right-0 w-1 h-2 bg-red-500 rounded-sm" title={`Max: $${stats.max}`}></div>

                {/* Average Marker (Small tick) */}
                <div
                    className="absolute top-1 bottom-1 w-[2px] bg-white/30 z-0"
                    style={{ left: `${((stats.avg - stats.min) / (stats.max - stats.min || 1)) * 100}%` }}
                    title={`Avg: $${Math.round(stats.avg)}`}
                ></div>

                {/* MY AVATAR / POSITION */}
                <div
                    className="absolute top-0 z-10 transform -translate-x-1/2 flex flex-col items-center group cursor-help transition-all duration-500"
                    style={{ left: `${stats.myPos}%` }}
                >
                    <div className="w-5 h-5 rounded-full bg-white border-2 border-primary shadow-[0_0_10px_rgba(255,255,255,0.5)] flex items-center justify-center text-[10px] font-bold text-primary">
                        You
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                <span>${stats.min.toLocaleString()}</span>
                <span className="text-zinc-600">Avg: ${Math.round(stats.avg).toLocaleString()}</span>
                <span>${stats.max.toLocaleString()}</span>
            </div>

            <p className="text-[10px] text-center mt-2 text-zinc-400">
                {stats.myPos < 33 ? "You are competitively priced! 🔥" :
                    stats.myPos > 66 ? "You are on the premium end. 💎" :
                        "You are priced near market average. ⚖️"}
            </p>
        </div>
    );
}
