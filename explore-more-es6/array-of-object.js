let products = [
    { id: 1, name: "lenovo laptop", price: 50000 },
    { id: 2, name: "hp laptop", price: 60000 },
    { id: 3, name: "walton laptop", price: 40000 },
    { id: 4, name: "asus laptop", price: 55000 },
    { id: 1, name: "macbook", price: 150000 }
]
// map 
/* let names = products.map(product => product.name);
console.log(names); */

// foreach
/* products.forEach(product => console.log(product.id)); */

// filter 
/* let product = products.filter(product => product.price < 50000); */

// find 
let product = products.find(product => product.price > 50000);

// reduce 
let total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);




