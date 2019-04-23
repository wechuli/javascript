function createPet(name) {
  let sex;
  return {
    setName(newName) {
      name = newName;
    },
    getName() {
      return name;
    },
    getSex() {
      return sex;
    },
    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      } else {
        sex = "unknown";
      }
    }
  };
}

const pet = createPet("Sandack");
console.log(pet.getName());

pet.setName("Oliver");
pet.setSex("female");
console.log(pet.getSex());
console.log(pet.getName());

//In the code above, the name variable of the outer function is accessible to the inner functions and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner function act as safe stores for the outer arguments and variables.

//Pitfalls to watch out for

/**
 * Watch out
 * If a enclosed function defines a variable with the same name as the name of a variable in the outer scope, there is no way to refer to the varible in the outer scope again
 *
 */
