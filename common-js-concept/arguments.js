//  arguments are only available in function scope. arguments array like objects
function sum(a, b, c) {
    console.log(arguments);
    let args = [...arguments];
    console.log(args);
    let result = a + b + c;
    return result;
}
let total = sum(45, 50, 55, 60, 70, 80, 90)
console.log(total);