//Create a symbol

const sym1 = Symbol();
const sym2 = Symbol("sym2");
const sym3 = Symbol();

console.log(sym1);
console.log(sym2);

console.log(sym1 == sym2);

//Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");
const KEYF = Symbol();

const myObj = {};

myObj[KEY1] = "Prop 1";
myObj[KEY2] = "Prop 2";
myObj.key3 = "Prop 3"; //This is a simple property, not a symbol
myObj.key4 = "Prop 4";
myObj[KEYF] = function sayAdios() {
  console.log("Adios Dude");
};
console.log(myObj);
console.log(myObj[KEYF]())

//Symbols are not enumarable in for..in

for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

//Symbols are ignores by JSON.stringify
console.log(JSON.stringify(myObj));
