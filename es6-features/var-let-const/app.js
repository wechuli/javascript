//VAR
//var polutes the global scope

// function greet(){
//     console.log(filename);
//     var filename = 'CodeBlocks'
//     var title = 'Let and const lessons'
//     console.log(title);

// }

// greet()

//Variable hoisting->Brings the variable forward but remains undefined if not later defined in the code
"use strict"; //operate js in scritct mode

myHoistedVar = "I am being hoisted";
a = 45;
console.log(myHoistedVar);
console.log(a);
var myHoistedVar;
var a;

///LET

function greeting() {
  // console.log(title);
  let title = "Let and const lesson"; //Let prevents variable hoisting-this will produce a reference error
  console.log(title);
}
greeting();
//Let is also block scoped-block scoped means anything inside the curly braces

if (true) {
  let mynumber = 4566; //this is block scoped to this conditional
  console.log(mynumber);
}
//console.log(mynumber) //ReferenceError

///CONST

const PI = 3.142; //we cannot change this
const aString = "This is immutable sucker"; //we cannot change this also
//We can modify objects or arrays declared as const , but we cannot reassign it

const girls = ["June", "Maria", "Jecinta", "Becky"];

//we cannot do something like girls = ['Betty','Mitchelle']
girls.push("Caroline");
console.log(girls);
girls.pop(girls);
console.log(girls);

let filterdG = girls.filter(girl => girl !== "June");
console.log(filterdG);

const game = {
  title: "GTA Auto",
  releaseYear: "2008",
  price: "$50"
};
console.log(game);
game.price = 660;
console.log(game);
