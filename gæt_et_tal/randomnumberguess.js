
// prompt("Guess a number between 1 and 100:");

//function guessedNumber() {

}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(randomNumber(101));

let returnedNumber = document.getElementById("number");
returnedNumber.innerHTML = randomNumber(101);

let guessedNumber = "";

prompt(guessedNumber);

if (randomNumber === parseInt(guessedNumber)) {
  console.log("You guessed it!");
} else if (randomNumber < parseInt(guessedNumber)) {
  console.log("Too high!");
} else if (randomNumber > parseInt(guessedNumber)) {
  console.log("Too low!");
}
