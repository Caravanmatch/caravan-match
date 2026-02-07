'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body className="bg-black text-white flex flex-col items-center justify-center min-h-screen p-4 text-center font-sans">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Critical Application Error</h2>
                <p className="mb-6 max-w-md text-gray-300">
                    A critical error occurred in the root layout. This is likely due to a configuration or environment issue.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mb-6 text-left w-full max-w-lg overflow-auto border border-gray-800">
                    <p className="font-mono text-xs text-red-400 break-all">{error.message}</p>
                </div>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
