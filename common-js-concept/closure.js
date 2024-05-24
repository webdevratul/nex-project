function kitChen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

let firstServer = kitChen();
/* console.log(firstServer());
console.log(firstServer());
console.log(firstServer()); */


function work(x, y = 4) {
    return x + y;
}
console.log(work(32);
