// swap variable
let first = 7;
let last = 9;

// approach-1
/* console.log(first, last);
let temp = first;

first = last;
last = temp;
console.log(first, last) */

// approach-2 ---Destructing
/* [first, last] = [last, first];
console.log(first, last); */

// reverse  char
/* function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}
let text = "Hello there how are you";
let reversed = reverseString(text); */

// reverse word
/* function reversWords(text) {
    let result = [];
  let words = text.split(" ");
  for(let x = words.length-1; x >= 0; x--){
    result.push(words[x]);
  }
 let reversed = result.join(" ");
 return reversed;
}
let text = "I am a good boy";
let reversed = reversWords(text);
console.log(reversed); */

// Fibonacci dhara that means 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 tar ager 2 tar jogfol

/* let fibo = [0, 1];
for(let i = 2; i <= 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

