// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with alldistinct charcters

function findLongestSubstring(word) {
  // start a sequence, keep checking the next, if you get a duplicate, start another sequence but before that compare with the current sequence
  let maxString = [];
  let currentString = [];
  maxString.push(word[0]);
  currentString.push(word[0]);

  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] !== word[i + 1]) {
      currentString.push(word[i + 1]);
    }
    if (currentString.length > maxString.length) {
      maxString = currentString.slice();
    }
    if (word[i] === word[i + 1]) {
      currentString = [word[i]];
    }
  }
  return {
    longestSubLength: maxString.length,
    longestSub: maxString.join("")
  };
}

console.log(findLongestSubstring("abccedw"));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
console.log(
  findLongestSubstring("thisalgorithmbusinessisquite interesting isn't it")
);
