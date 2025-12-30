import Stripe from 'stripe';

// Check if key exists to prevent crash during build/test
const apiKey = (process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder').trim();

export const stripe = new Stripe(apiKey, {
    apiVersion: '2025-11-17.clover', // Ensure this matches your installed version or use '2023-10-16'
    typescript: true,
});

export const STRIPE_PRICES = {
    DEALER_STARTER: 'price_1QVTm8GSCqjX1I8kP0K4hXvR', // Replace with real ID
    DEALER_GROWTH: 'price_1QVTmkGSCqjX1I8kH0e1Qe1R', // Replace with real ID
    DEALER_PRO: 'price_1QVTnDGSCqjX1I8kP0K4hXvR',    // Replace with real ID
    DEALER_UNLIMITED: 'price_1QVTngGSCqjX1I8kP0K4hXvR', // Replace with real ID
    MARKET_INTEL: 'price_1QVTmpGSCqjX1I8kP0K4hXvR',
    // Sell Your Van (Free 30 days, then $15/mo)
    PRIVATE_AD_RECURRING: 'price_1SgCqrLIY6h6o0gw5LqjByEv' // Recurring $15/mo
};
