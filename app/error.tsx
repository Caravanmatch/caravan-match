'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-muted mb-6 max-w-md">
                We encountered an error loading this page. Please try refreshing or return home.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition"
                >
                    Try again
                </button>
                <a
                    href="/"
                    className="px-6 py-2 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}
