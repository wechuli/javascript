function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
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

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}

Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;
