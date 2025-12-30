"use client";

import Link from "next/link";

export default function DisclosurePage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <Link href="/" className="text-sm font-bold text-primary hover:underline mb-4 inline-block">← Back Home</Link>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Legal Disclosure & Risk Warning</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Please read this document carefully before engaging with any dealers or making financial commitments.
                    </p>
                </div>

                {/* Content Cards */}
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">

                    {/* 1. Connector Role */}
                    <section className="bg-surface/50 border border-white/10 p-8 rounded-2xl">
                        <div className="flex items-start gap-4">
                            <span className="text-4xl">🔗</span>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">1. We Are a Connector Only</h2>
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    Caravan Match ("The Platform") acts solely as an intermediary service connecting potential buyers ("Customers") with caravan manufacturers and dealers ("Dealers").
                                </p>
                                <p className="text-zinc-300 leading-relaxed font-bold">
                                    We are NOT a caravan manufacturer, dealer, or financial institution.
                                </p>
                                <p className="text-zinc-300 leading-relaxed mt-4">
                                    We do not manufacture, sell, or inspect the caravans listed or quoted on this platform. Any agreement, contract, or transaction entered into is strictly between the Customer and the Dealer. Caravan Match is not a party to these agreements.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Do Your Own Research */}
                    <section className="bg-surface/50 border border-yellow-500/20 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-[50px] pointer-events-none" />
                        <div className="flex items-start gap-4 unique-z-10">
                            <span className="text-4xl">🕵️</span>
                            <div>
                                <h2 className="text-2xl font-bold text-yellow-500 mb-4">2. Do Your Own Research (DYOR)</h2>
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    The inclusion of a Dealer on this platform does not constitute an endorsement or guarantee of their financial stability, build quality, or business practices.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                                    <li><strong>Verify the Dealer:</strong> independently check their reviews, ABN, and reputation.</li>
                                    <li><strong>Inspect In Person:</strong> We strongly recommend physically inspecting a Dealer's premises and stock before paying any money.</li>
                                    <li><strong>Seek Professional Advice:</strong> Consider seeking independent legal or financial advice before signing contracts.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. Financial Risk & Indemnity */}
                    <section className="bg-surface/50 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px] pointer-events-none" />
                        <div className="flex items-start gap-4 unique-z-10">
                            <span className="text-4xl">⚠️</span>
                            <div>
                                <h2 className="text-2xl font-bold text-red-500 mb-4">3. Financial Risk & Indemnification</h2>
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    <strong>Deposits are at your own risk.</strong> Caravan Match is not responsible for any deposits, milestone payments, or final balances paid to Dealers.
                                </p>
                                <p className="text-zinc-300 leading-relaxed mb-4">
                                    By using this platform, you agree to <strong>indemnify and hold harmless</strong> Caravan Match, its directors, employees, and affiliates from any claims, damages, losses, or liabilities arising from:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                                    <li>Dealer insolvency or bankruptcy.</li>
                                    <li>Failure of a Dealer to deliver goods or services.</li>
                                    <li>Defects, warranty issues, or disputes regarding the caravan.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Used Caravans Safety Warning */}
                    <section className="bg-surface/50 border border-orange-500/20 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[50px] pointer-events-none" />
                        <div className="flex items-start gap-4 unique-z-10">
                            <span className="text-4xl">🛑</span>
                            <div>
                                <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Buying Used Caravans (Safety Warning)</h2>
                                <p className="text-zinc-300 leading-relaxed mb-4 font-bold">
                                    Specific Warnings for the Used Caravan Marketplace:
                                </p>
                                <ul className="list-disc pl-5 space-y-3 text-zinc-300">
                                    <li>
                                        <strong className="text-white">NEVER Send Money via Bank Transfer</strong> until you have physically inspected the caravan and verified the seller's identity.
                                    </li>
                                    <li>
                                        <strong className="text-white">Beware of Scams:</strong> If a deal looks too good to be true, it probably is. Be cautious of sellers who claim to be "overseas" or working on "oil rigs" and cannot show the van.
                                    </li>
                                    <li>
                                        <strong className="text-white">Do Your Research:</strong> Check the PPSR (Personal Property Securities Register) to ensure the caravan is not stolen or under finance.
                                    </li>
                                    <li>
                                        <strong className="text-white">Inspect In Person:</strong> All ways see the van in person before purchase. We do not inspect private listings.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer Acknowledgement */}
                <div className="text-center text-muted text-sm pt-8 border-t border-white/5">
                    <p>By continuing to use Caravan Match, you acknowledge that you have read and understood these disclosures.</p>
                </div>

            </div>
        </div>
    );
}
