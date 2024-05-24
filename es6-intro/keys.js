let glass = {
    name: "Glass",
    color: "golden",
    price: 12,
    inCleaned: true
}
let keys = Object.keys(glass);
let Values = Object.values(glass);
// ata two dimensional array return korbe
let pair = Object.entries(glass);

// delete property in object
delete glass.inCleaned;

// delete destructuring wye .. aikahne inCleaned ke delete kore rest er vitore baki gula niye niche :)
let { inCleaned, ...rest } = glass;


// freeze kore rakhle add remove chnage kichu kora jabe nah :)
// Object.freeze(glass);
glass.source = "Bangladesh";

// seal only modify modify
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass);






