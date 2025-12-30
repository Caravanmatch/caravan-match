const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const tender = await prisma.tender.findFirst({
        orderBy: { createdAt: 'desc' }
    });
    console.log('LATEST_TENDER_ID:', tender?.id);

    if (tender) {
        const client = await prisma.client.upsert({
            where: { email: 'customer@demo.com' },
            update: {},
            create: {
                email: 'customer@demo.com',
                password: 'password123',
                name: 'Demo Customer',
                tenderCount: 0
            }
        });

        await prisma.tender.update({
            where: { id: tender.id },
            data: { clientId: client.id }
        });
        console.log('LINKED_TO_CLIENT:', client.email);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
