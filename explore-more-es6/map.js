// mani map ta aikhane numbers array tar upore doubleIt function take use kore function a ja bola hoyeche se vabe return kore notun akta array create kore.
/* let numbers = [4, 5, 2, 8, 10];
function doubleIt(num) {
    return num * 2;
}
let result = numbers.map(doubleIt);
console.log(result); */ // aitake niche arraow function diye kora hoyeche

// use arrow function
/* let numbers = [4, 5, 2, 8, 10];
let doubleIt = n => n * 2;
let result = numbers.map(doubleIt);
console.log(result); */

// use arrow more short 
let numbers = [4, 5, 2, 8, 10];
let result = numbers.map(n => n * 2);
console.log(result);


// double it
/*let numbers = [4, 5, 2, 8, 10];
 let doubled = [];
for (let num of numbers) {
    let double = num * 2;
    doubled.push(double);
}
console.log(doubled); */


