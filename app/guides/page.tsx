import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caravan Guides & Resources | Caravan Match Australia",
    description: "Expert advice on buying, selling, and towing caravans in Australia. Free tools, weight calculators, and manufacturer guides.",
};

const guides = [
    {
        title: "Towing Weights 101",
        description: "The ultimate guide to understanding GVM, GCM, ATM, and TBM without the headache.",
        href: "/guides/towing-weights",
        icon: "⚖️",
        tag: "Safety"
    },
    {
        title: "Off-Road Van Guide",
        description: "What to look for when buying a caravan for the Australian outback.",
        href: "/guides/buy-off-road-caravan",
        icon: "⛰️",
        tag: "Buying"
    },
    {
        title: "Towing Weight Calculator",
        description: "Use our free tool to check if your car and caravan setup is legal.",
        href: "/resources/towing-calculator",
        icon: "🚙",
        tag: "Tool"
    }
];

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Expert <span className="text-primary">Guides</span> & Resources
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Everything you need to know about the Australian caravan lifestyle.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                    {guides.map((guide) => (
                        <Link
                            key={guide.title}
                            href={guide.href}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-4xl">{guide.icon}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                                        {guide.tag}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
                                    {guide.title}
                                </h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    {guide.description}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                                READ GUIDE <span className="ml-2">→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Need a custom build?</h2>
                    <p className="text-zinc-300 mb-6">
                        Use our builder to design your perfect van and get quotes from Australian manufacturers.
                    </p>
                    <Link href="/builder" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-hover transition">
                        Start Your Build
                    </Link>
                </div>
            </div>
        </div>
    );
}
