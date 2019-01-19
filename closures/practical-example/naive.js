//We're building a voting application where we present multiple options and allow users to click on different buttons, in a sense 'making a vote'.At the end we would like to see how many votes each item reeived

//User can only vote on one item

let dogVotes = 0;
let catsVotes = 0;
let dolphinVotes = 0;

//Button for voting for dogs
function voteDogs() {
  dogVotes++;
}
//Button for voting for cats
function voteCats() {
  catsVotes++;
}
//Button for voting for dolphin
function voteDolphins() {
  dolphinVotes++;
}
function generateVote(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Simulate voting session
const NUM_OF_PEOPLE = 1000000;
const votingOptions = [voteDogs, voteCats, voteDolphins];
for (let i = 0; i < NUM_OF_PEOPLE; i++) {
  const getVote = generateVote(0, 2);
  votingOptions[getVote]();
}
console.log(`Dog Votes ${dogVotes}`);
console.log(`Cat Votes ${catsVotes}`);
console.log(`Dolphin Votes ${dolphinVotes}`);
