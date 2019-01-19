let re;


//Literal characters
// re = /hello/;
re = /hello/i; //match lowercase


//Metacharacter Symbols
re = /^h/i;  //Must start with
re = /World$/i;  //Must end with
re = /^hello$/i;  ///begins and ends with
re = /^h.ll/i; //matches any one character(only one charcter)
re = /h*llo/i;  //Matches any character 0 or more times
re = /gre?a?y/i ; //Optional characters-matches 'e' or 'a' or nothing

re = /gre?y\?/i  // the '\' character is used to escape something we don't want to be included as a metacharaster


//String to match
const str = 'gry?';

//Log Results
const result = re.exec(str);
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`'${str}' matches '${re.source}'`);
  } else {
    console.log(`'${str}' does NOT match '${re.source}'`);
  }
}

reTest(re,str);
