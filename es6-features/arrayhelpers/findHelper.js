//Classical js example

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

//find object with username 'Ule Msee'

let account;

for (let i = 0; i < accounts.length; i++) {
  if (accounts[i].username === "Ule Msee") {
    account = accounts[i];
    break;
  }
}
console.log(account);

//Using es6

let eaccount = accounts.find(account => {
  return account.username === "Ule Msee";
});


console.log(eaccount)