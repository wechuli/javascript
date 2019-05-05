// A unary operation is an operation with only one operand
//delete operator
//This deletes an object, an object's property or an elemnt at a specified index in an array

//You can use the delete operator to delete variables decalred implicitly but not those declared with the var statement

x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4; // create property h
console.log(myobj);
delete x; // returns true (can delete if declared implicitly)
delete y; // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
console.log(myobj);
delete myobj; // returns true (can delete if declared implicitly)
console.log(myobj); //undefines
