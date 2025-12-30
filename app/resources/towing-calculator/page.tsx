"use client";

import React, { useState } from "react";
import Link from "next/link";


// --- HELPER COMPONENTS ---



const ProgressBar = ({ pct, label, val, max }: any) => {
    const isOver = pct > 100;
    const color = isOver ? 'bg-red-500' : pct > 90 ? 'bg-amber-500' : 'bg-green-500';

    return (
        <div className="mb-4">
            <div className="flex justify-between text-xs mb-1 font-medium text-zinc-300">
                <span>{label}</span>
                <span className={isOver ? 'text-red-500 font-bold' : ''}>
                    {Math.round(val)} / {max} kg ({Math.round(pct)}%)
                </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-500`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                />
            </div>
        </div>
    );
};

const InputRow = ({ label, val, set, field }: any) => (
    <div className="flex items-center justify-between gap-4 p-3 bg-white/5 rounded-lg border border-white/5">
        <label className="text-sm text-zinc-400 font-medium">{label}</label>
        <div className="flex items-center gap-2">
            <input
                type="number"
                className="w-20 bg-zinc-900 border border-white/10 rounded p-1 text-right text-white font-bold focus:border-primary focus:outline-none"
                value={val[field]}
                onChange={(e) => set({ ...val, [field]: parseFloat(e.target.value) || 0 })}
            />
            <span className="text-xs text-zinc-600 font-bold w-4">{field === 'fuel' || field === 'water' ? 'L' : 'kg'}</span>
        </div>
    </div>
);

export default function TowingCalculatorPage() {
    // --- STATE ---

    // Vehicle Specs
    const [vehicle, setVehicle] = useState({
        tare: 2600, // Empty weight
        gvm: 3350,  // Max Weight
        gcm: 6850,  // Max Combined
        maxTow: 3500, // Max Towing
        maxBall: 350
    });

    // Vehicle Payload
    const [carPayload, setCarPayload] = useState({
        passengers: 150, // 2 adults approx
        fuel: 0, // Litres (approx kg)
        bullbar: 0,
        roofRack: 0,
        luggage: 0,
        tools: 0
    });

    // Caravan Specs
    const [caravan, setCaravan] = useState({
        tare: 2500,
        atm: 3000,
        tbm: 250 // Tow Ball Mass
    });

    // Caravan Payload
    const [vanPayload, setVanPayload] = useState({
        water: 0, // Litres
        gas: 0, // kg
        luggage: 0,
        food: 0
    });

    // --- CALCULATIONS ---

    // 1. Total Car Payload
    // Fuel @ 0.85kg/L approx, Water @ 1kg/L
    const totalCarPayload =
        carPayload.passengers +
        (carPayload.fuel * 0.85) +
        carPayload.bullbar +
        carPayload.roofRack +
        carPayload.luggage +
        carPayload.tools;

    // 2. Total Van Payload
    const totalVanPayload =
        vanPayload.water +
        vanPayload.gas +
        vanPayload.luggage +
        vanPayload.food;

    // 3. Actual Weights
    const actualVanWeight = caravan.tare + totalVanPayload;
    // TBM is usually 10% of actual van weight if not specified, but here we let user input TBM or default it.
    // For simplicity in this calculator, we allow TBM to be dynamic or static?
    // Let's use the USER INPUT TBM, but validation warning if < 7% or > 15%?

    // Actual Car Weight = Tare + Payload + TBM
    const actualCarWeight = vehicle.tare + totalCarPayload + caravan.tbm;

    // Actual Combination
    // GCM = Actual Car + Actual Van (Axle Load) ??
    // Standard GCM def is Total Mass of Car + Total Mass of Trailer.
    // Note: TBM is transferred to car, so don't double count?
    // Mass of Car (on wheels) + Mass of Trailer (on wheels)? 
    // GCM is simply Sum of EVERYTHING.
    const actualGCM = actualCarWeight + (actualVanWeight - caravan.tbm);
    // Wait, GCM is total mass. actualCarWeight includes TBM. (actualVanWeight - TBM) is axle load.
    // So yes: (Tare + Payload + TBM) + (VanTare + VanPayload - TBM) = Tare + Payload + VanTare + VanPayload.
    // Correct.

    // --- COMPLIANCE CHECKS ---

    const checkGVM = {
        val: actualCarWeight,
        max: vehicle.gvm,
        pct: (actualCarWeight / vehicle.gvm) * 100,
        status: actualCarWeight > vehicle.gvm ? 'ILLEGAL' : 'LEGAL'
    };

    const checkGCM = {
        val: actualGCM,
        max: vehicle.gcm,
        pct: (actualGCM / vehicle.gcm) * 100,
        status: actualGCM > vehicle.gcm ? 'ILLEGAL' : 'LEGAL'
    };

    const checkATM = {
        val: actualVanWeight,
        max: caravan.atm,
        pct: (actualVanWeight / caravan.atm) * 100,
        status: actualVanWeight > caravan.atm ? 'ILLEGAL' : 'LEGAL'
    };

    const checkTowCap = {
        val: actualVanWeight,
        max: vehicle.maxTow,
        pct: (actualVanWeight / vehicle.maxTow) * 100,
        status: actualVanWeight > vehicle.maxTow ? 'ILLEGAL' : 'LEGAL'
    };

    const checkBall = {
        val: caravan.tbm,
        max: vehicle.maxBall,
        pct: (caravan.tbm / vehicle.maxBall) * 100,
        status: caravan.tbm > vehicle.maxBall ? 'ILLEGAL' : 'LEGAL'
    }



    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                            Know Your Weights ⚖️
                        </h1>
                        <p className="text-muted mt-2">Ensure your vehicle and caravan setup is legal and safe.</p>
                    </div>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
                        ← Back Home
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN - INPUTS */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 1. VEHICLE SETUP */}
                        <section className="bg-surface/30 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                🚙 Vehicle Stats
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputRow label="Tare Weight (Empty)" val={vehicle} set={setVehicle} field="tare" />
                                <InputRow label="GVM (Max Weight)" val={vehicle} set={setVehicle} field="gvm" />
                                <InputRow label="GCM (Combined Max)" val={vehicle} set={setVehicle} field="gcm" />
                                <InputRow label="Max Towing Cap." val={vehicle} set={setVehicle} field="maxTow" />
                                <InputRow label="Max Tow Ball Load" val={vehicle} set={setVehicle} field="maxBall" />
                            </div>
                        </section>

                        {/* 2. VEHICLE PAYLOAD */}
                        <section className="bg-surface/30 border border-white/10 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    🎒 Car Payload
                                </h2>
                                <span className="text-sm font-bold text-primary">{Math.round(totalCarPayload)} kg added</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputRow label="Passengers" val={carPayload} set={setCarPayload} field="passengers" />
                                <InputRow label="Fuel (Litres)" val={carPayload} set={setCarPayload} field="fuel" />
                                <InputRow label="Bullbar / Winch" val={carPayload} set={setCarPayload} field="bullbar" />
                                <InputRow label="Roof Racks" val={carPayload} set={setCarPayload} field="roofRack" />
                                <InputRow label="Luggage / Fridge" val={carPayload} set={setCarPayload} field="luggage" />
                                <InputRow label="Tools / Spares" val={carPayload} set={setCarPayload} field="tools" />
                            </div>
                        </section>

                        {/* 3. CARAVAN SETUP */}
                        <section className="bg-surface/30 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                ⛺ Caravan Stats
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputRow label="Tare Weight (Empty)" val={caravan} set={setCaravan} field="tare" />
                                <InputRow label="ATM (Max Weight)" val={caravan} set={setCaravan} field="atm" />
                                <InputRow label="Tow Ball Mass (TBM)" val={caravan} set={setCaravan} field="tbm" />
                            </div>
                        </section>

                        {/* 4. CARAVAN PAYLOAD */}
                        <section className="bg-surface/30 border border-white/10 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    📦 Van Payload
                                </h2>
                                <span className="text-sm font-bold text-primary">{Math.round(totalVanPayload)} kg added</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputRow label="Water (Litres)" val={vanPayload} set={setVanPayload} field="water" />
                                <InputRow label="Gas Bottles" val={vanPayload} set={setVanPayload} field="gas" />
                                <InputRow label="Food / Drink" val={vanPayload} set={setVanPayload} field="food" />
                                <InputRow label="Clothes / Gear" val={vanPayload} set={setVanPayload} field="luggage" />
                            </div>
                        </section>

                    </div>

                    {/* RIGHT COLUMN - RESULTS DASHBOARD */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 space-y-6">

                            {/* MAIN VERDICT CARD */}
                            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <h3 className="text-lg font-bold text-white mb-6">Compliance Check</h3>

                                <ProgressBar pct={checkGVM.pct} val={checkGVM.val} max={checkGVM.max} label="Vehicle GVM (Car + Load + Ball)" />
                                <ProgressBar pct={checkATM.pct} val={checkATM.val} max={checkATM.max} label="Caravan ATM (Van + Load)" />
                                <ProgressBar pct={checkGCM.pct} val={checkGCM.val} max={checkGCM.max} label="GCM (Combined Total)" />
                                <ProgressBar pct={checkTowCap.pct} val={checkTowCap.val} max={checkTowCap.max} label="Towing Capacity" />
                                <ProgressBar pct={checkBall.pct} val={checkBall.val} max={checkBall.max} label="Ball Load Limit" />

                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    {checkGVM.status === 'LEGAL' && checkATM.status === 'LEGAL' && checkGCM.status === 'LEGAL' && checkTowCap.status === 'LEGAL' && checkBall.status === 'LEGAL' ? (
                                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                                            <div className="text-3xl mb-2">✅</div>
                                            <div className="text-xl font-bold text-green-500">Legal Setup</div>
                                            <p className="text-xs text-green-400 mt-1">You are within all weight limits.</p>
                                        </div>
                                    ) : (
                                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl animate-pulse">
                                            <div className="text-3xl mb-2">❌</div>
                                            <div className="text-xl font-bold text-red-500">Overweight</div>
                                            <p className="text-xs text-red-400 mt-1">Check the red bars above. You are illegal.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="bg-surface/30 border border-white/5 rounded-2xl p-6 text-xs text-muted leading-relaxed">
                                <h4 className="font-bold text-white mb-2">Definitions</h4>
                                <ul className="space-y-2">
                                    <li><strong className="text-zinc-300">GVM:</strong> Gross Vehicle Mass. Max weight of your car including everything in it + the tow ball weight.</li>
                                    <li><strong className="text-zinc-300">ATM:</strong> Aggregate Trailer Mass. Max weight of your van when unhitched.</li>
                                    <li><strong className="text-zinc-300">GCM:</strong> Gross Combination Mass. Max weight of the entire rig on the road.</li>
                                </ul>
                                <p className="mt-4 italic opacity-70">
                                    *Disclaimer: This is a guide only. Always check your compliance plates and use a weighbridge for final verification.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
