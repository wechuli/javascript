//map helper

const numbers = [5, 10, 15, 123, 22];
console.log(numbers);

const newnumbers = numbers.map(number => number * 2);

console.log(newnumbers);

const accounts = [
  {
    username: "Paul",
    favoriteColor: "Red",
    age: 25
  },
  {
    username: "Ule Msee",
    favoriteColor: "Brown",
    age: 29
  },
  {
    username: "Janet",
    favoriteColor: "Purple",
    age: 19
  },
  {
    username: "Coder",
    favoriteColor: "white",
    age: 87
  },
  {
    username: "Ule Msee",
    favoriteColor: "Blue",
    age: 1000
  }
];

const detailaccount = accounts.map(account => {
  return `${account.username} ${account.favoriteColor} ${account.age}`;
});

console.log(detailaccount);

const airlineData = [
  { carrier: "Norwegian", destination: "Paris", price: 150 },
  { carrier: "Ryania", destination: "Paris", price: 75 },
  { carrier: "EasyJet", destination: "Paris", price: 100 },
  { carrier: "Wizzair", destination: "Paris", price: 60 }
];

const prices = airlineData.map(data => {
  return data.price;
});

console.log(`Prices are ${prices}`);
