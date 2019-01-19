let a, b;

[a, b] = [100, 200];

//Rest pattern
[a, b, c, d, ...rest] = [100, 200, 300, 440, 4556, 45];
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("rest", rest);

//Object desructruting
myobject = {
  obj1: 100,
  obj2: 200,
  obj3: 300,
  obj4: 400,
  obj5: 500,
  obj6: 600
};

const { obj1, obj3, ...restObjects } = myobject;
console.log(obj1);
console.log(obj3);
//console.log(obj4)
console.log(restObjects);

//Array destructuring

const people = ["John", "Beth", "June", "Valentine", "Paul"];

const [person1, person2, person3, ...others] = people;
console.log(person1);
console.log(person2);
console.log(person3);
console.log(others);

//Parse array retuned from function
function getPeople() {
  return ["Paul", "June", "Wechuli"];
}

let p1, p2, p3;

[p1, p2, p3] = getPeople();

console.log(p1, p2, p3);

//Object

const Person = {
  name: "Caroline Mutiso",
  age: 27,
  city: "Nairobi",
  gender: "Female",
  sayHello:function(){
      console.log(`Hello ${name}`);
  }
};
const { name, city, age,sayHello } = Person;
console.log(name,age,city)
sayHello();