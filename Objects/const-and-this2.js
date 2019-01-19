//Person constructor
function Person(name, dob) {
  //this refers to the current instance of the object
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

//Instantiate an instance
const Paul = new Person("Wechuli", "05-01-1993");
const June = new Person("June", "04-05-1996");
console.log(Paul.calculateAge());
console.log(June.calculateAge());
