import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6 text-foreground">
            <h1 className="text-4xl font-bold mb-8 font-heading">Privacy Policy</h1>
            <p className="text-muted mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-neutral-300">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">2. How We Use Your Information</h2>
                    <p>We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to protect our users.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">3. Sharing of Information</h2>
                    <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">4. Data Security</h2>
                    <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at support@caravanmatch.com.au.</p>
                </section>
            </div>
        </div>
    );
}
