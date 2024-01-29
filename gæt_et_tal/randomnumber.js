function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(randomNumber(101));

let returnedNumber = document.getElementById("number");
returnedNumber.innerHTML = randomNumber(101);
