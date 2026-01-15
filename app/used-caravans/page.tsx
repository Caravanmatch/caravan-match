"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CARAVAN_MAKES, CARAVAN_CATEGORIES, STATES } from "@/lib/constants";
import ProfileButton from "../components/ProfileButton";

const BADGE_KEYWORDS: Record<string, { label: string, icon: string, color: string }> = {
    'solar': { label: 'Solar Ready', icon: '☀️', color: 'bg-amber-500/20 text-amber-500 border-amber-500/50' },
    'lithium': { label: 'Lithium Power', icon: '🔋', color: 'bg-green-500/20 text-green-500 border-green-500/50' },
    'off-grid': { label: 'Off-Grid', icon: '🌲', color: 'bg-emerald-600/20 text-emerald-500 border-emerald-600/50' },
    'offroad': { label: 'Off-Road', icon: '🚜', color: 'bg-orange-700/20 text-orange-500 border-orange-700/50' },
    'bunk': { label: 'Bunks', icon: '🛌', color: 'bg-blue-500/20 text-blue-500 border-blue-500/50' },
    'ensuite': { label: 'Ensuite', icon: '🚿', color: 'bg-cyan-500/20 text-cyan-500 border-cyan-500/50' },
};

function getTrendBadges(description: string) {
    const badges = [];
    const lowerDesc = (description || '').toLowerCase();

    for (const [key, config] of Object.entries(BADGE_KEYWORDS)) {
        if (lowerDesc.includes(key)) {
            badges.push(config);
        }
    }
    return badges;
}

