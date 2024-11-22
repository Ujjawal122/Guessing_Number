let randomNumber = parseInt(Math.random() * 100 + 1);
//demical value
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");

const lastSlot = document.querySelector(".lastResult");
const LowOrHI = document.querySelector(".lowOrHI");

const startOver = document.querySelector(".resuktParas");

const p = document.createElement("p");

let prevGuess = [];
let NumGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validguess(guess);
  });
}

function validguess(guess) {
  //check the valid number by the user
  if (isNaN(guess)) {
    alert("Please enter the valid number");
  } else if (guess < 1) {
    alert("Please enter the greater than 1");
  } else if (guess > 100) {
    alert("Please enter the number less then 100");
  } else {
    prevGuess.push(guess);
    if (NumGuess === 11) {
      displayguess(guess);
      displaymsg(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check the number is high and low
  if (guess === randomNumber) {
    displaymsg("You guessed it RIGHT!");
    endGame();
  } else if (guess < randomNumber) {
    displaymsg("Number is TOO low");
  } else if (guess > randomNumber) {
    displaymsg("Number is TOO High");
  }
}

function displayguess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  NumGuess++;
  lastSlot.innerHTML = `${11 - NumGuess}`;
}

function displaymsg(msg) {
  //display the user input empty and add the number is less
  LowOrHI.innerHTML = `<h2>${msg}</h2>`;
}
function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessSlot.innerHTML = "";
    lastSlot.innerHTML = `${11 - NumGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
