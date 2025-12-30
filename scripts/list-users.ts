import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const dealers = await prisma.dealer.findMany()
    const clients = await prisma.client.findMany()

    console.log("Dealers found:", dealers.length)
    dealers.forEach(d => console.log(` - Dealer: ${d.email}`))

    console.log("Clients found:", clients.length)
    clients.forEach(c => console.log(` - Client: ${c.email}`))
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
