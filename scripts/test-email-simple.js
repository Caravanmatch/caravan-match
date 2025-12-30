const { Resend } = require('resend');

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    console.error("❌ NO RESEND_API_KEY FOUND!");
    process.exit(1);
}

const resend = new Resend(apiKey);

(async () => {
    try {
        console.log("Attempting to send email...");
        const data = await resend.emails.send({
            from: 'Caravan Match <notifications@caravanmatch.com.au>',
            to: 'ben@caravanmatch.com.au', // Test sending to self (or admin)
            subject: 'Test Email Verification',
            html: '<strong>It works!</strong>',
        });
        console.log("✅ Email Sent Successfully:", data);
    } catch (error) {
        console.error("❌ Email Failed:", error);
    }
})();
