//JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications.The Date Object has a large number of methods for setting, getting and manipulating dates. It does not have any properties.

//JS stores dates as the number of milliseconds since January 1, 1970, 00:00:00 with a Unix timestamp being the number of seconds since January 1, 1970, 00:00:00

let dateObjectName = new Date(); //calling Date without the new keyword returns a string representing the current date and time
let dateObjectName2 = Date();
//The parameters in the preceding syntax can be any of the following:

// Nothing: creates today's date and time. For example, today = new Date();.
// A string representing a date in the following form: "Month day, year hours:minutes:seconds." For example, var Xmas95 = new Date("December 25, 1995 13:30:00"). If you omit hours, minutes, or seconds, the value will be set to zero.
// A set of integer values for year, month, and day. For example, var Xmas95 = new Date(1995, 11, 25).
// A set of integer values for year, month, day, hour, minute, and seconds. For example, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.

console.log(dateObjectName);
console.log(dateObjectName2);
console.log(typeof dateObjectName);
console.log(typeof dateObjectName2);
