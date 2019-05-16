//Regular expressions are patterns used to match charcter combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, matchAll, replace,search and split methods of String





let re = /ab+c/;

console.log(re);

//We can also call it using the RegExp object

let regO = new RegExp("ab+c");


let matched = regO.exec('This is a string abc');
console.log(matched);


