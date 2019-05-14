//JavaScript's String type is used to represent textual data. It is a set of 'elements' of 16-bit unsigned integer values(UTF-16 code units)

//Hexadecimal escape sequences

let myHex = "\xA9";
console.log(myHex);

//Unicode escape sequences
//The unicode escape sequences require at least four hexadecimal digits following \u

let myUnicode = "\u00A9";
console.log(myUnicode);

//The String object is awrapper around the string primitive data type

const foo = new String("foo");
console.log(foo); //Displays:[String:'foo]
console.log(typeof foo);

//You should use string literals unless you specifically need to use a String object, because objects can have counterintuitive behaviour

const firstString = "2 + 2";
console.log(firstString);
console.log(eval(firstString)); //returns 4
const secondString = new String("2 + 2");
console.log(eval(secondString)); //returns [String:'2+2']
console.log(secondString);

let hello = "Hello, World";
let helloLength = hello.length;
hello[0] = "L"; //This has no effect, because strings are immutable
console.log(hello[0]);