export default function UsedCaravansPage() {
    const [listings, setListings] = useState<any[]>([]);
    const [filteredListings, setFilteredListings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter State
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMake, setSelectedMake] = useState('Any Make');
    const [selectedCategory, setSelectedCategory] = useState('Any Category');
    const [selectedCondition, setSelectedCondition] = useState('Any Condition');
    const [selectedSleeps, setSelectedSleeps] = useState('Any Sleeps');
    const [maxPrice, setMaxPrice] = useState(250000);

    // New Filters
    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');
    const [minLength, setMinLength] = useState(''); // ft
    const [maxLength, setMaxLength] = useState(''); // ft
    const [selectedState, setSelectedState] = useState('Any Location');
    const [sortBy, setSortBy] = useState('Newest Listed');
    const [isFilterOpen, setIsFilterOpen] = useState(false);


    useEffect(() => {
        fetch('/api/listings')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setListings(data);
                    setFilteredListings(data);
                } else {
                    console.error("API returned non-array:", data);
                    setListings([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch listings", err);
                setLoading(false);
            });
    }, []);

    // Dynamic Filter Options
    const [availableMakes, setAvailableMakes] = useState<string[]>([]);

    useEffect(() => {
        if (listings.length > 0) {
            // Extract unique makes from actual listings
            const makes = Array.from(new Set(listings.map(l => l.make))).sort();
            setAvailableMakes(makes);
        }
    }, [listings]);

    // Effect to run filtering whenever state changes
    useEffect(() => {
        let result = listings;

        // 1. Filter by Make
        if (selectedMake !== 'Any Make') {
            result = result.filter(v => v.make === selectedMake);
        }

        // 2. Filter by Category
        if (selectedCategory !== 'Any Category') {
            result = result.filter(v => v.category === selectedCategory);
        }

        // 3. Filter by Condition
        if (selectedCondition !== 'Any Condition') {
            result = result.filter(v => v.condition === selectedCondition);
        }

        // 4. Filter by Sleeps
        if (selectedSleeps !== 'Any Sleeps') {
            if (selectedSleeps === '6+') {
                result = result.filter(v => parseInt(v.sleeps) >= 6);
            } else {
                result = result.filter(v => v.sleeps === selectedSleeps);
            }
        }

        // 5. Filter by Price
        result = result.filter(v => v.price <= maxPrice);

        // 6. Filter by Year
        if (minYear) result = result.filter(v => v.year >= parseInt(minYear));
        if (maxYear) result = result.filter(v => v.year <= parseInt(maxYear));

        // 7. Filter by Length (Parsing float)
        if (minLength) result = result.filter(v => v.length >= parseFloat(minLength));
        if (maxLength) result = result.filter(v => v.length <= parseFloat(maxLength));

        // 8. Filter by State (Location contains string like "Melbourne, VIC")
        if (selectedState !== 'Any Location') {
            result = result.filter(v => v.location.includes(selectedState));
        }

        // 9. Filter by Search Term (Keywords)
        if (searchTerm.trim()) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(v =>
                v.make.toLowerCase().includes(lowerTerm) ||
                v.model.toLowerCase().includes(lowerTerm) ||
                (v.description || '').toLowerCase().includes(lowerTerm)
            );
        }

        setFilteredListings(result);
    }, [searchTerm, selectedMake, selectedCategory, selectedCondition, selectedSleeps, maxPrice, minYear, maxYear, minLength, maxLength, selectedState, sortBy, listings]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedMake('Any Make');
        setSelectedCategory('Any Category');
        setSelectedCondition('Any Condition');
        setSelectedSleeps('Any Sleeps');
        setMaxPrice(250000);
        setMinYear('');
        setMaxYear('');
        setMinLength('');
        setMaxLength('');
        setSelectedState('Any Location');
    };

    const hasActiveFilters = searchTerm || selectedMake !== 'Any Make' || selectedCategory !== 'Any Category' || selectedCondition !== 'Any Condition' || selectedSleeps !== 'Any Sleeps' || maxPrice < 250000 || minYear || maxYear || minLength || maxLength || selectedState !== 'Any Location';

    return (
        <div className="min-h-screen bg-background text-foreground pb-20 pt-24 md:pt-28">

            {/* Header / Search Bar */}
            <div className="bg-surface border-b border-white/10 pt-6 pb-10 px-6">

                <div className="max-w-7xl mx-auto space-y-6">
                    <h1 className="text-4xl font-heading font-bold">
                        Find Your Perfect <span className="text-primary">Caravan</span>
                    </h1>

                    {/* Search Controls */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-6 shadow-xl">

                        {/* Top Row: Keywords & Mobile Trigger */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Keyword Search */}
                            <div className="flex-1 flex gap-3">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-3.5 text-muted">🔍</span>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Keywords (e.g. Bunks, Layout)"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:border-primary outline-none transition text-white"
                                    />
                                </div>
                                {/* Mobile Filter Trigger */}
                                <button
                                    onClick={() => setIsFilterOpen(true)}
                                    className="md:hidden px-4 py-3 bg-primary text-white font-bold rounded-xl whitespace-nowrap active:scale-95 transition"
                                >
                                    Filters ⚙️
                                </button>
                            </div>

                            {/* Price Slider (Desktop Only) */}
                            <div className="hidden md:flex w-full md:w-64 bg-black/20 rounded-xl px-4 py-2 border border-white/10 flex-col justify-center">
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-muted">Max Price</span>
                                    <span className="text-primary">${maxPrice.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10000"
                                    max="250000"
                                    step="5000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                    className="w-full accent-primary h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Middle Row: Primary Filters (Hidden on Mobile) */}
                        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Condition */}
                            <select
                                value={selectedCondition}
                                onChange={(e) => setSelectedCondition(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none text-white appearance-none cursor-pointer hover:bg-white/5 transition text-sm font-medium"
                            >
                                <option className="bg-zinc-900 text-white">Any Condition</option>
                                <option value="New" className="bg-zinc-900 text-white">New</option>
                                <option value="Used" className="bg-zinc-900 text-white">Used</option>
                                <option value="Demo" className="bg-zinc-900 text-white">Demo</option>
                            </select>

                            {/* Make */}
                            <select
                                value={selectedMake}
                                onChange={(e) => setSelectedMake(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none text-white appearance-none cursor-pointer hover:bg-white/5 transition text-sm font-medium"
                            >
                                <option className="bg-zinc-900 text-white">Any Make</option>
                                {availableMakes.map(make => (
                                    <option key={make} value={make} className="bg-zinc-900 text-white">{make}</option>
                                ))}
                            </select>

                            {/* Category */}
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none text-white appearance-none cursor-pointer hover:bg-white/5 transition text-sm font-medium"
                            >
                                <option className="bg-zinc-900 text-white">Any Category</option>
                                {CARAVAN_CATEGORIES.map(cat => (
                                    <option key={cat} value={cat} className="bg-zinc-900 text-white">{cat}</option>
                                ))}
                            </select>

                            {/* Location */}
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 outline-none text-white appearance-none cursor-pointer hover:bg-white/5 transition text-sm font-medium"
                            >
                                <option className="bg-zinc-900 text-white">Any Location</option>
                                {STATES.map(state => (
                                    <option key={state} value={state} className="bg-zinc-900 text-white">{state}</option>
                                ))}
                            </select>
                        </div>

                        {/* Bottom Row: Detailed Ranges (Hidden on Mobile) */}
                        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
                            {/* Year Range */}
                            <div className="flex gap-2 items-center col-span-1">
                                <input
                                    type="number"
                                    placeholder="Min Year"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white"
                                    value={minYear}
                                    onChange={(e) => setMinYear(e.target.value)}
                                />
                                <span className="text-muted">-</span>
                                <input
                                    type="number"
                                    placeholder="Max Year"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white"
                                    value={maxYear}
                                    onChange={(e) => setMaxYear(e.target.value)}
                                />
                            </div>

                            {/* Length Range */}
                            <div className="flex gap-2 items-center col-span-1">
                                <input
                                    type="number"
                                    placeholder="Min ft"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white"
                                    value={minLength}
                                    onChange={(e) => setMinLength(e.target.value)}
                                />
                                <span className="text-muted">-</span>
                                <input
                                    type="number"
                                    placeholder="Max ft"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white"
                                    value={maxLength}
                                    onChange={(e) => setMaxLength(e.target.value)}
                                />
                            </div>

                            {/* Sleeps */}
                            <select
                                value={selectedSleeps}
                                onChange={(e) => setSelectedSleeps(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 outline-none text-white appearance-none cursor-pointer hover:bg-white/5 transition text-sm font-medium"
                            >
                                <option className="bg-zinc-900 text-white">Any Sleeps</option>
                                <option value="2" className="bg-zinc-900 text-white">2 Berth</option>
                                <option value="3" className="bg-zinc-900 text-white">3 Berth</option>
                                <option value="4" className="bg-zinc-900 text-white">4 Berth</option>
                                <option value="5" className="bg-zinc-900 text-white">5 Berth</option>
                                <option value="6+" className="bg-zinc-900 text-white">6+ Berth</option>
                            </select>

                        </div>

                    </div>

                    {/* MOBILE DRAWER OVERLAY */}
                    {isFilterOpen && (
                        <div className="fixed inset-0 z-50 bg-background flex flex-col md:hidden animate-in slide-in-from-bottom-5">
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <button onClick={resetFilters} className="text-muted hover:text-white transition">Reset</button>
                                <span className="font-bold text-lg">Filters</span>
                                <button onClick={() => setIsFilterOpen(false)} className="bg-white/10 rounded-full p-2 hover:bg-white/20">✕</button>
                            </div>

                            {/* Drawer Body (Scrollable) */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">

                                {/* 1. Condition & Category */}
                                <div className="space-y-4">
                                    <h3 className="font-bold text-white/50 text-sm uppercase tracking-wider">Type</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            value={selectedCondition}
                                            onChange={(e) => setSelectedCondition(e.target.value)}
                                            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none"
                                        >
                                            <option className="bg-zinc-900 text-white">Any Condition</option>
                                            {['New', 'Used', 'Demo'].map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none"
                                        >
                                            <option className="bg-zinc-900 text-white">Category</option>
                                            {CARAVAN_CATEGORIES.map(c => <option key={c} value={c} className="bg-zinc-900 text-white">{c}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* 2. Make & Location */}
                                <div className="space-y-4">
                                    <h3 className="font-bold text-white/50 text-sm uppercase tracking-wider">Details</h3>
                                    <select
                                        value={selectedMake}
                                        onChange={(e) => setSelectedMake(e.target.value)}
                                        className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none"
                                    >
                                        <option className="bg-zinc-900 text-white">Any Make</option>
                                        {availableMakes.map(m => <option key={m} value={m} className="bg-zinc-900 text-white">{m}</option>)}
                                    </select>
                                    <select
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none"
                                    >
                                        <option className="bg-zinc-900 text-white">Location</option>
                                        {STATES.map(s => <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>)}
                                    </select>
                                </div>

                                {/* 3. Price Slider */}
                                <div className="space-y-4 bg-surface p-4 rounded-xl border border-white/10">
                                    <div className="flex justify-between font-bold">
                                        <span>Max Price</span>
                                        <span className="text-primary">${maxPrice.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10000"
                                        max="250000"
                                        step="5000"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                        className="w-full accent-primary h-2 bg-black/40 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>

                                {/* 4. Ranges (Year, Length) */}
                                <div className="space-y-4">
                                    <h3 className="font-bold text-white/50 text-sm uppercase tracking-wider">Ranges</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="number" placeholder="Min Year" value={minYear} onChange={e => setMinYear(e.target.value)} className="bg-surface border border-white/10 rounded-xl p-3 text-white" />
                                        <input type="number" placeholder="Max Year" value={maxYear} onChange={e => setMaxYear(e.target.value)} className="bg-surface border border-white/10 rounded-xl p-3 text-white" />
                                        <input type="number" placeholder="Min Length (ft)" value={minLength} onChange={e => setMinLength(e.target.value)} className="bg-surface border border-white/10 rounded-xl p-3 text-white" />
                                        <input type="number" placeholder="Max Length (ft)" value={maxLength} onChange={e => setMaxLength(e.target.value)} className="bg-surface border border-white/10 rounded-xl p-3 text-white" />
                                    </div>
                                </div>

                                <select
                                    value={selectedSleeps}
                                    onChange={(e) => setSelectedSleeps(e.target.value)}
                                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none"
                                >
                                    <option className="bg-zinc-900 text-white">Sleeps (Any)</option>
                                    <option value="2" className="bg-zinc-900 text-white">2 Berth</option>
                                    <option value="3" className="bg-zinc-900 text-white">3 Berth</option>
                                    <option value="4" className="bg-zinc-900 text-white">4 Berth</option>
                                    <option value="5" className="bg-zinc-900 text-white">5 Berth</option>
                                    <option value="6+" className="bg-zinc-900 text-white">6+ Berth</option>
                                </select>
                            </div>

                            {/* Drawer Footer (Sticky) */}
                            <div className="p-4 border-t border-white/10 bg-background/95 backdrop-blur">
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl active:scale-95 transition"
                                >
                                    Show {filteredListings.length} Vans 🚐
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Active Filters Display */}
                    {hasActiveFilters && (
                        <div className="text-sm text-muted flex flex-wrap gap-2 items-center animate-in fade-in">
                            <span>Filtering by:</span>
                            {selectedCondition !== 'Any Condition' && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{selectedCondition}</span>}
                            {selectedMake !== 'Any Make' && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{selectedMake}</span>}
                            {selectedCategory !== 'Any Category' && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{selectedCategory}</span>}
                            {selectedState !== 'Any Location' && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{selectedState}</span>}
                            {selectedSleeps !== 'Any Sleeps' && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{selectedSleeps}</span>}
                            {(minYear || maxYear) && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">Year {minYear}-{maxYear}</span>}
                            {(minLength || maxLength) && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">{minLength}-{maxLength} ft</span>}
                            {searchTerm && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">"{searchTerm}"</span>}
                            {maxPrice < 250000 && <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">Under ${maxPrice.toLocaleString()}</span>}
                            <button
                                onClick={resetFilters}
                                className="text-xs hover:text-white underline ml-2"
                            >
                                Clear All
                            </button>
                        </div>
                    )}

                </div>
            </div>

            {/* Filtered Results */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <p className="text-muted font-medium">Showing {filteredListings.length} {filteredListings.length === 1 ? 'van' : 'vans'}</p>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none cursor-pointer hover:bg-white/5 transition"
                        >
                            <option className="bg-zinc-900 text-white">Newest Listed</option>
                            <option className="bg-zinc-900 text-white">Price: Low to High</option>
                            <option className="bg-zinc-900 text-white">Price: High to Low</option>
                            <option className="bg-zinc-900 text-white">Year: Newest</option>
                            <option className="bg-zinc-900 text-white">Year: Oldest</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-muted">Loading entire database...</div>
                ) : filteredListings.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5">
                        <p className="text-xl font-bold mb-2">No vans match your search</p>
                        <p className="text-muted mb-6">Try adjusting your filters.</p>
                        <button
                            onClick={resetFilters}
                            className="text-primary hover:underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredListings.map((van) => {
                            const badges = getTrendBadges(van.description);
                            return (
                                <div key={van.id} className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="h-56 bg-zinc-800 relative overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={van.images?.split(',')[0]} alt={van.model} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />

                                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded border border-white/10">
                                            {van.condition || van.status}
                                        </div>

                                        {/* Trend Badge Overlay (First One) */}
                                        {badges.length > 0 && (
                                            <div className="absolute bottom-2 right-2 animate-in slide-in-from-right-4 fade-in duration-500">
                                                <span className={`text-[10px] font-bold px-2 py-1 rounded border shadow-sm ${badges[0].color} backdrop-blur-md`}>
                                                    {badges[0].icon} {badges[0].label}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg leading-tight mb-1 truncate group-hover:text-primary transition">{van.year} {van.make} {van.model}</h3>
                                            <p className="text-2xl font-bold text-white mb-3">${van.price.toLocaleString()}</p>

                                            <div className="flex items-center gap-2 text-sm text-muted mb-4">
                                                <span>📍 {van.location}</span>
                                                <span className="text-zinc-600">•</span>
                                                <span>🛏️ {van.sleeps}</span>
                                            </div>

                                            {/* Badge Row */}
                                            {badges.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {badges.slice(0, 3).map((badge, i) => ( // Show max 3 badges
                                                        <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badge.color}`}>
                                                            {badge.icon} {badge.label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href={`/used-caravans/${van.id}`}
                                            className="block w-full text-center py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition font-bold text-sm"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
