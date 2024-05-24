// max function ti sob cheye boro songkha ta dibe
let max = Math.max(6, 23, 45, 89, 10, 34, 56, 78,);

// amra numbers er 3 ta dor diyechi ata diye array take number a convert kore then max function use korechi :)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11, 1, 11];
let arrayMax = Math.max(...numbers);


// use spread operator to copy aikahne spread operator use koray push ta only friends a hoyeche dosto te hoy nai :)
let friends = [4, 5, 6, 7, 8, 8, 10, 11, 12];
let bondhu = friends;
let dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(friends);
console.log(dosto);





