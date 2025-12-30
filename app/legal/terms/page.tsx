import React from 'react';

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto pt-36 pb-20 px-6 text-foreground">
            <h1 className="text-4xl font-bold mb-8 font-heading">Terms of Service</h1>
            <p className="text-muted mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-neutral-300">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">1. Introduction</h2>
                    <p>Welcome to Caravan Match. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Caravan Match's website for personal, non-commercial transitory viewing only.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">3. Disclaimer</h2>
                    <p>The materials on Caravan Match's website are provided on an 'as is' basis. Caravan Match makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">4. Limitations</h2>
                    <p>In no event shall Caravan Match or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Caravan Match's website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-2">5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </section>
            </div>
        </div>
    );
}
