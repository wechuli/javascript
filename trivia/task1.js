function splitInteger(num, parts) {
  let remainder = num % parts;
  let result = [];

  for (let i = 0; i < parts; i++) {
    let single = (num - remainder) / parts;
    result.push(single);
  }
  result[parts - 1] += remainder;
  return result;
}

console.log(splitInteger(4000, 37));
