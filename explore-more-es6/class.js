let products = [
    { id: 1, name: "lenovo laptop", price: 50000 },
    { id: 2, name: "hp laptop", price: 60000 },
    { id: 3, name: "walton laptop", price: 40000 },
    { id: 4, name: "asus laptop", price: 55000 },
    { id: 1, name: "macbook", price: 150000 }
]
/* class Product {
    constructor(name) {
        this.name = name;
    }
}
let lenevo = new Product("lenovo");
console.log(lenevo); */

class Teacher {
    constructor(name, subject, adress) {
        this.name = name;
        this.subject = subject;
        this.adress = adress;
    }

    lecture() {
        console.log("sir is teaching math");
    }
}
let tapon = new Teacher("Tapon", "Physics", "Dhaka");
console.log(tapon);

let rashid = new Teacher("Rashid", "English", "Dhaka")
console.log(rashid);





