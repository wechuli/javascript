/*
GAME FUNCTION
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again

*/

//Game values

let min = 1,
  max = 10,
  winningNum = getWinningNum(min,max),
  guessesLeft = 3;

//UI elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input");

let message = document.querySelector(".message");

//Assign UI mean and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className == "play-again") {
    window.location.reload();
  }
});

//Create Event Listener for BTN

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  //Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, You Win`);
  } else {
    //Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}`
      );
    } else {
      //Game continue, anwer wrong

      //Change border color
      guessInput.style.borderColor = "red";

      //Clear Input
      guessesLeft.value = "";

      //Telle user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  //Change border color

  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  //Set Message
  setMessage(msg, color);

  //Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//Get winning number
function getWinningNum(min, max) {

  return Math.floor(Math.random() * (max-min+1)+min);
}

//Set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
