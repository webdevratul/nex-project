// problem-1
/* let phones = [
  {
    name: "samsung",
    price: 20000,
    Storage: "20gb",
  },
  {
    name: "Appole",
    price: 22000,
    Storage: "20gb",
  },
  {
    name: "Oppo",
    price: 18000,
    Storage: "20gb",
  },
];

function chepestPhone(phones) {
  let chepest = phones[0];
  for (let i = 1; i < phones.length; i++) {
    let phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}

let ChepratePhone = chepestPhone(phones);
console.log(ChepratePhone); */

// problem-2
/* let shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 1700 },
  { name: "pant", price: 1800 },
  { name: "belt", price: 300 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    sum += product.price;
  }
  return sum;
}
let expense = totalCost(shoppingCart);
console.log(expense); */

// problem-3
/* let shoppingCart = [
  { name: "shoe", price: 1200, Quantity: 2 },
  { name: "shirt", price: 1700, Quantity: 5 },
  { name: "pant", price: 1800, Quantity: 7 },
  { name: "belt", price: 300, Quantity: 6 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productTotal = product.price * product.Quantity;
    sum += productTotal;
  }
  return sum;
}
let expense = totalCost(shoppingCart);
console.log(expense); */

// problem-3
/* 1| first 100 ticket price will be 100.
2| if you want to 100 to <= 200 ticket first 100 price  will be 100 and 100 < 200 ticket price will be 80.
3| if you purchase more than 200 tickets then -: first 100 ticket will be 100 and 101 to <= 200 ticket will be 80 and 200 < ticket will be 70 :) */
/* function ticketPrice(ticketQuantity) {
  let first100Rate = 100;
  let second100Rate = 80;
  let restTicketRate = 70;

  if (ticketQuantity <= 100) {
    let price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    let first100Price = 100 * first100Rate;
    let restTicketQuantity = ticketQuantity - 100;
    let restTicketPrice = restTicketQuantity * second100Rate;
    let totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    let first100Price = 100 * first100Rate;
    let second100Price = 100 * second100Rate;
    let restTicketQuantity = ticketQuantity - 200;
    let restTicketPrice = restTicketQuantity * restTicketRate;
    let totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}
let Quantity = 201;
let price = ticketPrice(Quantity);
console.log(price); */
