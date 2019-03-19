let globalvar = "abc"; //this is the global scope var

function test() {
  let num = 5; //local variable
  console.log("num", num);
  console.log("global", globalvar);
}
test();

//Function that receives a number sna multply with a constant
const constValue = 10;
function multiply(num) {
  return num * constValue;
}

console.log("Result", multiply(10));
