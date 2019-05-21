function splitInteger(num, parts) {
  let remainder = num % parts;
  let quotient = Math.floor(num / parts);
  let lowerElements = [];
  let higherElements = [];

  for (let i = 0; i < parts - remainder; i++) {
    lowerElements.push(quotient);
  }
  for (let i = 0; i < remainder; i++) {
    higherElements.push(quotient + 1);
  }
  return [...lowerElements,...higherElements];
}

console.log(splitInteger(20, 6));
