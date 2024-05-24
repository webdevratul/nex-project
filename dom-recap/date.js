let today = new Date();
console.log(today);

let date1 = new Date("1971-02-26");
let date2 = new Date("1971-12-16");

if (date1.getTime() < date2.getTime()) {
    console.log("March was before december");
} else {
    console.log("march wasn't before December");
}
