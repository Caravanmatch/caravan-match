const url = 'http://localhost:3000/api/listings';
const data = {
    category: 'Caravan',
    make: 'Jayco',
    year: '2022',
    model: 'Journey',
    length: '20',
    sleeps: '2',
    price: '55000',
    description: 'Test from Local Script',
    firstName: 'Agent',
    lastName: 'Smith',
    email: 'agent@test.com',
    phone: '0400000000',
    location: 'Melbourne'
};

console.log("Testing POST to:", url);

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
