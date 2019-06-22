// Objects can also be created using the Object.create() method. This method can be very useful because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function

//Animal properties and method encapsulation

const Animal = {
  type: "Invertebrates", //Default value of peoperties
  displaytype() {
    console.log(this.type);
  }
};

//create a new animal type called animal1
const animal1 = Object.create(Animal);

console.log(Animal);
console.log(animal1);
animal1.displaytype();

//Create new animal type called Fishes

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displaytype();
