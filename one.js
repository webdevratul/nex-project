// Reverse loop.
/* let number = 20;
while (number >= 1) {
  console.log(number);
  number--;
} */

// Find index of banana and replace Banana with Mango, Remove Orange and add Watermelon.
/* let fruTis = ["Apple", "Banana", "Orange"];
let findIndex = fruTis.indexOf("Banana");
fruTis[1] = "Mango";
fruTis.pop();
fruTis.push("Watermelon");
console.log(fruTis); */

// get the highest number.
/* let numberOne = 100;
let numberTwo = 90;
let numberThree = 200;

if (numberOne > numberTwo) {
  if (numberOne > numberThree) {
    console.log(numberOne + "is big number");
  } else {
    console.log(numberThree + "is big number");
  }
} else {
  if (numberTwo > numberThree) {
    console.log(numberTwo + "is big number");
    return;
  }
  console.log(numberThree + "is big number");
} */

// check isosceles
/* let sideOne = 8;
let sideTwo = 9;
let sideThree = 8;

if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree) {
  console.log("isosceles");
} else {
  console.log("is not isosceles");
} */

/* Most Important break and continue function :) */

// Includes function check string that text are exist in variable or not :) substring function cut the string and get specific a string value :)
/* let Name = "Hello There How are you";
console.log(Name.includes("Hello"));
console.log(Name.substring(0, 6)); */

// javascript function is Most Important :) parameter & argument & return are also important thing in function. After return code not execute in function :)
/* function startFun() {
  console.log("Hello One");
  console.log("Hello Two");
  console.log("Hello Three");
}
startFun(); */

/* function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const result1 = add(12, 13);
const result2 = add(13, 13);
console.log(result1);
console.log(result2);
const finalResult = add(result1, result2);
console.log(finalResult); */

// JavaScript Object
/* let man = {
  name: "Ratul",
  age: 24,
  class: "Honours 4rth year",
  lang: ["Bangla", "English", "Hindi"],
};

//  console.log(man.name);
//  console.log(man.lang[1]);

//  man.age = 25;
//  console.log(man);

let properties = Object.keys(man);
console.log(properties[1]); // find specific object key
let Values = Object.values(man);
console.log(Values[1]); // Find specific value
console.log(properties);
console.log(Values); */

//  Advanced loop
/* let man = {
  name: "Ratul",
  age: 24,
  class: "Honours 4th year",
  lang: ["Bangla", "English", "Hindi"],
};

let keys = Object.keys(man);
for (let x = 0; x < keys.length; x++) {
  let propertiesName = keys[x]; // get property name
  let propertiesValues = man[propertiesName]; // get property values
  console.log(propertiesName, propertiesValues);
}

// get property values for loop
let Values = Object.values(man);
for (let i = 0; i < Values.length; i++) {
  console.log(Values[i]);
} */

// for in loop
/* let man = {
  name: "Ratul",
  age: 24,
  class: "Honours 4rth year",
  lang: ["Bangla", "English", "Hindi"],
};

for (let propertiesName in man) {
  let Values = man[propertiesName];
  console.log(propertiesName, Values);
} */

// small problem
/* function make_avg(Number) {
  let some = 0;
  for (let x = 0; x < Number.length; x++) {
    some += Number[x];
  }
  return some / 6;
}

let Number = [1, 2, 5, 7, 9, 20];
let GetValues = make_avg(Number);
console.log(parseInt(GetValues.toFixed(2))); // to fixed korle ata integer ke string a convert kore fale. tai parseint use kora hoyeche :) */

/* switch is most important thing in javascript */

// Inch to Feet
/* let inches = 50;
let Feet = inches / 12 ;
console.log(Feet); */

// mile to km
/* let Mile = 50;
let Km = Mile * 1.609;
console.log(Km); */

// check with function is even or odd
/* function isEven(Number) {
  if (Number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let sanToNa = 200;
let MahibulIslam = 201;

let herNumberEven = isEven(sanToNa);
if (herNumberEven == true) {
  console.log("Yes her Number is even");
} else {
  console.log("No her Number is odd");
}

let hisNumber = isEven(MahibulIslam);
if (hisNumber == true) {
  console.log("Yes his Number is even");
} else {
  console.log("No his number is Odd");
} */

// check leap year
/* function isLeapYear(thisYear) {
  if (thisYear % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
let thisYear = 2024;
let leapYear = isLeapYear(thisYear);

if (leapYear == true) {
  console.log(thisYear + " is leap year");
} else {
  console.log(thisYear + " is not leap year");
} */

// sum of the odd numbers
/* let sum = 0;
function findOddSum(numbers){
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 != 0){
            sum  += numbers[i];
        }
    }
    return sum;
}

let numbers = [3,4,56,69,70,14,30,50,60,11];
let oddSum = findOddSum(numbers);
console.log(oddSum); */

// Find odd numbers
/* function findOdd(numbers) {
  let oddNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}
let numbers = [3, 4, 56, 69, 70, 14, 30, 50, 60, 11];
let oddNumbers = findOdd(numbers);
console.log(oddNumbers); */

// Find leap year with a function
/* function findLeapYear(Year){
  let leapYear = [];
  for(x = 0; x < Year.length; x++){
    if(Year[x] % 4 == 0){
      leapYear.push(Year[x]);
    }
  }
  return leapYear;
}

let Year = [2023, 2024, 2025, 2028, 2029, 2030];
let lepYear = findLeapYear(Year)

console.log(lepYear + " Year is leap year" ); */
