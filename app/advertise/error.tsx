"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Advertise Page Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
            <p className="text-red-400 mb-6 bg-red-900/20 p-4 rounded-lg font-mono text-sm">
                {error.message || "Unknown Application Error"}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition"
            >
                Try again
            </button>
        </div>
    );
}
