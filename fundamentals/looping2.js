//While loops

let i = 0;

while (i < 10) { //the condition goes inside the brackets

    console.log(`Number ${i}`);
    i++;
}

//Do while loop, the do while will always run atleast once

let p = 9;

do {
    console.log(`The number is ${p}`);
    p++;
} while (p < 4);

//Looping through arrays

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota', 'Subaru'];

for (let i = 0; i < cars.length; i++) {

    console.log(cars[i]);
}

//for each array loop
//we can pass the index to the fucntion and also the array
cars.forEach(function (car,index,array) {

    console.log(`${index} : ${car}`);
    console.log(array);

});

//map method, to return a different array

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Karen' },
    { id: 3, name: 'Jecinat' },
    { id: 4, name: 'Joyce' }

];

const ids = users.map(function (user) {
    return user.id;
});

console.log(ids);

//for in loop

const user={
    firstName:"Wechuli",
    lastName:"Paul",
    age:40
}

for(let x in user){
    console.log(`${x}:${user[x]}`);
}