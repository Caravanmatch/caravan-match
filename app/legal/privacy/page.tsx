import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto pt-36 pb-20 px-6 text-foreground">
            <h1 className="text-4xl font-bold mb-8 font-heading">Privacy Policy</h1>
            <p className="text-muted mb-8">Last Updated: 14 January 2026</p>

            <div className="space-y-8 text-neutral-300 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p className="mb-3">
                        CaravanMatch ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at caravanmatch.com.au.
                    </p>
                    <p>
                        This policy complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">2.1 Information You Provide</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Account Information:</strong> Name, email address, phone number, location</li>
                        <li><strong>Tender Details:</strong> Caravan specifications, towing vehicle details, budget, preferences</li>
                        <li><strong>Marketplace Listings:</strong> Caravan details, photos, pricing, contact information</li>
                        <li><strong>Payment Information:</strong> Processed securely by Stripe (we do not store credit card details)</li>
                        <li><strong>Communications:</strong> Messages, feedback, support requests</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">2.2 Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Usage Data:</strong> Pages visited, features used, time spent on site</li>
                        <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                        <li><strong>Cookies:</strong> We use cookies for analytics (PostHog, Meta Pixel) and site functionality</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Tender Matching:</strong> Connect buyers with dealers based on specifications</li>
                        <li><strong>Marketplace:</strong> Display listings and facilitate buyer-seller communication</li>
                        <li><strong>Payment Processing:</strong> Process subscriptions and listing fees via Stripe</li>
                        <li><strong>Communications:</strong> Send quotes, notifications, and service updates</li>
                        <li><strong>Platform Improvement:</strong> Analyze usage to improve features and user experience</li>
                        <li><strong>Legal Compliance:</strong> Comply with Australian laws and regulations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.1 With Dealers</h3>
                    <p className="mb-3">
                        When you submit a tender, we share your specifications and contact details with selected dealers so they can provide quotes. Your information is shared anonymously until you choose to reveal your identity.
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.2 With Service Providers</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Stripe:</strong> Payment processing (subject to Stripe's Privacy Policy)</li>
                        <li><strong>Vercel:</strong> Website hosting and infrastructure</li>
                        <li><strong>Supabase:</strong> Database and authentication services</li>
                        <li><strong>Resend:</strong> Email delivery services</li>
                        <li><strong>PostHog / Meta:</strong> Analytics and advertising</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.3 Legal Requirements</h3>
                    <p>
                        We may disclose your information if required by law, court order, or to protect our rights, property, or safety.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                    <p className="mb-3">
                        We implement industry-standard security measures to protect your information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Encrypted data transmission (HTTPS/SSL)</li>
                        <li>Secure database storage with access controls</li>
                        <li>Regular security audits and updates</li>
                        <li>Payment data handled exclusively by PCI-compliant Stripe</li>
                    </ul>
                    <p className="mt-3">
                        However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights (Australian Privacy Principles)</h2>
                    <p className="mb-3">Under Australian law, you have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Access:</strong> Request a copy of your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                        <li><strong>Deletion:</strong> Request deletion of your account and data (subject to legal retention requirements)</li>
                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails (account notifications may still be sent)</li>
                        <li><strong>Complain:</strong> Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
                    </ul>
                    <p className="mt-3">
                        To exercise these rights, contact us at <a href="mailto:privacy@caravanmatch.com.au" className="text-primary hover:underline">privacy@caravanmatch.com.au</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                    <p className="mb-3">
                        We use cookies and similar technologies for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for login and site functionality</li>
                        <li><strong>Analytics Cookies:</strong> PostHog tracks usage to improve the platform</li>
                        <li><strong>Advertising Cookies:</strong> Meta Pixel for targeted advertising</li>
                    </ul>
                    <p className="mt-3">
                        You can disable cookies in your browser settings, but some features may not function properly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                    <p>
                        We retain your information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for legal, tax, or fraud prevention purposes for up to 7 years as required by Australian law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                    <p>
                        CaravanMatch is not intended for users under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of significant changes by email or prominent notice on our website. Continued use of the platform after changes constitutes acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                    <p className="mb-3">
                        If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
                    </p>
                    <ul className="list-none space-y-2">
                        <li><strong>Email:</strong> <a href="mailto:privacy@caravanmatch.com.au" className="text-primary hover:underline">privacy@caravanmatch.com.au</a></li>
                        <li><strong>Website:</strong> <a href="https://caravanmatch.com.au" className="text-primary hover:underline">caravanmatch.com.au</a></li>
                    </ul>
                    <p className="mt-4 text-sm text-muted">
                        If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
