/* let difference = (x, y) => x - y;
let multiply = (first, second, third) = first * second * third; */

//  singal or one parameter
let getAge = (person) => person.age;
let student = {
    Name: "Mahibul Islam",
    age: 25,
    class: "Honours"
}
let age = getAge(student);
console.log(age);


let getThird = numbers => numbers[2];
let numbers = [1, 2, 3, 4, 5, 5, 6,];
let third = getThird(numbers);
console.log(third);


// no parameter 
let getPI = () => Math.PI;
console.log(getPI());

// large arrow function 
const doMath = (x, y, z) => {
    let sum = x + y + z;
    let multiply = x * y * z;
    let result = sum + multiply;
    return result;
}
let result = doMath(2, 5, 4);
console.log(result);



