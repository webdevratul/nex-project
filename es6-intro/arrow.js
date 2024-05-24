// function declaration mani jeta function keyword diye lekha hoy :)
function add() { }

// function expression ba anonimus function jeta variable a rekhe kora hoy without name :)
let add2 = function (a, b) {
    return a + b;
}

// arrow function 
let multiply = (a, b) => a * b;
let multi = multiply(3, 12);
console.log(multi);