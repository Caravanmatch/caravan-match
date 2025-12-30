const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CARAVAN_MAKES = ['Jayco', 'New Age', 'Concept', 'Lotus', 'Kedron', 'Supreme', 'Crusader', 'Retreat', 'Leader', 'JB Caravans'];
const LOCATIONS = ['Melbourne, VIC', 'Sydney, NSW', 'Brisbane, QLD', 'Adelaide, SA', 'Perth, WA', 'Gold Coast, QLD'];
const CONDITIONS = ['Used', 'Used', 'Used', 'New', 'New', 'Demo'];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
    console.log('🌱 Seeding database with massive data...');

    // 1. Create Dealers
    const dealers = [];
    const dealerConfigs = [
        { email: 'admin@caravanmatch.com.au', name: 'Admin Dealer', company: 'Caravan Match HQ', tier: 'UNLIMITED' },
        { email: 'premier@rv.com', name: 'John Smith', company: 'Premier RV Centre', tier: 'GROWTH' },
        { email: 'budget@vans.com', name: 'Mike Jones', company: 'Budget Vans Direct', tier: 'STARTER' },
        { email: 'family@camping.com', name: 'Sarah Wilson', company: 'Family Camping World', tier: 'UNLIMITED' }
    ];

    for (const conf of dealerConfigs) {
        const dealer = await prisma.dealer.upsert({
            where: { email: conf.email },
            update: {},
            create: {
                email: conf.email,
                password: 'password123',
                name: conf.name,
                company: conf.company,
                phone: '0400 000 000', // Added phone
                location: randomItem(LOCATIONS), // Added location
                subscriptionStatus: 'ACTIVE',
                planTier: conf.tier,
                marketIntel: true
            },
        });
        dealers.push(dealer);
        console.log(`Created Dealer: ${dealer.company}`);
    }

    // 2. Create Clients
    const client = await prisma.client.upsert({
        where: { email: 'client@example.com' },
        update: {},
        create: {
            email: 'client@example.com',
            password: 'password123',
            name: 'Test Customer',
            phone: '0400000000',
            location: 'Melbourne, VIC'
        },
    });
    console.log('Created Client:', client.email);

    // 3. Create Used Caravans (Mixed Dealers & Private)
    console.log('generating 40 listings...');
    for (let i = 0; i < 40; i++) {
        const isDealer = Math.random() > 0.2; // 80% Dealer listings
        const dealer = isDealer ? randomItem(dealers) : null;
        const make = randomItem(CARAVAN_MAKES);
        const year = randomInt(2010, 2025);

        await prisma.usedCaravan.create({
            data: {
                make: make,
                model: `${randomItem(['Trax', 'Journey', 'Commander', 'Offroad', 'Tourer'])} ${randomInt(16, 24)}ft`,
                year: year,
                length: randomInt(16, 25),
                sleeps: randomItem(['2', '3', '4', '5', '6+']),
                category: randomItem(['Off-Road', 'Touring', 'Family', 'Toy Hauler']),
                price: randomInt(20000, 120000),
                description: `Beautiful ${year} ${make} caravan. Great condition, ready for adventure. Features include solar, shower/toilet, and large fridge.`,
                location: randomItem(LOCATIONS),
                condition: randomItem(CONDITIONS),
                status: 'APPROVED',
                viewCount: randomInt(0, 500),
                sellerName: isDealer ? dealer.company : 'Private Seller',
                sellerEmail: isDealer ? dealer.email : 'private@gmail.com',
                sellerPhone: '0400 123 456',
                images: JSON.stringify([
                    `https://images.unsplash.com/photo-${randomItem(['1523987355523-c7b5b0dd90a7', '1511919884244-c624e4d2b46d', '1627483292429-1ad147c2ac65'])}?auto=format&fit=crop&q=80&w=800`
                ]),
                dealerId: isDealer ? dealer.id : undefined,
                clientId: !isDealer ? client.id : undefined
            }
        });
    }

    // 4. Create Tenders
    console.log('generating 12 tenders...');
    for (let i = 0; i < 12; i++) {
        const tender = await prisma.tender.create({
            data: {
                client: { connect: { id: client.id } },
                custom_notes: JSON.stringify({ budget: randomInt(40000, 90000).toString() }),
                final_comments: "Looking for a family bunk van with ensuite.",
                type: randomItem(['Buying', 'Selling']),
                status: randomItem(['OPEN', 'OPEN', 'CLOSED']),
                customerName: "Test Client",
                customerEmail: "client@test.com",
                appliances: "[]"
            }
        });

        // Add quotes to some tenders
        if (Math.random() > 0.5) {
            const quoteDealer = randomItem(dealers);
            await prisma.quote.create({
                data: {
                    tenderId: tender.id,
                    dealerId: quoteDealer.id,
                    price: (parseInt(JSON.parse(tender.custom_notes).budget) - randomInt(1000, 5000)).toString(),
                    description: "We have the perfect van for you in stock.",
                    status: 'PENDING'
                }
            });
        }
    }

    console.log('✅ Scaling Complete. Database populated.');
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });
