let re;

//Literal characters
// re = /hello/;
re = /hello/i; //match lowercase

//Metacharacter Symbols
re = /^h/i; //Must start with
re = /World$/i; //Must end with
re = /^hello$/i; ///begins and ends with
re = /^h.ll/i; //matches any one character(only one charcter)
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //Optional characters-matches 'e' or 'a' or nothing

re = /gre?y\?/i; // the '\' character is used to escape something we don't want to be included as a metacharaster



//Brackets [] -Charaster Sets
re = /gr[ae]y/i; //Must be an a or an e , not empty
re = /[GF]r[ae]y/; //Must start with an uppercase G or F
re = /[^GF]r[ae]y/; //Must match anything except a G or F
re = /^[GF]r[ae]y/; //Must start with either a G or F -note this is different from having the caret symbol inside the brackets which means anything but
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any letter (lower or upper)
re = /[0-9][0-9]ray/; //Match any digit



//Braces {}  -Quantifiers
re = /Hel{2}o/i;  //Must occur exactly {m} amount of times -of the character before the quantifier
re = /Hel{2,4}o/i; //Must occur between the stated values, in this case between 2 and 4 times
re = /Hel{2,}o/i; //Must occur atleast m times {m} , in this case, 'l' must occur atleast 2 times


//Paranthesis () -Grouping
re = /([0-9]x){3}/  /// the grouping operator makes it possible to use the quantifier on the group of characters rather than a single character, in this case
re = /^([0-9]x){3}$/


//String to match
const str = "3x4x0x";


//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`'${str}' matches '${re.source}'`);
  } else {
    console.log(`'${str}' does NOT match '${re.source}'`);
  }
}

reTest(re, str);
