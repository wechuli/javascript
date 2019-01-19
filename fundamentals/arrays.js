//Create some arrays

const numbers=[43,56,23,44,56,2,1,9];
const numbers2=new Array(22,232,1,12,1,12);

const fruit=['apple','banana','Orange','Apple'];
const mixed=[22,'Hello',true, undefined,null,{a:1,b:"yes"},new Date()]

console.log(mixed);

let val;

console.log(numbers);
console.log(val);

//Get array length
val=numbers.length;

//Check if is array

val=Array.isArray(mixed);
console.log(val);

//Get a single value

val=fruit[2];
console.log(val);

//Insert into array

mixed[2]="oh my";
console.log(mixed);

//Find Index of value

val=numbers.indexOf(44);
console.log(val);

//Add to end
numbers.push(250);

//Add on to front
numbers.unshift(120);

//Take off from end
numbers.pop();
console.log(numbers);

//Taqke off from front
numbers.shift();

//Splice values
numbers.splice(1,3);

//Reverse
numbers.reverse();

//Concatenta array

val=numbers.concat(numbers2);
console.log(val);

//Sroting arrays

val=fruit.sort();
console.log(val);

//Using the compare function

val=numbers.sort(function(x,y){
    return x-y;
});
console.log(val);

val=numbers.sort(function(x,y){
    return y-x;
})

console.log(val);

//Find
function under50(num){
    return num<50;
}
val=numbers.find(under50);
console.log(val);