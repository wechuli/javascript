class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  //any method added in the class is automatically added to the prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  //adding a static metod
  static addNumbers(x, y) {
    return x + y;
  }
}

const valentine = new Person("Valentine", "Chep", "11/13/1993");
console.log(valentine);
console.log(valentine.greeting());
valentine.getsMarried("Matata");
console.log(valentine.greeting());
console.log(valentine.calculateAge());

//Using te static method
console.log(Person.addNumbers(132322,212));
