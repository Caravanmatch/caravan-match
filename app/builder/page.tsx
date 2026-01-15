"use client";

import React, { useState } from "react";
import { BuilderProvider, useBuilder } from "./BuilderContext";
import { CARAVAN_OPTIONS } from "@/app/data/options";
import Link from "next/link";
import { InfoGuideContent } from "./InfoGuideContent";

// --- STEPS DEFINITION ---
// --- STEPS DEFINITION ---
const STEPS = [
    { id: 'intro', title: 'How it Works', fields: [] },
    { id: 'config', title: 'Caravan Configuration', fields: ['type', 'length', 'frame'] },
    { id: 'layout', title: 'Floorplan Layout', fields: ['layout_kitchen', 'layout_dinette', 'layout_bathroom', 'bed', 'layout_bed_orientation', 'kids_beds', 'layout_bunks_placement'] }, // Merged
    { id: 'power', title: 'Power & Solar', fields: ['solar', 'batteries', 'inverter'] },
    { id: 'water', title: 'Water & Plumbing', fields: ['water_tanks', 'external_shower', 'hot_water', 'toilet'] },
    { id: 'interior', title: 'Interior & Appliances', fields: ['fridge_size', 'fridge_type', 'appliances', 'ac', 'diesel_heater', 'fixtures'] },
    { id: 'exterior', title: 'Exterior & Specs', fields: ['outdoor_kitchen', 'electric_awning', 'auto_level'] },
    { id: 'tow', title: 'Tow Vehicle', fields: ['tow_vehicle'] },
    { id: 'finals', title: 'Final Details', fields: [] },
];

const CUSTOM_PLACEHOLDERS: Record<string, string> = {
    tow_vehicle: "Please list: Make, Model, Year. Has it had a GVM upgrade? (If you don't have one yet, what are you looking to buy?)",
    type: "If unsure? Give us a brief idea of what you plan to do on your caravan adventures",
    length: "Know your length? Tell us here",
    solar: "Tell us your specific solar requirements",
    batteries: "Know what you need exactly?",
    inverter: "I know my inverter size already",
    water_tanks: "Tell us your exact wants and needs water is precious",
    hot_water: "Specific brand preference? (e.g. Truma, instantaneous)",
    toilet: "The office, thoughts?",
    bed: "Bed orientation east west or north south?",
    kids_beds: "Tell us where you want the beds. Back, middle, all on one side?",
    frame: "Not sure? No worries. Make a note here.",
    fixtures: "Want something else?",
    outdoor_kitchen: "Tell us your outdoor desires!"
};

// --- SUBSIDIARY COMPONENTS ---

