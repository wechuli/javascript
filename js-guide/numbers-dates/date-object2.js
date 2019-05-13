//Methods of the Date object
//The Date object methods for handling dates and times fall into these broad categories
//set- methods
//get -methods
//to methods for returning string values from Date objects
//parse and UTC methods, for parsing Date strings

let Xmas93 = new Date("December 25,1995");
console.log(Xmas93);
console.log(Xmas93.getDay());
console.log(Xmas93.getMonth());
console.log(Xmas93.getFullYear());

// The getTime and setTime methods are useful for comparing dates. The getTime method returns the number of milliseconds since January 1, 1970,00:00:00 for a Date object

let today = new Date();
let endYear = new Date(1993, 11, 31, 23, 59, 59, 999); //set day and month
endYear.setFullYear(today.getFullYear()); //set year to this year
let msperDay = 24 * 60 * 60 * 1000; //Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msperDay;
console.log(daysLeft);
console.log(Math.floor(daysLeft));

//The parse method is useful for assigning values from date strings to existing Date objects

let IPOdate = new Date();
IPOdate.setTime(Date.parse("August 9,1995"));
console.log(IPOdate);
