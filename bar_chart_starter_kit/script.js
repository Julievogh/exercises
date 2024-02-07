const list = document.querySelector("ul");

const li = document.createElement("li");
const valueArr = [];
li.style.setProperty("--height", "10");
list.appendChild(li);

setInterval(genererSoejle, 1000);

function genererSoejle() {
  valueArr.push(Math.round(Math.random() * 100));
  console.log(valueArr);
  const li = document.createElement("li");
  li.style.setProperty("--height", "10");
  list.appendChild(li);

  console.log("genererSoejle");
}

/*
//Min version

const list = document.querySelector("ul");

function addNewBar(height) {
  const li = document.createElement("li");
  li.style.setProperty("--height", height);
  list.appendChild(li);

  if (list.children.length > 20) {
    list.removeChild(list.firstElementChild);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function listOfBars() {
  let newBar = randomNumber();
  addNewBar(newBar);
}

let myArray = [];

const barsBarsBars = setInterval(listOfBars, 1000);
*/
