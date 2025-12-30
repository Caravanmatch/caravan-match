import { Resend } from 'resend';

export const sendEmail = async ({
    to,
    subject,
    html
}: {
    to: string;
    subject: string;
    html: string;
}) => {
    if (!process.env.RESEND_API_KEY) {
        console.log("⚠️ EMAIL SIMULATION (No API Key) ⚠️");
        // ... logs
        return { success: true, simulated: true };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const response = await resend.emails.send({
            from: 'Caravan Match <notifications@caravanmatch.com.au>',
            to,
            subject,
            html,
        });

        if (response.error) {
            console.error("Resend API Error:", response.error);
            return { success: false, error: response.error };
        }

        return { success: true, data: response.data };
    } catch (error) {
        console.error("Email Failed:", error);
        return { success: false, error };
    }
};


const emailFooter = `
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; font-family: sans-serif;">
        <p style="margin-bottom: 10px;">
            <strong style="color: #eab308;">CARAVAN MATCH</strong><br/>
            Connect. Build. Adventure.
        </p>
        <p>
            <a href="https://caravanmatch.com.au" style="color: #666; text-decoration: none;">Website</a> | 
            <a href="https://caravanmatch.com.au/login" style="color: #666; text-decoration: none;">Login</a> | 
            <a href="https://caravanmatch.com.au/contact" style="color: #666; text-decoration: none;">Contact</a>
        </p>
        <p style="color: #999;">
            © ${new Date().getFullYear()} Caravan Match. All rights reserved.<br/>
            Running on Australian Soil. 🇦🇺
        </p>
    </div>
`;

export const EmailTemplates = {
    newTenderAdmin: (tenderId: string, name: string, location: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
        <h2>🚀 New Tender Launched!</h2>
        <p>A new caravan build request has been submitted.</p>
        <ul>
            <li><strong>Customer:</strong> ${name}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Tender ID:</strong> ${tenderId}</li>
        </ul>
        <br/>
        <a href="https://caravan-match.com.au/admin/tenders" style="background: #eab308; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Tender</a>
        ${emailFooter}
    </div>
    `,
    newQuoteCustomer: (tenderId: string, dealerName: string, price: number) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
        <h2>Someone wants to build your van! 🚐</h2>
        <p>You have received a new quote from <strong>${dealerName}</strong>.</p>
        <p style="font-size: 1.2em; font-weight: bold;">Est. Price: $${price.toLocaleString()}</p>
        <br/>
        <p>Log in to your dashboard to view the full details and chat with the dealer.</p>
        <br/>
        <a href="https://caravan-match.com.au/login" style="background: #eab308; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Quote</a>
        ${emailFooter}
    </div>
    `,
    welcomeDealer: (name: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">Welcome to Caravan Match! 🚐</h2>
        <p>Hi ${name},</p>
        <p>Thanks for joining the network. You are now set up on our <strong>Early Bird Program</strong>.</p>
        
        <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top:0;">Your Plan:</h3>
            <ul style="padding-left: 20px;">
                <li>✅ <strong>First 30 Days:</strong> 100% FREE (Trial)</li>
                <li>✅ <strong>Next 6 Months:</strong> 50% OFF (Discount Locked In)</li>
                <li>✅ <strong>After 7 Months:</strong> Standard Rate applies</li>
            </ul>
        </div>

        <p>You can start quoting on leads immediately.</p>
        <br/>
        <a href="https://caravan-match.com.au/dealer/dashboard" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Go to Dealer Portal</a>
        ${emailFooter}
    </div>
    `,
    welcomeCustomer: (name: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">Your Dream Build is Live! 🚀</h2>
        <p>Hi ${name},</p>
        <p>Congratulations! Your caravan tender has been successfully launched to our network of premium manufacturers.</p>
        
        <h3>What happens next?</h3>
        <p>Dealers will review your specifications and send you custom quotes. You will be notified via email when a new quote arrives.</p>

        <p>You can track all your builds and quotes in your dashboard.</p>
        <br/>
        <a href="https://caravan-match.com.au/client/dashboard" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Go to My Dashboard</a>
        ${emailFooter}
    </div>
    `,
    listingApproved: (name: string, listingId: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">Ad Live! 🚐</h2>
        <p>Hi ${name},</p>
        <p>Your ad has been approved and is now live on the marketplace.</p>
        <br/>
        <a href="https://caravan-match.com.au/used-caravans/${listingId}" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">View Your Ad</a>
        ${emailFooter}
    </div>
    `,
    feedbackReceived: (name: string, email: string, comment: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">New Feedback Recieved 📝</h2>
        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="white-space: pre-wrap;">${comment}</p>
        </div>
        ${emailFooter}
    </div>
    `,
    newLeadAlert: (dealersName: string, tenderId: string, location: string, type: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">New Lead Alert! 🔥</h2>
        <p>Hi ${dealersName},</p>
        <p>A new customer in <strong>${location}</strong> is looking for a <strong>${type}</strong>.</p>
        
        <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Lead ID:</strong> ${tenderId}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Type:</strong> ${type}</p>
        </div>

        <p>Be the first to quote and win the deal.</p>
        <br/>
        <a href="https://caravan-match.com.au/dealer/dashboard" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">View Lead & Quote</a>
        ${emailFooter}
    </div>
    `,
    newEnquiry: (sellerName: string, buyerName: string, buyerEmail: string, buyerPhone: string, message: string, vanTitle: string, listingId: string) => `
    <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
        <h2 style="color: #eab308;">New Enquiry! 🚐</h2>
        <p>Hi ${sellerName},</p>
        <p>Good news! <strong>${buyerName}</strong> is interested in your <strong>${vanTitle}</strong>.</p>
        
        <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; font-style: italic;">"${message}"</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;" />
            <p><strong>Contact Details:</strong></p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:${buyerEmail}">${buyerEmail}</a></li>
                <li><strong>Phone:</strong> ${buyerPhone || 'Not provided'}</li>
            </ul>
        </div>

        <p>You can reply directly to this email to contact the buyer.</p>
        <br/>
        <a href="https://caravanmatch.com.au/used-caravans/${listingId}" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">View Your Ad</a>
        ${emailFooter}
    </div>
    `
};
