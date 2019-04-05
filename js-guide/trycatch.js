// The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it.

//The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.

function getMonthName(monthNo) {
  let mo = monthNo - 1;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo";
  }
}

try {
  monthName = getMonthName(111);
  console.log(monthName);
} catch (error) {
  console.log(error);
}
// The catch block specifies an identifier that holds the value specified by the throw statement; you can use this identifier to get
// information about the exception that was thrown JavaScript creates this identifier when the catch block is entered; the identifier lasts obly for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available

//You can use the finally block to make your script fail gracefully when an exception occurs; 

openMyFile();
try {
  writeMyFile(theData); //This may throw an error
} catch(e) {  
  handleError(e); // If we got an error we handle it
} finally {
  closeMyFile(); // always close the resource
}