const url = 'https://caravan-match-mjnhky7qp-bens-projects-8c0e2de5.vercel.app/api/listings';
const data = {
    category: 'Caravan',
    make: 'Jayco',
    year: '2022',
    model: 'Journey',
    length: '20',
    sleeps: '2',
    price: '55000',
    description: 'Test from CLI agent',
    firstName: 'Agent',
    lastName: 'Smith',
    email: 'agent@test.com', // matching logic
    phone: '0400000000',
    location: 'Melbourne'
};

console.log("Testing POST to:", url);

// Node 18+ has fetch
fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(async res => {
        console.log("Status:", res.status);
        const text = await res.text();
        console.log("Response:", text);
    })
    .catch(err => console.error("Fetch Error:", err));