function DealerMultiSelect({ selectedIds, onChange }: { selectedIds: string[], onChange: (ids: string[]) => void }) {
    const [dealers, setDealers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        fetch('/api/dealers/list')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setDealers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch dealers", err);
                setLoading(false);
            });
    }, []);

    const toggleDealer = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(i => i !== id));
        } else {
            onChange([...selectedIds, id]);
        }
    };

    if (loading) return <div className="text-sm text-muted">Loading manufacturers list...</div>;

    if (dealers.length === 0) return <div className="text-sm text-muted">No specific dealers available at the moment. Your tender will be sent to the general open pool.</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {dealers.map(d => {
                const isSelected = selectedIds.includes(d.id);
                return (
                    <div
                        key={d.id}
                        onClick={() => toggleDealer(d.id)}
                        className={`
                            cursor-pointer p-3 rounded-lg border flex items-center gap-3 transition-all
                            ${isSelected
                                ? 'border-primary bg-primary/20 text-white'
                                : 'border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400'
                            }
                        `}
                    >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'border-primary bg-primary text-white' : 'border-white/20'}`}>
                            {isSelected && <span className="text-xs font-bold">✓</span>}
                        </div>
                        <div className="flex-1">
                            <div className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-zinc-300'}`}>{d.company}</div>
                            <div className="text-xs text-muted truncate">{d.location || 'Australia Wide'}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

function OptionCard({
    selected,
    onClick,
    label
}: {
    selected: boolean;
    onClick: () => void;
    label: string
}) {
    return (
        <div
            onClick={onClick}
            className={`
        cursor-pointer p-4 rounded-xl border transition-all duration-200
        ${selected
                    ? 'border-primary/0 bg-primary/20 shadow-lg shadow-primary/5' // Removed border-primary, added transparency
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }
      `}
        >
            <div className="flex items-center justify-between">
                <span className={`font-medium ${selected ? 'text-primary' : 'text-foreground'}`}>{label}</span>
                {selected && (
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}

function BuilderWizard() {
    const { currentStep, nextStep, prevStep, build, updateBuild, updateMultiple } = useBuilder();
    const [showInfoModal, setShowInfoModal] = useState(false);
    const stepData = STEPS[currentStep];

    const handleSelect = (key: string, value: string) => {
        // Basic single select logic
        // For arrays (appliances), we toggle
        if (key === 'appliances' || key === 'outdoor_kitchen') {
            const current = ((build as any)[key] as string[]) || [];
            const exists = current.includes(value);
            if (exists) {
                updateBuild(key as any, current.filter(i => i !== value));
            } else {
                updateBuild(key as any, [...current, value]);
            }
        } else {
            // --- CONFLICT LOGIC FOR REAR LAYOUTS ---
            // IDs that occupy the Rear Wall:
            // layout_bathroom: 'full_ensuite'
            // layout_dinette: 'club'
            // layout_bunks_placement: 'rear_wall'

            const updates: any = { [key]: value };

            if (key === 'layout_bathroom' && value === 'full_ensuite') {
                updates['layout_dinette'] = '';
                updates['layout_bunks_placement'] = '';
            } else if (key === 'layout_dinette' && value === 'club') {
                updates['layout_bathroom'] = '';
                updates['layout_bunks_placement'] = '';
            } else if (key === 'layout_bunks_placement' && value === 'rear_wall') {
                updates['layout_bathroom'] = '';
                updates['layout_dinette'] = '';
            }

            updateMultiple(updates);
        }
    };

    const isSelected = (key: string, value: string) => {
        if (key === 'appliances' || key === 'outdoor_kitchen') {
            // @ts-ignore
            return ((build as any)[key] as string[] || []).includes(value);
        }
        // @ts-ignore
        return (build as any)[key] === value;
    };

    // Helper to map field key to CARAVAN_OPTIONS array
    // e.g. 'type' -> CARAVAN_OPTIONS.types
    const getOptions = (key: string) => {
        // Normalize key to match CARAVAN_OPTIONS property names if they differ
        // e.g. 'type' -> 'types', 'length' -> 'lengths'
        const mapping: Record<string, string> = {
            tow_vehicle: 'tow_vehicle',
            type: 'types',
            length: 'lengths',
            solar: 'solar',
            batteries: 'batteries',
            inverter: 'inverters',
            water_tanks: 'water_tanks',
            external_shower: 'external_shower',
            hot_water: 'hot_water',
            toilet: 'toilet',
            appliances: 'appliances',
            fridge_size: 'fridge_size',
            fridge_type: 'fridge_type',
            ac: 'ac',
            diesel_heater: 'diesel_heater',
            bed: 'beds',
            kids_beds: 'kids_beds',
            frame: 'frame',
            fixtures: 'fixtures',
            outdoor_kitchen: 'outdoor_kitchen',
            electric_awning: 'electric_awning',
            auto_level: 'auto_level',
            layout_bed_orientation: 'layout_bed_orientation',
            layout_door_position: 'layout_door_position',
            layout_bathroom: 'layout_bathroom',
            layout_kitchen: 'layout_kitchen',
            layout_dinette: 'layout_dinette',
            layout_bunks_placement: 'layout_bunks_placement',
        };

        // @ts-ignore
        return CARAVAN_OPTIONS[mapping[key]] || [];
    };

    const isLastStep = currentStep === STEPS.length - 1;



    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground pt-24 md:pt-28">

            {/* Sidebar Progress (Mobile: Top Bar, Desktop: Left Panel) */}
            <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/5 bg-surface/50 p-6 flex flex-col">
                <div className="mb-8">
                    <Link href="/" className="text-xl font-heading font-bold block mb-1">
                        CARAVAN<span className="text-primary">MATCH</span>
                    </Link>
                    <div className="flex items-center gap-4 text-xs font-medium">
                        <span className="text-muted tracking-wider uppercase">Builder Configurator</span>
                        <Link href="/builder/info" className="text-primary hover:text-white transition-colors flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Info Guide
                        </Link>
                    </div>
                </div>

                <div className="flex-1 space-y-1 overflow-y-auto">
                    {STEPS.map((s, idx) => {
                        const isActive = idx === currentStep;
                        // Special handling for step progress logic since 'finals' has no fields
                        // If currentStep > idx, it is done
                        const isDone = idx < currentStep;

                        return (
                            <div
                                key={s.id}
                                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-primary/10 text-primary' : 'text-muted'}
                  ${isDone ? 'text-foreground' : ''}
                `}
                            >
                                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
                  ${isActive ? 'border-primary bg-primary text-white' : ''}
                  ${isDone ? 'border-primary/50 bg-primary/20 text-primary' : 'border-white/10 bg-white/5'}
                `}>
                                    {isDone ? '✓' : idx + 1}
                                </div>
                                <div className="text-sm font-medium">{s.title}</div>
                            </div>
                        );
                    })}
                </div>


            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative">
                {/* Progress Bar (Top) */}
                <div className="h-1 bg-white/5 w-full">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                    />
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-12 max-w-5xl mx-auto w-full">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{stepData.title}</h1>
                            <p className="text-muted">Select your preferences below.</p>
                        </div>
                        <button
                            onClick={() => setShowInfoModal(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-xl font-bold transition-all group whitespace-nowrap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            Read Info Guide
                        </button>
                    </div>

                    <div className="space-y-10">
                        {stepData.id === 'intro' ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold border border-primary/50">1</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Build Your Dream</h3>
                                                <p className="text-muted">Use our smart configurator to specify exact details, from chassis type to solar capacity.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold border border-primary/50">2</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">We Match You</h3>
                                                <p className="text-muted">We send your anonymous build requirements to our network of verified Australian manufacturers.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold border border-primary/50">3</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Create Free Account</h3>
                                                <p className="text-muted">Simple sign-up to securely manage your tender and view private quotes.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold border border-primary/50">4</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Receive Quotes</h3>
                                                <p className="text-muted">Dealers compete for your business with their best price, build slots, and inclusions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 text-center">
                                        <div className="text-6xl mb-6">🚀</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
                                        <p className="text-muted mb-8">It takes about 3 minutes to complete your build profile.</p>
                                        <button
                                            onClick={nextStep}
                                            className="w-full py-4 bg-primary text-white font-bold rounded-xl border-2 border-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition transform hover:scale-105"
                                        >
                                            Start Configuration
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : stepData.id === 'finals' ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-4">Any final thoughts?</h3>
                                    <div className="bg-surface/50 border border-white/10 rounded-xl p-6">
                                        <label className="text-sm text-muted mb-2 block">
                                            Tell us anything else you have in mind for your dream build...
                                        </label>
                                        <textarea
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground min-h-[150px]"
                                            placeholder="I also want a dedicated wine cooler and..."
                                            value={build.final_comments || ''}
                                            onChange={(e) => updateBuild('final_comments', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Dealer Selection Section */}
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-4">Select Preferred Dealers (Optional)</h3>
                                    <p className="text-sm text-muted mb-4">
                                        Know who you want to build with? Select them below to give them <strong>Priority Access</strong> to your tender.
                                        Leave blank to open it to all verified manufacturers.
                                    </p>
                                    <DealerMultiSelect
                                        selectedIds={build.selectedDealerIds || []}
                                        onChange={(ids) => updateBuild('selectedDealerIds', ids)}
                                    />
                                </div>
                            </div>
                        ) : (
                            stepData.fields.map(fieldKey => (
                                <div key={fieldKey} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-lg font-medium text-white mb-4 capitalize">
                                        {fieldKey.replace(/_/g, ' ')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {getOptions(fieldKey).map((opt: any) => (
                                            <OptionCard
                                                key={opt.id}
                                                label={opt.label}
                                                selected={isSelected(fieldKey, opt.id)}
                                                onClick={() => handleSelect(fieldKey, opt.id)}
                                            />
                                        ))}
                                    </div>

                                    {/* Custom Note Input - Hidden for external_shower */}
                                    {fieldKey !== 'external_shower' && (
                                        <div className="mt-4">
                                            <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                                                Specific Requirements (Optional)
                                            </label>
                                            <textarea
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted/50 resize-y min-h-[80px]"
                                                placeholder={CUSTOM_PLACEHOLDERS[fieldKey] || `e.g. "Specific requirements for ${fieldKey.replace(/_/g, ' ')}..."`}
                                                value={build.custom_notes?.[fieldKey] || ''}
                                                onChange={(e) => {
                                                    const newNotes = { ...build.custom_notes, [fieldKey]: e.target.value };
                                                    updateBuild('custom_notes', newNotes);
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-white/5 bg-surface/80 backdrop-blur-md flex justify-between items-center sticky bottom-0 z-10">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-6 py-3 rounded-lg font-medium text-muted hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => {
                            if (isLastStep) {
                                window.location.href = '/builder/submit';
                            } else {
                                nextStep();
                            }
                        }}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl border-2 border-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition transform hover:translate-y-[-2px]"
                    >
                        {isLastStep ? 'Review & Submit' : 'Continue'}
                    </button>


                </div>
            </main>

            {/* Info Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setShowInfoModal(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/50 rounded-t-2xl">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Caravan Configuration Guide</h2>
                                <p className="text-sm text-muted">A detailed breakdown to help you choose.</p>
                            </div>
                            <button
                                onClick={() => setShowInfoModal(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <InfoGuideContent />
                        </div>

                        {/* Footer Close Button (Mobile friendly) */}
                        <div className="p-4 border-t border-white/5 md:hidden">
                            <button
                                onClick={() => setShowInfoModal(false)}
                                className="w-full py-3 bg-white/10 text-white font-bold rounded-xl"
                            >
                                Close Guide
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function BuilderPage() {
    return (
        <BuilderWizard />
    );
}
