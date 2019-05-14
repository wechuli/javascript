//A String object has a variety of methods: for example those that return a variation on the string itself, such as substring and toUpperCase

let myLongString =
  "And you as well must die, Beloved dust and all your beauty stand you in no way";

console.log(myLongString.length);
console.log(myLongString.fontcolor("red"));
console.log(myLongString.slice(0, 5));
console.log(myLongString.toUpperCase());

//Multiline template literals

let templatePoem = `And you as well must die beloved dust,
And all your beauty stand you in no stead
This flawless, vital hand
this perfect head, this body of flame and steel
Before the gust of death or under his autumnal frost
shall be as any leaf, be no less dead, than the `;

console.log(templatePoem);
