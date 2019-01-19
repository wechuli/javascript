const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

//pass the prototype
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");
console.log(mary);
console.log(mary.greeting());

//Alternative syntax

const paul = Object.create(personPrototypes, {
  firstName: { value: "Paul" },
  lastName: { value: "Wechuli" },
  age: { value: 25 }
});

console.log(paul);
console.log(paul.greeting());
