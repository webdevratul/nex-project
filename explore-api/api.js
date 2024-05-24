let user = { id: 1, name: "Anisul Islam", job: "Programmer" };
console.log(user);

// json stringify data take string a convert kore fale :)
let stringified = JSON.stringify(user);
console.log(stringified);

let shop = {
    owner: "Alia",
    address: {
        street: "india bnaglo",
        city: "Ranbir",
        country: "varot",
    },
    products: ["laptop", "mac", "Monitor", "keyboard"],
    revenue: 45000,
    inOpen: true,
    isNew: false
}
console.log(shop);

let shoJson = JSON.stringify(shop);
console.log(shoJson);
let shopObject = JSON.parse(shoJson);
console.log(shopObject);
