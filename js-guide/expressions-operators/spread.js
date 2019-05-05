//the spread operator allows an expression to be expanded in places where multiple arguments(for function calls) or multiple elements(for array literals) are expected

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);
