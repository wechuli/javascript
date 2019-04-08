// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

const person = [
  { name: "Paul Wechuli" },
  { age: 26 },
  { marital_status: "Single" },
  { superpower: "None" },
  { profession: "Software Developer" },
  { superpower: "None" },
  { profession: "Software Developer" },
  {
    interests: [
      "Cloud Computing",
      "Software Design",
      "AI",
      "Data Science",
      "Philosophy",
      "Psychology",
      "Mathematics"
    ]
  }
];

const fruits = ["Mango", "Apple", "Banana", "Peas", "Grapes"];

for (fruit of fruits) {
  //for of cannot be used with objects
  console.log(`${fruit}`);
}
