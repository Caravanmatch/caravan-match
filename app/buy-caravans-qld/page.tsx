import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caravans for Sale QLD | Buy & Sell Custom Caravans in Queensland",
    description: "Find your perfect off-road caravan for the Cape or a luxury van for the Gold Coast. Compare top QLD manufacturers and private listings today.",
};

export default function QLDLandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Best Caravans for Sale in <span className="text-primary">QLD</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        From the tropical north to the sunny south-east, Queenslanders know that a quality caravan is the key to exploring the Sunshine State.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 mb-20 text-lg">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Queensland Lifestyle</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            QLD is the heart of Australian caravanning. Whether you are heading to K'gari (Fraser Island) or doing the lap, you need a van with superior ventilation and dust sealing.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            We help you find local QLD experts who build vans specifically designed for the humidity and heat of the north.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">QLD Popular Search Areas</h3>
                        <ul className="grid grid-cols-2 gap-4 text-zinc-300">
                            <li>• Brisbane</li>
                            <li>• Gold Coast</li>
                            <li>• Sunshine Coast</li>
                            <li>• Townsville</li>
                            <li>• Cairns</li>
                            <li>• Toowoomba</li>
                            <li>• Mackay</li>
                            <li>• Rockhampton</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">🚐</div>
                        <h3 className="text-xl font-bold mb-2">Build a Custom Van</h3>
                        <p className="text-sm text-zinc-500 mb-6">Design your dream van and get quotes from QLD & Australian manufacturers.</p>
                        <Link href="/builder" className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition">
                            Open Builder
                        </Link>
                    </div>

                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold mb-2">Used Marketplace</h3>
                        <p className="text-sm text-zinc-500 mb-6">Browse second-hand caravans from private sellers across Queensland.</p>
                        <Link href="/used-caravans" className="mt-auto w-full py-3 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition">
                            Browse Listings
                        </Link>
                    </div>

                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold mb-2">Sell in QLD</h3>
                        <p className="text-sm text-zinc-500 mb-6">List your caravan today and reach buyers specifically looking in QLD.</p>
                        <Link href="/advertise" className="mt-auto w-full py-3 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition">
                            List for Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
