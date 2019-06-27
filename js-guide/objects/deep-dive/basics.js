// The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.Objects can contain related data and code which represent information about the thing you are trying to model and functionality or behavior that you want it to have.

//JavaScript uses special functions called constructor functions to define and initialize objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective wat, attaching functions to them as required. provide the

//Other ways to create Objects

//The object() constructor

const emptyObject = new Object();
const Person = new Object({
  name: "Paul",
  age: 26,
  dummy: function() {
    return [this.name, this.age];
  }
});

console.log(Person);
console.log(Person.dummy());

//Usinf the create() method
const person = {
  name: "Paul",
  age: 26,
  dummy: function() {
    return [this.name, this.age];
  }
};

const anotherPerson = Object.create(person);
