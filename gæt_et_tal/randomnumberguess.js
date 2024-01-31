"use strict";

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

let guess = 1;

let currentRandomNumber = randomNumber(101);
let returnedNumber = document.getElementById("number");

let tryAgain = (document.getElementById("tryagain").onclick = function () {
  location.reload();
});

console.log(currentRandomNumber);

document.getElementById("submitguess").onclick = function (event) {
  event.preventDefault();

  let x = document.getElementById("guessField").value;
  let changeElement = document.getElementById("box");
  let resultText = document.getElementById("resultText");

  if (parseInt(x) === currentRandomNumber) {
    changeElement.id = "box2";

    resultText.innerHTML = "SÅDAN! Du gættede det i " + guess + " forsøg!";
  } else if (parseInt(x) < currentRandomNumber) {
    guess++;
    resultText.innerHTML = "Prøv et højere nummer!";
  } else if (parseInt(x) > currentRandomNumber) {
    guess++;
    resultText.innerHTML = "Prøv et lavere nummer!";
  }
};
