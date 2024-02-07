document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt) {
  console.log(evt.currenTarget);

// Vælg filter

if (evt.currenTarget.dataset.filter === "*") {
  showTheseVehicles(vehicles);
} else if (evt.currenTarget.dataset.filter === "electric") {
  showTheseVehicles(vehicles.filter(isElectric));


} else if(evt.currenTarget.dataset.filter === "more_than_seats") {
  showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));



} else if(evt.currenTarget.dataset.filter === "electric_owned_by_j") {
  showTheseVehicles(vehicles.filter(jons_vehicle));

}


const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);



function isElectric(vehicle) {
  if(vehicle.isElectric === true) {
    return vehicle;
  }
}

function hasMoreThanTwoSeats(vehicle) {
  if (vehicle.passengers > 1) {
    return vehicle;
  }
}

function blabla() {

}


function showTheseVehicles(arr) {
  ulPointer.innerHTML = "";
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? "X" : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem === undefined ? "" : "X"}</li>`;
  });
}}


// Nullish coalicion