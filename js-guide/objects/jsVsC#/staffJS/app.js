function Employee(name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee(name, dept, projs) {
  this.base = Employee;
  this.base(name, dept);
  this.projects = projs || [];
  WorkerBee.prototype = Object.create(Employee.prototype);
  WorkerBee.prototype.constructor = WorkerBee;
}

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quora = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "Engineering", projs);

  this.machine = mach || "";
}

Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;

const jim = new Employee();
console.log(jim);
const sally = new Manager();
console.log(sally);

const jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
console.log(jane);
