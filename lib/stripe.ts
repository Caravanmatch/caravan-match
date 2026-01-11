import Stripe from 'stripe';

// Check if key exists to prevent crash during build/test
const apiKey = (process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder').trim();

export const stripe = new Stripe(apiKey, {
    apiVersion: '2025-11-17.clover', // Ensure this matches your installed version or use '2023-10-16'
    typescript: true,
});

export const STRIPE_PRICES = {
    DEALER_STARTER: 'price_1SoOViLVcRkh5L2w9OIeE6NR', // Starter ($134.99)
    DEALER_GROWTH: 'price_1SoOWOLVcRkh5L2wayx7yYlZ', // Growth ($149.99)
    DEALER_PRO: 'price_1SoOYzLVcRkh5L2wimsqi0NB',    // Unlimited ($209.98) - Note: Variable name is PRO but UI says Unlimited
    DEALER_UNLIMITED: 'price_1SoOYzLVcRkh5L2wimsqi0NB', // Keeping both keys mapped to same ID to be safe if code uses different ones
    MARKET_INTEL: 'price_1QVTmpGSCqjX1I8kP0K4hXvR',
    // Sell Your Van (Free 30 days, then $15/mo)
    PRIVATE_AD_RECURRING: 'price_1SoOeLLVcRkh5L2wF0lUPI5u' // Recurring $15/mo
};
