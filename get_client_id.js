const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const client = await prisma.client.findUnique({ where: { email: 'customer@demo.com' } });
    console.log('CLIENT_ID:', client?.id);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
