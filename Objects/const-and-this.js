//Person contsructo

function Person(name, dob) {
  this.name = name;
  //this.age=age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const paul = new Person("Paul", "9-10-1999");
const wechuli = new Person("Wechuli", "03/20/1991");

console.log(paul.calculateAge());
console.log(wechuli.calculateAge());
