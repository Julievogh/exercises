// Skaber funktionen randomNumber med en parameter max.

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Indsætter nummeret i html med ID "number"

let returnedNumber = document.getElementById("number");
returnedNumber.innerHTML = randomNumber(101);

// Når man klikker button så kommer der et nyt nummer

let newNumberButton = document.getElementById("newnumber_button");
newNumberButton.addEventListener("click", randomNumberClick);

function randomNumberClick(max) {
  let newRandomNumber = randomNumber(101);
  returnedNumber.innerHTML = newRandomNumber;
  console.log(newRandomNumber);
}
