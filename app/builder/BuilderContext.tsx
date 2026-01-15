"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the build configuration
export interface BuildState {
    tow_vehicle?: string;
    type?: string;
    length?: string;
    solar?: string;
    batteries?: string;
    inverter?: string;
    water_tanks?: string;
    // grey_water removed
    external_shower?: string;
    hot_water?: string;
    toilet?: string;
    appliances: string[];
    fridge_size?: string;
    fridge_type?: string;
    ac?: string;
    diesel_heater?: string;
    final_comments?: string;
    bed?: string;
    kids_beds?: string;
    frame?: string;
    fixtures?: string;
    outdoor_kitchen?: string[];
    electric_awning?: string;
    auto_level?: string;
    // New Layout Keys
    layout_bed_orientation?: string;
    layout_bathroom?: string;
    layout_kitchen?: string;
    layout_dinette?: string;
    layout_bunks_placement?: string;
    layout_door_position?: string;

    custom_notes: Record<string, string>; // Key: fieldId, Value: User Note
    selectedDealerIds?: string[];
}

interface BuilderContextType {
    build: BuildState;
    updateBuild: (key: keyof BuildState, value: any) => void;
    updateMultiple: (updates: Partial<BuildState>) => void;
    resetBuild: () => void;
    currentStep: number;
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
    const [build, setBuild] = useState<BuildState>({
        appliances: [],
        custom_notes: {},
        selectedDealerIds: [],
    });
    const [currentStep, setCurrentStep] = useState(0);

    // PERSISTENCE: Load from localStorage on mount
    React.useEffect(() => {
        try {
            const saved = localStorage.getItem('builder_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed) setBuild(prev => ({ ...prev, ...parsed }));
            }

            // Also restore step? Maybe safer to start at 0 if returning later.
            // But if refreshing, user wants same step.
            // Let's not persist step strictly, or maybe use sessionStorage for step?
            // User concern is "wipes clean", usually referring to options.
        } catch (e) {
            console.error("Failed to load build state", e);
        }
    }, []);

    // PERSISTENCE: Save to localStorage on change
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem('builder_state', JSON.stringify(build));
        }, 500); // Debounce
        return () => clearTimeout(timeout);
    }, [build]);

    const updateBuild = (key: keyof BuildState, value: any) => {
        setBuild((prev) => ({ ...prev, [key]: value }));
    };

    const updateMultiple = (updates: Partial<BuildState>) => {
        setBuild((prev) => ({ ...prev, ...updates }));
    };

    const resetBuild = () => {
        const emptyState: BuildState = {
            appliances: [],
            custom_notes: {},
            selectedDealerIds: [],
        };
        setBuild(emptyState);
        localStorage.removeItem('builder_state');
        setCurrentStep(0);
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));
    const setStep = (step: number) => setCurrentStep(step);

    return (
        <BuilderContext.Provider value={{ build, updateBuild, updateMultiple, resetBuild, currentStep, setStep, nextStep, prevStep }}>
            {children}
        </BuilderContext.Provider>
    );
}

export function useBuilder() {
    const context = useContext(BuilderContext);
    if (!context) {
        throw new Error("useBuilder must be used within a BuilderProvider");
    }
    return context;
}
