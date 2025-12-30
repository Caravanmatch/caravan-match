const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.dealer.update({
        where: { email: 'admin@caravanmatch.com.au' },
        data: {
            phone: "0400 123 456",
            website: "www.premiumcaravans.com.au",
            location: "Melbourne, VIC",
            company: "Premium Caravans"
        }
    });
    console.log('UPDATED_DEALER_CONTACT');
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
