const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const enquiries = await prisma.enquiry.findMany();
    console.log('Enquiries found:', enquiries.length);
    enquiries.forEach(e => {
        console.log(` - From: ${e.email} (Status: ${e.status})`);
    });
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
