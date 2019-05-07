// In  JavaScirpt, all numbers are implemented in double-precision 64-bit binary format
//Interger values up to + or - 2^53 - 1 can be represented exaclty.In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number)

//Decimal Numbers

let myNumber = 1234567;
let strangeOct = 0777; //parsed as octal in non-strict mode (511 in decimal)
console.log(strangeOct);

//Note that decimal literals can start with a zero (0) followed by another decimal digit, but if every digit after the leading 0 is smaller than 8, the number gets parsed as an octal number. - thats weird

//Binary Numbers

//Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B"(0b or 0B).If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown: "Missing binary digits after 0b".

let flt_signbit = 0b00110;
console.log(flt_signbit);

//Octal Numbers
//Octal number syntax uses a leading zero.If the digits after the 0 are outside the range 0 through 7, the number will be interprated as a decimal number

let n = 0755; //493
let m = 0644; //420

console.log(`n: ${n} m: ${m}`);
//in ECMAScript 2015, octal numbers are supported

let a = 0o107; //ES2015: 8
console.log(a);

//Hexadecimal numbers
//Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin 'X'(0x or 0X).If the digits after 0x are outside the range (0123456789ABCDEF), the following SyntaxErro is thrown:"Identifier starts immediately after numeric literal"

const myhex = 0xffff;
console.log(myhex);
