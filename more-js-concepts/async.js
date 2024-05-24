console.log(1);
console.log(2);

let timeOutId = setTimeout(() => {
    console.log("lazy");
}, 4000)

console.log(4);

function doSomething() {
    console.log(3);
}

let num = 0;
let intervalId = setInterval(() => {
    console.log(num++);
    if (num === 10) {
        clearInterval(intervalId);
    }
}, 1000)

/* clearInterval(intervalId);
clearTimeout(timeOutId); */



