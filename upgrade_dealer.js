const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.dealer.update({
        where: { email: 'admin@caravanmatch.com.au' },
        data: { subscriptionTier: 'PRO' }
    });
    console.log('UPGRADED_DEALER_TO_PRO');
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
