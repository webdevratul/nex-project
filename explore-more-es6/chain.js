// data access 
let data = [{
    id: 1,
    name: "abul",
    adress: "kocukhat"
}]
/* console.log(data[0].adress); */

let products = {
    count: 5000,
    data: [
        { id: 1, name: "lenovo laptop", price: 65000 },
        { id: 2, name: "mackbook", price: 166000 }
    ]
}
/* console.log(products.data[1].name); */
let user = {
    id: 5001,
    name: "soriful Raj",
    address: {
        street: {
            first: "54/1 uttor side",
            second: "pribag er second goli",
            third: [
                {
                    name: "Mahibul Islam",
                    email: "example@.com",
                    age: [25, 20, 40, 45]
                }
            ]
        }
    },
    citty: "dhaka"
}
/* console.log(user.address.street.second);
console.log(user.address.street.third[0].age[0]); */


// optional chaining 
let user2 = {
    id: 5002,
    name: "pori bibir majar",
    adress: {
        city: "dhaka",
        country: "bangladesh"
    }
}

console.log(user2.adress.street?.second);