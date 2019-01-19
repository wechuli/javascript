const greet = (name, age) => {
  console.log(`Hello ${name}, I heard you are ${age} years old `);
};

greet("Paul", 26);

const add = (a, b, c) => a + b + c;

console.log(add(4, 5, 6));
const btn = document.querySelector('#btn');
btn.addEventListener('click',testingThis);

//This keyword behaves differently in an arrow function

function testingThis(){
    console.log(this);
}
//testingThis()

const fn = ()=>console.log(this)
//fn()

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',fn);