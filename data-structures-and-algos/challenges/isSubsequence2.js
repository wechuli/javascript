// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.

function isSubsequence(word, phrase) {
  if (!(typeof word === "string" && typeof phrase === "string")) {
    throw new Error("Function accepts only string inputs");
  }

  let lastIndexOfPhrase = 0;
  for (let i = 0; i < word.length; i++) {
    let letterIndex = phrase.indexOf(word[i], lastIndexOfPhrase);
    if (letterIndex === -1) {
      return false;
    }
    lastIndexOfPhrase = letterIndex;
  }
  return true;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
