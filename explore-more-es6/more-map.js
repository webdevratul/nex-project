// map-ing 
let numbers = [12, 13, 14, 15, 16, 17];
let double = numbers.map(num => num * 2);
let fiveBonus = numbers.map(num => num + 5);
let haveLess = numbers.map(num => num - 2);

// get length use map 
let friends = ["amin", "jhankar vai", "mehedi"];
let lengths = friends.map(frind => frind.length);
// get first letter 
let firstLetter = friends.map(frind => frind[0]);
console.log(firstLetter);
