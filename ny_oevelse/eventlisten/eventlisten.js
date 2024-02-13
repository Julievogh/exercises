/*
document.querySelector("button").addEventListener("click", btn_klik);

function btn_klik(evt) {
  console.log("evt", evt.target);
  console.log("evt", evt.currentTarget);
  console.log("evt", evt.x);
  console.log("evt", evt.y);
  console.log("evt", evt.altKey);
}

*/

/*
document.querySelector("ul").addEventListener("pointerdown", ul_klik);

function ul_klik(evt) {
  console.log("evt", evt.target);
  console.log("evt", evt.currentTarget);
}

*/

document.querySelector("button").addEventListener("click", btnKlik);

function btnKlik() {
  document
    .querySelector("#ball")
    .addEventListener("animationEnd", animationIterationANDEnd);
  console.log("btnKlik");

  document
    .querySelector("#ball")
    .addEventListener("animationIteration", animationIterationANDEnd);
  document.querySelector("#ball").classList.add("ani");
}

function animationIterationANDEnd(evt) {
  console.log("animationIterationANDEnd", evt.type);
  if (evt.type === "animationEnd") {
    document.querySelector("#ball").classList.remove("ani");
  }
}
