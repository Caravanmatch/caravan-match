const url = 'https://caravan-match-mh002uc3g-bens-projects-8c0e2de5.vercel.app/api/admin/diagnostics';

console.log("Checking Diagnostics at:", url);

fetch(url)
    .then(async res => {
        console.log("Status:", res.status);
        if (res.ok) {
            const data = await res.json();
            console.log("DIAGNOSTICS REPORT:");
            console.log(JSON.stringify(data, null, 2));
        } else {
            console.log("Error:", await res.text());
        }
    })
    .catch(err => console.error("Fetch Error:", err));
