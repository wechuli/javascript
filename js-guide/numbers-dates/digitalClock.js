//The following function returns the time in the format of a digital clock

function JSClock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  console.log(temp);
}

setInterval(JSClock, 1000);
