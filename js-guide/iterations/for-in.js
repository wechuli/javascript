// The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements

const person = {
  name: "Paul Wechuli",
  age: 26,
  marital_status: "Single",
  superpower: "None",
  profession: "Software Developer",
  interests: [
    "Cloud Computing",
    "Software Design",
    "AI",
    "Data Science",
    "Philosophy",
    "Psychology",
    "Mathematics"
  ]
};

for (prop in person) {
  console.log(`${prop}:${person[prop]}`);
}
