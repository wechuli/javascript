const person={
    firstName:'Paul',
    lastName:'Wechuli',
    yearOfBirth: new Date('1-5-1993'),
    email:'paul@ilab.com',
    hobbies:['tech','music','programming','data','cloud'],
    address:{
        city:'Nairobi',
        country:'Kenya'
    },
    getAge:function(){
        return new Date()-this.yearOfBirth;
    }
};

let val;
val=person.firstName;
//or
val=person['firstName'];

//acessing the object
console.log(person['lastName']);
console.log(person.hobbies[0]);
console.log(person.getAge());
console.log(person.address['city']);
console.log(person.yearOfBirth);

console.log(new Date().getFullYear())
//we can access other properties withing the object using the this keyword

//array of objects

const people=[
    {name:'John',age:30},
    {name:'Mike',age:23},
    {name:'Nancy', age:50}
]

for(let i=0;i<people.length;i++){
    console.log(people[i]);
}
