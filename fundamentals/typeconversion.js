let val;

//number to string

val=5;

//output
console.log(val);
console.log(typeof val);
console.log(val.length);

val2=String(val);
console.log(typeof val2);
console.log(val2.length);

//boolean

val= String(true);
val=String(new Date());

//another way

val=(5).toString;
val=(true).toString;


//converting strings to numbers

val=Number('5');
console.log(val);
console.log(typeof val);
console.log(val.to)


val = parseInt('100');
val = parseFloat('123.23');

//COERCION

const val1 = 5;
const val2=6;
const sum = val1+val2;