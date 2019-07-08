function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);
}

const createClock = setInterval(displayTime, 1000);
