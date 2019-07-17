// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.

function isSubsequence(word, phrase) {
  if (!(typeof word === "string" && typeof phrase === "string")) {
    throw new Error("Function accepts only string inputs");
  }

  if (phrase.indexOf(word) === -1) {
    return false;
  }
  return true;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
