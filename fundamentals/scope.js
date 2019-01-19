//Global Scope

var a =1;
let b =2;
const c =3;

function test(){

    var a =4;
let b =5;
const c =6;
console.log('Function Scope: ',a,b,c);

}

console.log('Global Scope: ',a,b,c);
test();

//Block level scope

if(true){
    //Block scope

    var a =7;
let b =8;
const c =9;
console.log('If Scope: ',a,b,c);
}

console.log('Global Scope: ',a,b,c);
//let and const are block scoped
var i=1;

for(var i=0;i<10;i++){

    console.log(`Loop: ${i}`);
}
console.log('Global Scope: ',i,b,c);
