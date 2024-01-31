// prompt("Guess a number between 1 and 100:");

//function guessedNumber() {

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

let guess = 1;

// Generate a random number initially
let currentRandomNumber = randomNumber(101);
let returnedNumber = document.getElementById("number");

let tryAgain = (document.getElementById("tryagain").onclick = function () {
  location.reload();
});

console.log(currentRandomNumber);

document.getElementById("submitguess").onclick = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let x = document.getElementById("guessField").value;
  let resultText = document.getElementById("resultText");

  if (parseInt(x) === currentRandomNumber) {
    resultText.innerHTML = "You guessed it right in " + guess + " GUESSES!";
  } else if (parseInt(x) < currentRandomNumber) {
    guess++;
    resultText.innerHTML = "Try a higher number!";
  } else if (parseInt(x) > currentRandomNumber) {
    guess++;
    resultText.innerHTML = "Try a lower number!";
  }
};

/*

let guessedNumber = "";

prompt(guessedNumber);

if (randomNumber === parseInt(guessedNumber)) {
  console.log("You guessed it!");
} else if (randomNumber < parseInt(guessedNumber)) {
  console.log("Too high!");
} else if (randomNumber > parseInt(guessedNumber)) {
  console.log("Too low!");
}
*/
