
import { sendEmail } from '../lib/email';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    console.log("Testing Email Delivery...");
    console.log("API Key present:", !!process.env.RESEND_API_KEY);

    if (process.env.RESEND_API_KEY) {
        console.log("API Key start:", process.env.RESEND_API_KEY.substring(0, 5) + "...");
    }

    const result = await sendEmail({
        to: 'benwilson912@gmail.com', // Target the user's email
        subject: 'MANUAL TEST: Caravan Match Email System',
        html: '<h1>If you are reading this, the email system works!</h1><p>This is a direct test from the backend script.</p>'
    });

    console.log("Send Result:", JSON.stringify(result, null, 2));
}

main().catch(console.error);
