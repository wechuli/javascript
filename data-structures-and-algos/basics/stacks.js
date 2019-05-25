// A stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection and pop, which removes the most recently added element that was not yet removed

//functions: push,pop,peek,length

let letters = [];
let word = "racecar";
let rword = "";

//put letters of word into stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is NOT a palindrome`);
}


//Implement a stack in object
