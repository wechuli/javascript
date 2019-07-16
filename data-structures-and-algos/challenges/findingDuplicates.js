// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.


//This is a short circuit implementation, time complexity O(N)
function areThereDuplicates(...args) {
  //args is an array, build an object with each value of arg and put it in the value

  const occurences = {};
  for (let item of args) {
    occurences[item] = occurences[item] ? occurences[item] + 1 : 1;

    if (occurences[item] > 1) {
      return true;
    }
  
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
