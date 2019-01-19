const sayHello = () => {
  console.log("Say Hello");
};
sayHello();

//alternatively-we can write a one line function without braces

const sayHi = () => console.log("Hi");
sayHi();

//WE can return a value with one function

const saySasa = () => "Sasa";
console.log(saySasa());

//To return an object in one line
const retunObj = () => ({ react: true, name: "Wechuli" });
console.log(retunObj());

//With parameters,single parameters does not need parameters
const greeting = name => console.log(`Hi ${name}, nice to meet you`);
greeting("June");

//With multiple parameters
const properGreeting = (firstName, lastName) =>
  console.log(`Hi ${lastName} or may I call you ${firstName}?`);
properGreeting("Paul", "Wechuli");

//Arrow functions as callbacks

const users = ["Nathan", "John", "William"];

const nameLengths = users.map(name => {
  return name.length;
});
console.log(nameLengths);
//or even shorter
const snameLengths = users.map(name => name.length);
console.log(snameLengths);
