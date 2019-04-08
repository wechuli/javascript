// Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

// When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
// When you use break with a label, it terminates the specified labeled statement.

const girls = [
  "June",
  "Amy",
  "Cindy",
  "Phoebe",
  "Rebecca",
  "Becca",
  "Tania",
  "Phoebe"
];

let index = -1;

for (let i = 0; i < girls.length; i++) {
  if (girls[i] === "Phoebe") {
    index = i;
    break;
  }
}

if (index > -1) {
  console.log(`The name was found at position ${index}`);
} else {
  console.log("The name was not found");
}
