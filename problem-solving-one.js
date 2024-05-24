// Problem-1
/* function feetToInch(feet) {
  let inch = feet * 12;
  return inch;
}
let feet = 12;
let inch = feetToInch(feet);
console.log(inch); */

// problem -2
/* function centimeterToMeter(centimeter) {
  let meter = centimeter / 100;
  return meter;
}
let centimeter = 20;
let meter = centimeterToMeter(centimeter);
console.log(meter); */

// problem -3
/* function paperRequirements(first, second, third) {
  let bookOnePage = 100;
  let bookTwoPage = 200;
  let bookThreePage = 300;

  let totalBookOnePage = first * bookOnePage;
  let totalBookTwoPage = second * bookTwoPage;
  let totalBookThreePage = third * bookThreePage;

  let totalSumOfBookPage =
    totalBookOnePage + totalBookTwoPage + totalBookThreePage;
  return totalSumOfBookPage;
}

let bookOne = 10;
let bookTwo = 12;
let bookThree = 20;

let totalPage = paperRequirements(bookOne, bookTwo, bookThree);
console.log(totalPage); */

// problem - 4
/* function bestFriend(friends) {
  let bigName = friends[0];
  for (let x = 0; x < friends.length; x++) {
    if (bigName.length < friends[x].length) {
      bigName = friends[x];
    }
  }
  return bigName;
}
let friends = [
  "Arif",
  "Tuhin",
  "Nazmul",
  "Ruman",
  "Rahat",
  "Ahad",
  "Bony",
  "Rony",
];
let bigName = bestFriend(friends);
console.log(bigName); */

// problem -5
/* function Count(numbers) {
  let PositiveValue = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      break;
    } else {
      PositiveValue.push(numbers[i]);
    }
  }
  return PositiveValue;
}
let numbers = [1, 2, 3, 5, 6, 8, 1, 2, 3, 4, -1, -20, 0, 5, 1, -3];
let PositiveValue = Count(numbers);
console.log(PositiveValue); */

// problem -6
/* function removeDuplicate(friends) {
  console.log(friends);
  let unique = [];
  for (let i = 0; i < friends.length; i++) {
    let name = friends[i];
    if (unique.includes(name) == false) {
      unique.push(name);
    }
  }
  return unique;
}

let friends = [
  "Arif",
  "Tuhin",
  "Nazmul",
  "Ruman",
  "Rahat",
  "Ahad",
  "Bony",
  "Rony",
  "Arif",
  "Nazmul",
  "Ahad",
];
let uniqueName = removeDuplicate(friends);
console.log(uniqueName); */

// problem -7
/* for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foo-Bar");
  } else if (i % 5 === 0) {
    console.log("Bar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else {
    console.log(i);
  }
} */

// problem - 8
/* function wooDCalculation(chairQuantity, tbaleQuantity, bedQuantity) {
  let perChairWood = 3;
  let perTableWood = 10;
  let perVedWood = 50;

  let chairWood = chairQuantity * perChairWood;
  let tbaleWood = tbaleQuantity * perTableWood;
  let bedWood = bedQuantity * perVedWood;

  let totalWood = chairWood + tbaleWood + bedWood;
  return totalWood;
}
let totalWood = wooDCalculation(2, 2, 5);
console.log(totalWood); */

var student = { name: "Yo Mama", age: 17 };
// Deleting the 'age' property from the 'student' object
delete student.age;
console.log(student); // Output: { name: 'Yo Mama' }
