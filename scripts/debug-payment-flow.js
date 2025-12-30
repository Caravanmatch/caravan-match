const BASE_URL = 'https://caravan-match-mh002uc3g-bens-projects-8c0e2de5.vercel.app';

async function testFlow() {
    console.log("🚀 Starting Production Flow Test...");

    // 1. Create Listing
    console.log("\n1️⃣ Creating Test Listing...");
    const listingRes = await fetch(`${BASE_URL}/api/listings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            category: 'Caravan',
            make: 'Jayco',
            year: '2023',
            price: '50000',
            email: 'debug_agent@test.com',
            firstName: 'Debug',
            lastName: 'Agent'
        })
    });

    if (!listingRes.ok) {
        console.error("❌ Listing Creation Failed:", await listingRes.text());
        return;
    }

    const listingData = await listingRes.json();
    const listingId = listingData.id;
    console.log("✅ Listing Created! ID:", listingId);

    // 2. Initiate Payment
    console.log(`\n2️⃣ Initiating Payment for Listing ${listingId}...`);
    const paymentRes = await fetch(`${BASE_URL}/api/stripe/checkout-ad`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId })
    });

    const paymentText = await paymentRes.text();
    console.log("Response Status:", paymentRes.status);
    console.log("Raw Response:", paymentText);

    try {
        const paymentData = JSON.parse(paymentText);
        if (paymentData.url) {
            console.log("✅ SUCCESS! Checkout URL generated:", paymentData.url);
        } else {
            console.error("❌ FAILURE! Error:", paymentData);
        }
    } catch (e) {
        console.error("❌ Failed to parse JSON response.");
    }
}

testFlow();
