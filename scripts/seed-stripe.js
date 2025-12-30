const Stripe = require('stripe');

// Initialize Stripe with the Secret Key from env or argument
// We will rely on manual execution: node scripts/seed-stripe.js <SECRET_KEY>
const secretKey = process.argv[2];
if (!secretKey) {
    console.error("Please provide the STRIPE_SECRET_KEY as the first argument.");
    process.exit(1);
}

const stripe = new Stripe(secretKey);

const TIERS = [
    { name: 'Dealer Starter', amount: 3499, interval: 'month' }, // $34.99
    { name: 'Dealer Growth', amount: 4999, interval: 'month' },  // $49.99
    { name: 'Dealer Pro', amount: 6999, interval: 'month' },     // $69.99
    { name: 'Dealer Unlimited', amount: 8999, interval: 'month' }// $89.99
];

async function seed() {
    console.log("🌱 Seeding Stripe Products...");

    // 1. Create Coupon (50% Off for 6 months)
    try {
        const coupon = await stripe.coupons.create({
            duration: 'repeating',
            duration_in_months: 6,
            percent_off: 50,
            name: '50% Off First 6 Months',
            id: '50OFF' // Explicit ID
        });
        console.log("✅ Created Coupon: 50OFF");
    } catch (e) {
        if (e.code === 'resource_already_exists') {
            console.log("ℹ️  Coupon 50OFF already exists.");
        } else {
            console.error("❌ Coupon Error:", e.message);
        }
    }

    // 2. Create Dealer Tiers
    const priceMap = {};
    for (const tier of TIERS) {
        // Check if product exists roughly by name to avoid duplicates (simplified: just creating new for now users validation)
        // For this script, we'll creates new products to ensure clean slate or just log.
        const product = await stripe.products.create({
            name: tier.name,
            description: 'Monthly Subscription'
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: tier.amount,
            currency: 'aud',
            recurring: { interval: tier.interval },
        });

        console.log(`✅ Created ${tier.name}: ${price.id}`);
        priceMap[tier.name.toUpperCase().replace(' ', '_')] = price.id;
    }

    // 3. Create Private Seller Product ($70 One Time)
    const adProduct = await stripe.products.create({
        name: 'Standard Private Ad (3 Months)',
        description: 'Listing fee for selling a caravan.'
    });
    const adPrice = await stripe.prices.create({
        product: adProduct.id,
        unit_amount: 7000, // $70.00
        currency: 'aud',
    });
    console.log(`✅ Created Private Ad: ${adPrice.id}`);
    priceMap['PRIVATE_AD'] = adPrice.id;

    console.log("\nCopy these IDs into locally and Vercel Environment:");
    console.log(JSON.stringify(priceMap, null, 2));
}

seed();
