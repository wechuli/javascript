//Filter helper

const developers = [
  { name: "Paul", language: "Python", age: 26,experience:2,hourly:15 },
  { name: "June", language: "JavaScript", age: 22,experience:10,hourly:101 },
  { name: "Jessica", language: "C#", age: 31,experience:7,hourly:21 },
  { name: "Frank", language: "JavaScript", age: 26,experience:2.5,hourly:19 },
  { name: "Valentine", language: "Java", age: 25,experience:20,hourly:150 },
  { name: "Cyrus", language: "JavaScript", age: 28,experience:1,hourly:7},
  { name: "Margaret", language: "Ruby", age: 32,experience:4,hourly:35 },
  { name: "Mariah", language: "C", age: 24,experience:6,hourly:87 },
  { name: "Fred", language: "JavaScript", age: 36,experience:11,hourly:120 },
  { name: "Doro", language: "JavaScript", age: 23,experience:0.5,hourly:5 }
];

//Get javascript developers

const javascriptDevelopers = developers.filter(developer => {
  return developer.language === "JavaScript";
});
console.log(javascriptDevelopers);

//Get JavaScript developers under 25 years

const javascriptDevelopers_u25 = developers.filter(developer => {
  return developer.language === "JavaScript" && developer.age <= 25;
});

console.log(javascriptDevelopers_u25);


//JavaScript developers with more than 2 years experience but hourly less than $100

const javaNinja = developers.filter(developer=>{
    return developer.language === 'JavaScript' && developer.experience >= 2 && developer.hourly <= 100
});

console.log(javaNinja)
