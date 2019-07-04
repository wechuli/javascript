function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jane = new Person("Jane", 28);
const randomString = new String("My string");

console.log(jane);

console.log(jane instanceof Person);
console.log(randomString instanceof String);
