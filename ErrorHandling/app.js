try {
  //This will produce a reference error
  //   myFunction();

  //   //We can produce a TypeError
  //   null.myFunction();

  //Produce a SyntaxError
  //eval("Hello World");

  //Will produce a URIError
  decodeURIComponent("%");
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error instanceof TypeError);
  console.log(error instanceof ReferenceError);
} finally {
  console.log("Finally runs regardless of the result");
}

console.log("Program continues...the catch block allows the code to continue");

//Create our own error

const user = { email: "jdoe@gmail.com" };

try {
  if (!user.name) {
   // throw new Error("USer has no name");
    throw new SyntaxError('User has no name')
  }
} catch (error) {
  console.log(`We generated this error ourselves ${error}`);
}
