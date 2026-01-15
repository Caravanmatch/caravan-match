import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caravans for Sale NSW | Buy & Sell Custom Caravans in New South Wales",
    description: "Compare the best caravan manufacturers and private listings in NSW. From Sydney to Byron Bay, find your perfect off-road or luxury caravan today.",
};

export default function NSWLandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Best Caravans for Sale in <span className="text-primary">NSW</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Whether you are exploring the Blue Mountains or hitting the South Coast, find the perfect caravan built for New South Wales conditions.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 mb-20 text-lg">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Buy in New South Wales?</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            NSW is home to some of Australia's most diverse terrain. From the humidity of the Far North Coast to the snowy peaks of the Alps, you need a caravan that can handle it all.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            Caravan Match connects you with top-tier NSW-based manufacturers and private sellers, ensuring you get a van that matches your specific travel plans.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">NSW Popular Search Areas</h3>
                        <ul className="grid grid-cols-2 gap-4 text-zinc-300">
                            <li>• Sydney</li>
                            <li>• Newcastle</li>
                            <li>• Central Coast</li>
                            <li>• Wollongong</li>
                            <li>• Port Macquarie</li>
                            <li>• Coffs Harbour</li>
                            <li>• Byron Bay</li>
                            <li>• Wagga Wagga</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">🚐</div>
                        <h3 className="text-xl font-bold mb-2">Build a Custom Van</h3>
                        <p className="text-sm text-zinc-500 mb-6">Design your dream van and get quotes from Australian manufacturers.</p>
                        <Link href="/builder" className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition">
                            Open Builder
                        </Link>
                    </div>

                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold mb-2">Used Marketplace</h3>
                        <p className="text-sm text-zinc-500 mb-6">Browse second-hand caravans from private sellers across NSW.</p>
                        <Link href="/used-caravans" className="mt-auto w-full py-3 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition">
                            Browse Listings
                        </Link>
                    </div>

                    <div className="bg-surface border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold mb-2">Sell in NSW</h3>
                        <p className="text-sm text-zinc-500 mb-6">List your caravan today and reach buyers specifically looking in NSW.</p>
                        <Link href="/advertise" className="mt-auto w-full py-3 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition">
                            List for Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
