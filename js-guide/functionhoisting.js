// Function declaration

foo(); //bar this will be hoisted

function foo() {
  console.log("foo");
}



//Function expression

baz(); //baz will not be hoisted since it is a funtion expression

var baz = function() {
  console.log("bar2");
};
