let glass = {
    name: "Glass",
    color: "golden",
    price: 12,
    inCleaned: true
}

// for in loop
/* for (keys in glass) {
    let values = glass[keys]
    console.log(keys, values);
} */

// not optional .. aikahne object theke only key gulake niye array create kore setar upore for of loop use kora hoyeche :)
let keys = Object.keys(glass);
// console.log(keys);
for (let key of keys) {
    let value = glass[key];
    console.log(key, value);
}



