// function call korar somoy argument pass na korle default man kaj korbe :)
function add(num1 = 10, num2 = 10,) {
    let result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
let sum = add();

// jodi parameter a array expect kore tahole default man hobe empty array object hole default hobe empty object boolean hole true or false hobe case to case very korbe :) 
// like 
function fullName(name = []) { }
