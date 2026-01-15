import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Ultimate Caravan Towing Weight Guide (2026) | GVM, GCM, ATM",
    description: "Confused by towing weights? This guide explains GVM, GCM, ATM, and TBM in plain English, with a focus on Australian road legality.",
};

export default function TowingWeightsGuide() {
    return (
        <article className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/guides" className="text-primary font-bold mb-8 inline-block hover:underline">
                    ← Back to Guides
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                        The Ultimate Caravan <span className="text-primary">Towing Weight</span> Guide
                    </h1>
                    <div className="flex items-center gap-4 text-zinc-400 text-sm mb-8">
                        <span>Jan 15, 2026</span>
                        <span>•</span>
                        <span>10 min read</span>
                        <span>•</span>
                        <span className="text-primary font-bold">Safety Guide</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-lg">
                    <p>
                        Towing a caravan in Australia is one of the best ways to see the country, but the technical side of weights can be a nightmare. If you don't get your numbers right, you're not just risking a fine—you're risking your safety and your insurance.
                    </p>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Why Weights Matter</h2>
                        <p>
                            Modern caravans are heavier than ever, and police are increasingly setting up roadside weighing stations. Being overweight by even 50kg can result in an "unroadworthy" notice and potentially void your insurance if you're in an accident.
                        </p>
                    </section>

                    <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-xl my-8">
                        <p className="font-bold text-white mb-2">💡 Quick Tip</p>
                        <p className="text-sm">Never trust the manufacturer's plate blindly for your payload. Always head to a public weighbridge once you've loaded your water, gas, and gear.</p>
                    </div>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-4">The Key Definitions</h2>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary">GVM (Gross Vehicle Mass)</h3>
                            <p>This is the maximum weight your vehicle can carry. This includes the car itself, fuel, passengers, your bullbar, luggage, and most importantly: the <strong>Tow Ball Mass</strong> of the caravan.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary">ATM (Aggregate Trailer Mass)</h3>
                            <p>This is the maximum weight your caravan can weigh when it is fully loaded and NOT hitched to your car. Think of this as the caravan's personal GVM.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary">GCM (Gross Combined Mass)</h3>
                            <p>This is the big one. It's the maximum total weight of your car and caravan combined. Even if your car is under its GVM and your van is under its ATM, you might still exceed your GCM.</p>
                        </div>
                    </section>

                    <section className="bg-zinc-900 border border-white/10 p-8 rounded-2xl my-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Check Your Own Weights</h2>
                        <p className="text-zinc-400 mb-6">
                            Don't guess the math. Use our free, interactive tool to see if your setup is legal.
                        </p>
                        <Link href="/resources/towing-calculator" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-xl transition">
                            Open Towing Calculator 🧮
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">The Hidden Trap: Rear Axle Load</h2>
                        <p>
                            Often overlooked, your vehicle's rear axle has its own weight limit. When you put a 300kg caravan on the tow ball, it doesn't just add 300kg to the back. Because the ball is behind the axle, it acts like a lever (a "see-saw" effect), which actually takes weight off your front tyres and pushes down even harder on the rear ones.
                        </p>
                        <p>
                            Our calculator includes a <strong>Lever Effect</strong> calculation to help you ensure you aren't overloading your rear suspension and tyres.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Summary Checklist</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Check your vehicle's GCM (Car + Van total)</li>
                            <li>Check your vehicle's GVM (Car total)</li>
                            <li>Check your caravan's ATM (Van total)</li>
                            <li>Measure your Tow Ball Mass (usually 7-10% of van weight)</li>
                            <li>Ensure your Rear Axle isn't overloaded by the lever effect</li>
                        </ul>
                    </section>
                </div>

                <footer className="mt-20 border-t border-white/10 pt-10">
                    <p className="text-zinc-500 text-sm">
                        *Disclaimer: This guide is for educational purposes. Always consult your vehicle and caravan manuals and consider a professional mobile weighing service for absolute certainty.
                    </p>
                </footer>
            </div>
        </article>
    );
}
