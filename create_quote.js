const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Get Dealer
    const dealer = await prisma.dealer.findUnique({ where: { email: 'admin@caravanmatch.com.au' } });

    // 2. Get Tender
    const tender = await prisma.tender.findFirst({ orderBy: { createdAt: 'desc' } });

    console.log('DEALER:', dealer?.id);
    console.log('TENDER:', tender?.id);

    if (dealer && tender) {
        // 3. Create Quote
        const quote = await prisma.quote.create({
            data: {
                dealerId: dealer.id,
                tenderId: tender.id,
                price: '87000',
                description: 'Script generated quote for E2E testing.',
                status: 'PENDING'
            }
        });
        console.log('QUOTE_CREATED:', quote.id);

        // 4. Update Tender Status
        await prisma.tender.update({
            where: { id: tender.id },
            data: { status: 'IN_PROGRESS' }
        });
        console.log('TENDER_STATUS_UPDATED');
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
