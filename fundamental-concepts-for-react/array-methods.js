let products = [
    { name: "lptop", price: 32000, brand: "lenovo", color: "silver" },
    { name: "phone", price: 22000, brand: "samsung", color: "Golden" },
    { name: "watch", price: 3000, brand: "casio", color: "yellow" },
    { name: "sunglass", price: 300, brand: "ribon", color: "black" },
    { name: "camera", price: 900, brand: "canon", color: "gray" },
];

let names = products.map(p => p.name);

let brands = products.map(b => b.brand);
console.log(names);
console.log(brands);

products.forEach(function (product) {
    console.log(product.name);
})

names.forEach(function (name) {
    console.log(name);
})

brands.forEach(brand => {
    console.log(`last of:  +  ${brand}`)
})



