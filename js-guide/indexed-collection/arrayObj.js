//An array is an ordered set of values that you refer to with a name and an index

const arr = new Array("Paul", "Wafula", "Wechuli");
//or
const arr2 = Array("Paul", "Wechuli", "Wafula");
//or
const arr3 = ["Paul", "Wechuli", "Wafula"];

console.log(arr);
console.log(arr2);
console.log(arr3);

//Create an array with non-zero length, but without any items

const arrNonzero = new Array(6);
//same as
console.log(arrNonzero.length);
const arrNonzero2 = [];
console.log(arrNonzero2.length);


//If you wish to initialize an array with a single element, and the elemnt happens to be a Number, you must use the bracket syntax. When a single Number value is passed to the Array() contructor or function, it is interpreted as an arrayLength, not as a single element