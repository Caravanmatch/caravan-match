import React from 'react';

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto pt-36 pb-20 px-6 text-foreground">
            <h1 className="text-4xl font-bold mb-8 font-heading">Terms of Service</h1>
            <p className="text-muted mb-8">Last Updated: 14 January 2026</p>

            <div className="space-y-8 text-neutral-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                    <p className="mb-3">
                        By accessing or using CaravanMatch ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform.
                    </p>
                    <p>
                        These Terms constitute a legally binding agreement between you and CaravanMatch (ABN: [To Be Added]), an Australian-registered business.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                    <p className="mb-3">
                        CaravanMatch is a <strong>marketplace platform only</strong>. We provide:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Tender Matching:</strong> Connect buyers with caravan dealers based on specifications</li>
                        <li><strong>Marketplace:</strong> List and browse used caravans for sale</li>
                        <li><strong>Tools:</strong> Caravan builder, towing calculator, and resources</li>
                    </ul>
                    <p className="mt-3 font-semibold text-white">
                        IMPORTANT: We do NOT manufacture, sell, endorse, or warranty any caravans. We are a platform connecting buyers and sellers.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">3.1 Registration</h3>
                    <p className="mb-3">You must provide accurate, current, and complete information during registration. You are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Maintaining the confidentiality of your password</li>
                        <li>All activities that occur under your account</li>
                        <li>Notifying us immediately of unauthorized access</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">3.2 Account Types</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Buyers:</strong> Submit tenders, browse marketplace</li>
                        <li><strong>Dealers:</strong> Receive tenders, submit quotes (subscription required)</li>
                        <li><strong>Private Sellers:</strong> List used caravans (listing fee applies)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. User Obligations</h2>
                    <p className="mb-3">You agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide accurate and truthful information</li>
                        <li>Not use the Platform for illegal or fraudulent purposes</li>
                        <li>Not impersonate others or misrepresent your affiliation</li>
                        <li>Not spam, harass, or abuse other users</li>
                        <li>Not scrape, data mine, or use automated tools without permission</li>
                        <li>Comply with all applicable Australian laws and regulations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Dealer Obligations</h2>
                    <p className="mb-3">Dealers using the Platform agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide accurate, competitive quotes in good faith</li>
                        <li>Honor quoted prices or clearly explain changes</li>
                        <li>Maintain valid Australian Business Number (ABN) and relevant licenses</li>
                        <li>Respond to tenders within reasonable timeframes</li>
                        <li>Maintain active subscription to access tender pool</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Payments and Subscriptions</h2>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">6.1 Dealer Subscriptions</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Subscriptions are billed monthly or annually via Stripe</li>
                        <li>Prices are displayed in AUD and exclude GST (if applicable)</li>
                        <li>Subscriptions auto-renew unless canceled</li>
                        <li>You can cancel anytime via your dashboard (no refunds for partial months)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">6.2 Marketplace Listings</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Private sellers pay $70 for 3 months, then $15/month</li>
                        <li>Dealers with active subscriptions list for free</li>
                        <li>Promo codes may apply (e.g., NOTGREY for free 3-month trial)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">6.3 Refund Policy</h3>
                    <p>
                        Subscriptions and listing fees are non-refundable except as required by Australian Consumer Law. If you believe you are entitled to a refund, contact us at <a href="mailto:support@caravanmatch.com.au" className="text-primary hover:underline">support@caravanmatch.com.au</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>

                    <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-6 my-4">
                        <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ CRITICAL DISCLAIMER</h3>
                        <p className="mb-3 font-semibold text-white">
                            CaravanMatch is a MARKETPLACE PLATFORM ONLY. We are NOT:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A caravan manufacturer or dealer</li>
                            <li>A financial advisor or lender</li>
                            <li>A towing safety expert or engineer</li>
                            <li>Responsible for dealer quality, pricing, or conduct</li>
                            <li>Responsible for caravan safety, compliance, or roadworthiness</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">7.1 No Warranty</h3>
                    <p className="mb-3">
                        The Platform is provided "AS IS" without warranties of any kind. We do not guarantee:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Accuracy of dealer quotes or listings</li>
                        <li>Quality, safety, or compliance of any caravan</li>
                        <li>That you will receive quotes or find a suitable caravan</li>
                        <li>Uninterrupted or error-free service</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">7.2 User Responsibility</h3>
                    <p className="mb-3 font-semibold text-white">
                        YOU ARE SOLELY RESPONSIBLE FOR:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Verifying all caravan specifications, weights, and dimensions with dealers</li>
                        <li>Ensuring your tow vehicle is legally compliant (GVM, GCM, ATM, etc.)</li>
                        <li>Conducting independent inspections before purchase</li>
                        <li>Obtaining professional advice on towing capacity and safety</li>
                        <li>Compliance with all road rules and regulations</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">7.3 Limitation of Damages</h3>
                    <p>
                        To the maximum extent permitted by Australian law, CaravanMatch shall NOT be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                        <li>Loss of profits, revenue, or business</li>
                        <li>Property damage or personal injury</li>
                        <li>Towing accidents or vehicle damage</li>
                        <li>Dealer fraud, misrepresentation, or non-performance</li>
                    </ul>
                    <p className="mt-3">
                        Our total liability for any claim shall not exceed the amount you paid to CaravanMatch in the 12 months prior to the claim.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                    <p className="mb-3">
                        All content on the Platform (text, graphics, logos, code) is owned by CaravanMatch or licensed to us. You may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Copy, modify, or distribute our content without permission</li>
                        <li>Use our trademarks or branding without authorization</li>
                        <li>Reverse engineer or decompile the Platform</li>
                    </ul>
                    <p className="mt-3">
                        User-generated content (listings, photos) remains your property, but you grant us a license to display and distribute it on the Platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                    <p className="mb-3">
                        We may suspend or terminate your account at any time for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Violation of these Terms</li>
                        <li>Fraudulent or illegal activity</li>
                        <li>Non-payment of fees</li>
                        <li>Abuse of the Platform or other users</li>
                    </ul>
                    <p className="mt-3">
                        You may cancel your account at any time via your dashboard. Upon termination, your access to the Platform will cease, but these Terms will continue to apply to past use.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
                    <p className="mb-3">
                        If you have a complaint, please contact us at <a href="mailto:support@caravanmatch.com.au" className="text-primary hover:underline">support@caravanmatch.com.au</a>. We will attempt to resolve disputes informally.
                    </p>
                    <p>
                        If informal resolution fails, disputes shall be resolved through mediation or arbitration in accordance with Australian law before resorting to litigation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                    <p>
                        These Terms are governed by the laws of New South Wales, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of New South Wales.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">12. Australian Consumer Law</h2>
                    <p>
                        Nothing in these Terms excludes, restricts, or modifies any consumer rights under the Australian Consumer Law (ACL) or other applicable laws that cannot be excluded, restricted, or modified by agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
                    <p>
                        We may update these Terms from time to time. We will notify you of material changes by email or prominent notice on the Platform. Continued use after changes constitutes acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                    <p className="mb-3">
                        If you have questions about these Terms, contact us:
                    </p>
                    <ul className="list-none space-y-2">
                        <li><strong>Email:</strong> <a href="mailto:support@caravanmatch.com.au" className="text-primary hover:underline">support@caravanmatch.com.au</a></li>
                        <li><strong>Website:</strong> <a href="https://caravanmatch.com.au" className="text-primary hover:underline">caravanmatch.com.au</a></li>
                    </ul>
                </section>

                <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-sm text-muted">
                        By using CaravanMatch, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
}
