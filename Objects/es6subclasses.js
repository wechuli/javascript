class Person {
  constructor(firstName, lastName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const papa = new Customer("Papa", "Lolo", 555443, "Standard");
console.log(papa);
console.log(papa.greeting());
console.log(Customer.getMembershipCost());
