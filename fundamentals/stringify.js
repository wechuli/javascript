const firstName='Williams';
const lastName='Johnson';
const str='Hello there my name is Paul';
const tags='web, development, programming, data, science, front-end, backend, python node';

let val;

//Concatenation
val=firstName+' '+lastName;

//append

val='June';
val+=' Mutelesa';
var age=25

val = 'Hello, my name is '+ firstName + ' and I am '+age;

//Escaping we can use \

val = 'That\'s awesome, I can\'t wait'
//Lenght

val=firstName.length;

//concat

val=firstName.concat(' ',lastName);

//Change case

val=firstName.toUpperCase();
val=firstName.toLowerCase();

//indexOf()

val=firstName.indexOf('l');
val=firstName.lastIndexOf('l');

//charAt()

val=firstName.charAt(2);

//Get last char
val=firstName.charAt(firstName.length-1);


//Get substring
val=firstName.substring(0,4);

//slice

val=firstName.slice(0,4);
val=firstName.slice(-3);

//split
val=str.split(' ');
val=tags.split(',');

//replace

val=str.replace('Hello','Howdy');

//includes()

val=str.includes('Howdy');
console.log(val)