let val;

const today = new Date();
let birthDay = new Date('9-10-1981 11:25:00');
let birthDay2 = new Date('September 10 1981');
let birthday3 = new Date('9/10/1981');



///get month, the returned values are zero based*important

val = today.getMonth();
val=today.getDate();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();

val=today.getTime();




console.log(val);

birthDay.setMonth(2);
birthDay.setDate(12);
birthDay.setFullYear(1986);
birthDay.setHours(3);
birthDay.setMinutes(30);
birthDay.setSeconds(24);

console.log(birthDay);



