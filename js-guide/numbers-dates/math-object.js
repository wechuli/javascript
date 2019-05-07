//The built in math object has properties and methods for mathematical constants and functions

const PI = Math.PI;
console.log(PI);

//Some Math object's methods
//abs() sin() cos() tan() asin() acos() pow() expm1() floor() ceil() min() max() random()

//You never create a Math object on your own. You always use the buillt-in Math object

let randomNumber = Math.random();
console.log(randomNumber);
let mynumbers = [1, 2, 3, 4, 5, 85, 99, -85, 5520, 0, 23];

console.log(Math.max(...mynumbers)); //We need to spread the array since the math object does not accept iterables
console.log(Math.min(...mynumbers));
