
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Cleaning all populated listings...');
    try {
        const deleted = await prisma.usedCaravan.deleteMany({});
        console.log(`Deleted ${deleted.count} listings.`);
    } catch (error) {
        console.error('Error cleaning listings:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
