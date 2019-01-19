//Classical JS Example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

/*
1.Initial value  = 0 {sum}
2.current element =1 {number}

0+1
1)sum=(0+1)=1
2)current element = 2

1+2
1)sum = (1+2)=3
2)current element = 3

*/
console.log("Sum", sum);

let othernumber = [5, 10, 23, 19, 3, 23, 4];

const product = othernumber.reduce((product, number) => {
  return product * number;
}, 1);

console.log("Product", product);

const developers = [
  { name: "Paul", language: "Python", age: 26, experience: 2, hourly: 15 },
  {
    name: "June",
    language: "JavaScript",
    age: 22,
    experience: 10,
    hourly: 101
  },
  { name: "Jessica", language: "C#", age: 31, experience: 7, hourly: 21 },
  {
    name: "Frank",
    language: "JavaScript",
    age: 26,
    experience: 2.5,
    hourly: 19
  },
  { name: "Valentine", language: "Java", age: 25, experience: 20, hourly: 150 },
  { name: "Cyrus", language: "JavaScript", age: 28, experience: 1, hourly: 7 },
  { name: "Margaret", language: "Ruby", age: 32, experience: 4, hourly: 35 },
  { name: "Mariah", language: "C", age: 24, experience: 6, hourly: 87 },
  {
    name: "Fred",
    language: "JavaScript",
    age: 36,
    experience: 11,
    hourly: 120
  },
  { name: "Doro", language: "JavaScript", age: 23, experience: 0.5, hourly: 5 }
];

const developerHours = developers.reduce((value, developer) => {
  value.push(developer.hourly);
  return value;
}, []);

console.log(developerHours)