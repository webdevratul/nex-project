let numbers = [42, 65];
let [x, y] = numbers;
console.log(y, x);

let Person = {
    name: "sakib Khan",
    age: 38,
    movies: ['king khan', 'dhakar mastan']
}

let [firstMovie, secondMovie] = Person.movies;
console.log(firstMovie, secondMovie);


// object destructuring 
let { name, age } = { name: "vai", age: 40 };
console.log(name);
// array destructuring 
let [, , firstNumber, lastNumber] = [12, 12, 34, 45, 6, 67];
console.log(firstNumber);



let employees = {
    ide: "vs code",
    designation: "developer",
    machine: 'windows',
    specification: {
        height: 66,
        weight: 67,
        address: "kumarkhali",
        drink: "wiski"
    }
}

let { machine, ide } = employees;
let { address, drink } = employees.specification;
console.log(address, drink);
console.log(machine, ide);






