const mobileTeam = ["John", "Ben"];
const desktopTeam = ["Elsa", "Beth"];
const webTeam = ["Nick", "Britney", "Mary"];

//Using concat
const allDevelopers = mobileTeam.concat(desktopTeam).concat(webTeam);

console.log(allDevelopers);

//Using the spread operator and even adding another item on the array

const allDevsSpread = [...mobileTeam, ...desktopTeam, ...webTeam, "Paul"];
console.log(allDevsSpread);

//Spread and REST combined

const buildTeam = (...developers) => {
  console.log("Developers", developers);
  if (developers.indexOf("Mark") < 0) {
    return [...developers, "Mark"];
  } else {
    return developers;
  }
};

const composedTeam = buildTeam("Jessica", "Brad", "Mildred",'Mark');
console.log(composedTeam);
