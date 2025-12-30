"use client";

import React from "react";

interface BlueprintProps {
    build: any;
}

export function BlueprintPreview({ build }: BlueprintProps) {
    if (!build) return null;

    // --- SCALAR CONSTANTS (1 unit = 10mm) ---
    const VAN_WIDTH = 235; // Internal width ~2.35m
    const WALL_THICKNESS = 5; // Thicker walls for plan view

    // Chassis Lengths
    let lengthMM = 6500;
    const len = build?.length || '20_23';
    if (len === '16_20') lengthMM = 5800; // 19ft
    if (len === '20_23') lengthMM = 6800; // 22ft
    if (len === '23_27') lengthMM = 7600; // 25ft

    const scaleLength = lengthMM / 10;
    const u = (mm: number) => mm / 10;

    // --- COLORS (Premium Palette) ---
    const C_bg = "#ffffff";
    const C_wall = "#27272a"; // Zinc-800
    const C_floor = "#f4f4f5"; // Zinc-100 (Subtle)
    const C_joinery = "#d4d4d8"; // Zinc-300
    const C_upholstery = "#fde047"; // Yellow-300 (Classic layout style)
    const C_wet = "#dbeafe"; // Blue-100
    const C_bed = "#fef9c3"; // Yellow-100
    const C_table = "#e4e4e7"; // Zinc-200

    // --- LAYOUT LOGIC ---

    // 1. REAR ZONE
    let rearType = 'ensuite';
    let rearDepth = u(1100);

    if (build.layout_bunks_placement === 'rear_wall' && parseInt(build.kids_beds || '0') > 0) {
        rearType = 'bunks';
        rearDepth = u(800);
    } else if (build.layout_dinette === 'club') {
        rearType = 'club';
        rearDepth = u(1600);
    }

    const rearStartX = scaleLength - rearDepth;

    // 2. FRONT ZONE (Bedroom)
    let frontDepth = u(2100);
    if (build.layout_bed_orientation === 'east_west') {
        frontDepth = u(1600);
    }
    const frontEndX = frontDepth;

    // 3. MIDDLE ZONE
    const midAvailable = rearStartX - frontEndX;
    let conflict = false;
    if (midAvailable < u(1500)) conflict = true;

    // Resolve Middle
    let midType = 'standard';
    let bathSplitLen = 0;

    if (rearType === 'club') {
        midType = 'split_bath';
        bathSplitLen = u(900);
    } else if (rearType === 'bunks') {
        midType = 'combo_bath';
        bathSplitLen = u(1000);
    }

    const livingLen = midAvailable - bathSplitLen;

    // --- DOOR LOGIC ---
    let doorX = 0;
    if (build.layout_door_position === 'front') doorX = frontEndX + 10;
    else if (build.layout_door_position === 'middle') doorX = scaleLength / 2 - u(300);
    else if (build.layout_door_position === 'rear') doorX = rearStartX - u(700);

    // Clamp Door
    if (doorX < frontEndX) doorX = frontEndX + 5;
    if (doorX > rearStartX - u(600)) doorX = rearStartX - u(650);

    // --- DRAWING COMPONENTS ---

    const Rect = ({ x, y, w, h, fill, label, stroke, r, shadow }: any) => (
        <g filter={shadow ? "url(#shadow)" : undefined}>
            <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke || '#000'} strokeWidth="0.5" strokeOpacity="0.3" rx={r || 2} />
            {label && (
                <text x={x + w / 2} y={y + h / 2} fontSize="5" fontWeight="600" fill="#444" textAnchor="middle" dominantBaseline="middle" style={{ pointerEvents: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {label}
                </text>
            )}
        </g>
    );

    return (
        <div className="w-full bg-white p-8 rounded-xl border border-zinc-200 shadow-2xl overflow-hidden mt-8">
            <div className="flex justify-between items-end mb-8 border-b border-zinc-100 pb-4">
                <div>
                    <h3 className="text-2xl font-bold text-zinc-900 font-heading">Concept Plan</h3>
                    <p className="text-sm text-zinc-500 font-medium mt-1">
                        {len.replace('_', '-')} Chassis  <span className="mx-2">•</span>  {rearType === 'club' ? 'Club Lounge Layout' : rearType === 'bunks' ? 'Family Bunk Layout' : 'Rear Ensuite Layout'}
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Scale 1:50</div>
                    {conflict && (
                        <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded text-xs font-bold border border-orange-100">
                            Adjust Length for Space
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-center overflow-x-auto py-6">
                <svg width={scaleLength + 100} height={VAN_WIDTH + 100} viewBox={`-50 -50 ${scaleLength + 100} ${VAN_WIDTH + 100}`}>
                    <defs>
                        {/* Soft Drop Shadow for Furniture 2.5D visual */}
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                            <feOffset dx="1" dy="1" result="offsetblur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.2" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* A-FRAME */}
                    <path d={`M -40 ${VAN_WIDTH / 2} L 0 10 L 0 ${VAN_WIDTH - 10}`} stroke="#d4d4d8" strokeWidth="4" fill="none" />
                    <circle cx="-40" cy={VAN_WIDTH / 2} r="5" fill="#a1a1aa" />

                    {/* HULL SHELL */}
                    <rect x="0" y="0" width={scaleLength} height={VAN_WIDTH} fill={C_floor} stroke={C_wall} strokeWidth={WALL_THICKNESS} rx="4" />

                    {/* --- FRONT: BEDROOM --- */}
                    <g>
                        {/* Robes */}
                        <Rect x={0} y={0} w={u(400)} h={u(550)} fill={C_joinery} label="Robe" shadow />
                        <Rect x={0} y={VAN_WIDTH - u(550)} w={u(400)} h={u(550)} fill={C_joinery} label="Robe" shadow />

                        {/* Bed */}
                        {build.layout_bed_orientation === 'east_west' ? (
                            <g>
                                <Rect x={u(400)} y={0} w={u(1530)} h={VAN_WIDTH} fill={C_bed} label="Queen East-West" r="6" shadow />
                                {/* Pillows */}
                                <rect x={u(420)} y={u(200)} width={u(200)} height={u(400)} rx="5" fill="#fff" fillOpacity="0.5" />
                                <rect x={u(420)} y={VAN_WIDTH - u(600)} width={u(200)} height={u(400)} rx="5" fill="#fff" fillOpacity="0.5" />
                            </g>
                        ) : (
                            <g>
                                <Rect x={u(420)} y={(VAN_WIDTH - u(1530)) / 2} w={u(1900)} h={u(1530)} fill={C_bed} label="Island Queen" r="8" shadow />
                                {/* Pillows */}
                                <rect x={u(450)} y={VAN_WIDTH / 2 - u(400)} width={u(200)} height={u(350)} rx="5" fill="#fff" fillOpacity="0.5" />
                                <rect x={u(450)} y={VAN_WIDTH / 2 + u(50)} width={u(200)} height={u(350)} rx="5" fill="#fff" fillOpacity="0.5" />
                            </g>
                        )}

                        {/* Overhead dotted line */}
                        <rect x={u(10)} y={u(10)} width={u(400)} height={VAN_WIDTH - u(20)} fill="none" stroke="#ccc" strokeDasharray="3" rx="2" />
                    </g>


                    {/* --- REAR ZONE --- */}
                    <g transform={`translate(${rearStartX}, 0)`}>
                        {rearType === 'ensuite' && (
                            <g>
                                {/* Shower */}
                                <Rect x={rearDepth - u(800)} y={0} w={u(800)} h={u(900)} fill={C_wet} label="Shr" shadow />
                                <line x1={rearDepth - u(800)} y1={0} x2={rearDepth} y2={u(900)} stroke="#fff" strokeWidth="2" opacity="0.5" />
                                <line x1={rearDepth} y1={0} x2={rearDepth - u(800)} y2={u(900)} stroke="#fff" strokeWidth="2" opacity="0.5" />

                                {/* Toilet */}
                                <Rect x={rearDepth - u(800)} y={VAN_WIDTH - u(800)} w={u(800)} h={u(800)} fill={C_wet} label="WC" shadow />
                                <ellipse cx={rearDepth - u(400)} cy={VAN_WIDTH - u(400)} rx={u(150)} ry={u(200)} fill="#fff" />

                                {/* Vanity */}
                                <Rect x={u(100)} y={u(900)} w={u(400)} h={VAN_WIDTH - u(1800)} fill={C_joinery} shadow />
                                <circle cx={u(300)} cy={VAN_WIDTH / 2} r={u(120)} fill="#fff" stroke="#ccc" /> {/* Sink */}

                                {/* WM */}
                                <Rect x={rearDepth - u(600)} y={u(900)} w={u(600)} h={VAN_WIDTH - u(1800)} fill={C_joinery} label="WM" shadow />
                                <rect x={rearDepth - u(500)} y={u(1100)} width={u(400)} height={u(400)} fill="none" stroke="#aaa" rx="10" />
                            </g>
                        )}

                        {rearType === 'club' && (
                            <g drop-shadow="url(#shadow)">
                                <path d={`M 0 0 L ${rearDepth} 0 L ${rearDepth} ${VAN_WIDTH} L 0 ${VAN_WIDTH} L 0 ${VAN_WIDTH - u(600)} L ${rearDepth - u(600)} ${VAN_WIDTH - u(600)} L ${rearDepth - u(600)} ${u(600)} L 0 ${u(600)} Z`} fill={C_upholstery} stroke="#ca8a04" strokeWidth="0.5" filter="url(#shadow)" />
                                {/* Backrests */}
                                <path d={`M ${u(100)} ${u(100)} L ${rearDepth - u(100)} ${u(100)} L ${rearDepth - u(100)} ${VAN_WIDTH - u(100)} L ${u(100)} ${VAN_WIDTH - u(100)}`} fill="none" stroke="#b45309" strokeWidth="4" opacity="0.2" />
                                {/* Table */}
                                <Rect x={u_mm(rearDepth / 2 - 350)} y={u_mm(VAN_WIDTH / 2 - 250)} w={u(700)} h={u(500)} fill={C_table} label="Table" r="10" shadow />
                            </g>
                        )}

                        {rearType === 'bunks' && (
                            <g>
                                <Rect x={0} y={0} w={rearDepth} h={VAN_WIDTH} fill={C_bed} label={`${build.kids_beds}x Bunks`} shadow />
                                <line x1={0} y1={VAN_WIDTH / 2} x2={rearDepth} y2={VAN_WIDTH / 2} stroke="#ca8a04" strokeDasharray="3" />
                            </g>
                        )}
                    </g>


                    {/* --- MIDDLE ZONE --- */}
                    <g transform={`translate(${frontEndX}, 0)`}>

                        {/* BATH SPLIT */}
                        {midType === 'split_bath' && (
                            <g>
                                <Rect x={livingLen} y={0} w={bathSplitLen} h={u(900)} fill={C_wet} label="Shr" shadow />
                                <Rect x={livingLen} y={VAN_WIDTH - u(900)} w={bathSplitLen} h={u(900)} fill={C_wet} label="WC" shadow />
                            </g>
                        )}

                        {/* COMBO BATH */}
                        {midType === 'combo_bath' && (
                            <Rect x={livingLen - u(1000)} y={0} w={u(1000)} h={u(1000)} fill={C_wet} label="Ensuite" shadow />
                        )}

                        {/* KITCHEN & LIVING */}
                        {build.layout_kitchen === 'door_side' ? (
                            <g>
                                {/* Kitchen Check for conflict with door if door is middle? */}
                                {/* Kitchen on Bottom (Door Side) */}
                                <Rect x={0} y={VAN_WIDTH - u(600)} w={livingLen} h={u(600)} fill={C_joinery} label="Kitchen" shadow />
                                {/* Stove */}
                                <g transform={`translate(${livingLen / 2}, ${VAN_WIDTH - u(500)})`}>
                                    <rect x="0" y="0" width={u(400)} height={u(400)} rx="2" fill="#fff" stroke="#999" />
                                    <circle cx={u(100)} cy={u(100)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(300)} cy={u(100)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(100)} cy={u(300)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(300)} cy={u(300)} r={u(60)} fill="#333" opacity="0.2" />
                                </g>

                                {/* Lounge Top */}
                                <Rect x={u(50)} y={0} w={livingLen - u(100)} h={u(900)} fill={C_upholstery} label="Lounge" stroke="#ca8a04" shadow r="5" />
                                <Rect x={livingLen / 2 - u(350)} y={u(200)} w={u(700)} h={u(500)} fill={C_table} label="Table" r="5" shadow />
                            </g>
                        ) : (
                            // STANDARD: Driver Side Kitchen
                            <g>
                                <Rect x={0} y={0} w={livingLen} h={u(600)} fill={C_joinery} label="Kitchen" shadow />
                                {/* Stove */}
                                <g transform={`translate(${livingLen - u(600)}, ${u(100)})`}>
                                    <rect x="0" y="0" width={u(400)} height={u(400)} rx="2" fill="#fff" stroke="#999" />
                                    <circle cx={u(100)} cy={u(100)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(300)} cy={u(100)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(100)} cy={u(300)} r={u(60)} fill="#333" opacity="0.2" />
                                    <circle cx={u(300)} cy={u(300)} r={u(60)} fill="#333" opacity="0.2" />
                                </g>
                                {/* Sink */}
                                <circle cx={u(400)} cy={u(300)} r={u(150)} fill="#fff" stroke="#ccc" />

                                {/* Lounge Bottom */}
                                <Rect x={u(50)} y={VAN_WIDTH - u(950)} w={livingLen - u(100)} h={u(950)} fill={C_upholstery} label="Lounge" stroke="#ca8a04" shadow r="5" />
                                <Rect x={livingLen / 2 - u(350)} y={VAN_WIDTH - u(800)} w={u(700)} h={u(500)} fill={C_table} label="Table" r="5" shadow />
                            </g>
                        )}
                    </g>

                    {/* --- DOOR --- */}
                    <g transform={`translate(${doorX}, ${VAN_WIDTH})`}>
                        <rect x={0} y={0} width={u(600)} height={u(50)} fill="#e4e4e7" stroke="#333" />
                        <path d={`M ${u(600)} 0 A ${u(600)} ${u(600)} 0 0 1 0 0`} fill="none" stroke="#a1a1aa" strokeDasharray="3" />
                        <text x={u(300)} y={u(35)} fontSize="5" textAnchor="middle" fill="#333" fontWeight="bold">ENTRY</text>
                    </g>

                </svg>
            </div>
            <div className="mt-2 text-center text-xs text-zinc-400 font-medium">
                Concept Illustration Only • {Math.round(lengthMM)}mm Exterior
            </div>
        </div>
    );
}

// Clean helper
function u_mm(val: number) { return val; } // No-op, just for readability if needed
