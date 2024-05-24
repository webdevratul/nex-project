// object destructure
let actor = {
    name: "Sakib Khan",
    age: 30,
    phone: "01729336503",
    money: 6754653475765784
}
// chaile aikhane key change kore use kora possible jmn age er poriborte boys deoa hoyeche..
let { phone, age: boys, name } = actor;
/* console.log(phone);
console.log(boys);
console.log(name); */

// array destructure
let numbers = [12, 13, 14, 15];
let [first, second, third] = numbers;
let [x, y, z] = [12, 13, 14];
/* console.log(first);
console.log(y); */

// function destructure 
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
let [prothom, ditiyo] = doubleThem(3, 5);
/* console.log(prothom);
console.log(ditiyo); */





