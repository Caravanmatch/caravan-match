"use client";

import React, { useState } from 'react';

export default function TestEmailPage() {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/test-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            setResult(data);
        } catch (err: any) {
            setResult({ error: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 font-mono">
            <h1 className="text-2xl font-bold mb-6 text-yellow-500">EMAIL DEBUGGER</h1>

            <form onSubmit={handleSend} className="max-w-md space-y-4 mb-8">
                <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">Target Email</label>
                    <input
                        type="email"
                        required
                        className="w-full bg-gray-900 border border-gray-700 p-3 rounded text-white"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button
                    disabled={loading}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 rounded"
                >
                    {loading ? 'SENDING...' : 'SEND TEST EMAIL'}
                </button>
            </form>

            {result && (
                <div className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto">
                    <h3 className="text-sm uppercase text-gray-500 mb-2">Server Response:</h3>
                    <pre className="text-xs text-green-400">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
