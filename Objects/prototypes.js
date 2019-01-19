//Object.prototype from literals

//Person.prototype from constructor functions

//Person contsructo

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  //this.age=age;
  this.birthday = new Date(dob);
  //this.calculateAge = function() {
  // const diff = Date.now() - this.birthday.getTime();
  // const ageDate = new Date(diff);
  //return Math.abs(ageDate.getUTCFullYear() - 1970);
  //};
}
//We can put the methods inside the prototype
//calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
//get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
//gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const paul = new Person("Paul", "Wechuli", "01/05/1993");
const june = new Person("June", "Namwoso", "5/5/1996");

console.log(paul);
console.log(paul.calculateAge());
console.log(june);
console.log(june.getFullName());
june.getsMarried("Wechuli");
console.log(june.getFullName());
console.log(june.hasOwnProperty('firstName'));
console.log(june.hasOwnProperty('getFullName'));
