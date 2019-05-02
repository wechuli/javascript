// Logical AND(&&) returns first exp if it can be converted to false; otherwise returns expr2. Thus when used with Boolean values, && return true if both operands are true; otherwise returns false

let a1 = true && true;
console.log(a1);
let a2 = true && false;
console.log(a2);
let a3 = false && true;
console.log(a3);
let a4 = false && 3 == 4;
console.log(a4);
let a5 = "Cat" && "Dog";
console.log(a5);
let a6 = false && "Cat";
console.log(a6);
let a7 = "Cat" && false;
console.log(a7);

console.log("Start of logical OR");
//Logical OR || returns expr1 if it can be converted to true; otherwise return expr2.Thus, when used with Boolean values || returns true if either operand is true; if both are false, returns false
let o1 = true || true;
console.log(o1);
let o2 = true || false;
console.log(o2);
let o3 = false || true;
console.log(o3);
let o4 = false || 3 == 4;
console.log(o4);
let o5 = "Cat" || "Dog";
console.log(o5);
let o6 = false || "Cat";
console.log(o6);
let o7 = "Cat" || false;
console.log(o7);

// Logical NOT (!) returns false if its single operand that can be converted to true; otherwise returns true
let n1 = !true;
console.log(n1);
let n2 = !false;
console.log(n2);
let n3 = !"Cat";
console.log(n3);

//false && anything is short-circuit evaluated to false
//true || anything is short-circuit evaluated to true

