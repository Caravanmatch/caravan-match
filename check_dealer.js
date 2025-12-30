const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const dealers = await prisma.dealer.findMany();
    console.log('DEALER_INFO:', dealers.map(d => ({
        email: d.email,
        password: d.password,
        tier: d.subscriptionTier
    })));
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
