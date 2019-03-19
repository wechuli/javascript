//We're building a voting application where we present multiple options and allow users to click on different buttons, in a sense 'making a vote'.At the end we would like to see how many votes each item reeived

//User can only vote on one item

const voteDogs = (function() {
  let votes = 0;
  function incrementvotes() {
    votes++;
    // console.log(dogVotes);
  }
  function showStats() {
    console.log(`Dogs votes: ${votes}`);
  }
  return [incrementvotes, showStats]; //we can also return an array
  //   return {
  //       vote:incrementDogsVotes,
  //       stats:showStats
  //   }
})();

/**
 * 1.Block A is ran only once
 * Block A sets dogVotes to 0
 * Block A sets incrementDogsVotes()(*the inner function) to voteDogs
 * This is called a JavaScript closure*
 *
 */

const voteCats = (function() {
  let votes = 0;
  function incrementvotes() {
    votes++;
    // console.log(dogVotes);
  }
  function showStats() {
    console.log(`Cat votes: ${votes}`);
  }
  return [incrementvotes, showStats]; //we can also return an array
  //   return {
  //       vote:incrementDogsVotes,
  //       stats:showStats
  //   }
})();

const voteDolphins = (function() {
  let votes = 0;
  function incrementvotes() {
    votes++;
    // console.log(dogVotes);
  }
  function showStats() {
    console.log(`Dolphin votes: ${votes}`);
  }
  return [incrementvotes, showStats]; //we can also return an array
  //   return {
  //       vote:incrementDogsVotes,
  //       stats:showStats
  //   }
})();

function generateVote(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Simulate voting session
const NUM_OF_PEOPLE = 1000000;
const votingOptions = [voteDogs[0], voteCats[0], voteDolphins[0]];
for (let i = 0; i < NUM_OF_PEOPLE; i++) {
  const getVote = generateVote(0, 2);
  votingOptions[getVote]();
}
voteDogs[1]();
voteCats[1]();
voteDolphins[1]();
