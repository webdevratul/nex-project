class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("Gari chole na chole na chole nah re");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, tickatePrice) {
        super(name, price);
        this.seat = seat;
        this.tickatePrice = tickatePrice;
    }
}

class Truck extends Vehicle() {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}