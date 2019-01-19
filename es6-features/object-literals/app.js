const name = "Paul Wechuli";
const title = "Application/Cloud/Data Engineer";
const salary = 1000000;


let dynamicField = 'value';
let myvalue = "some other thing"
const developer = {
  name, //name of property is the same as the variable, hence we can omit one side
  title,
  salary,
  //   print:function(){ //old way to write the function
  //       console.log(`My name is ${this.name} and my title is ${this.title}`)
  //   }
  print() {
    console.log(`My name is ${this.name} and my title is ${this.title}`); //new way
  },
  dynamic(){
console.log(`We are logging ${this.value} which is a dynamic field`)
  },
  status: "intermediate",
  [dynamicField]:myvalue //Dynamic field name, we don't know the field name in advance so we use the square bracket to define it
};

console.log(developer);

//overide a value
developer.salary = 1200000;
console.log(developer);

developer.print();
developer.dynamic();
