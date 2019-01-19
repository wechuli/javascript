const name = 'Steve';
const age = 2;
const id = 100;

//and operator
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a Teenager`);
} else {
    console.log(`${name} is an adult`);
}

//or ||

if (age < 16 || age > 65) {
    console.log(`${name} cannot run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

//Ternary operator, for short hand

console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without Braces

if(id==100)

    console.log('Correct');
else
    console.log('Incrorect');