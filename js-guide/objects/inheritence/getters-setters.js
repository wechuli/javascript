class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  sayHi() {
    console.log(`${this.name} says Hi`);
  }
}

class Teacher extends Person {
  constructor(name, age, hobbies, subject) {
    super(name, age, hobbies);
    this._subject = subject;
  }
  get subject() {
    return this._subject;
  }
  set subject(subjectName) {
    this._subject = subjectName;
  }
}

const teacher1 = new Teacher(
  "Paul",
  "Wechuli",
  ["football", "programming"],
  "Computer Science"
);

console.log(teacher1);
//set
teacher1.subject = "Databases";
console.log(teacher1);

//get
console.log(teacher1.subject);
