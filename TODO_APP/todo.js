const inputBox = document.getElementById("input_box");

const listContainer = document.getElementById("list_container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let createLi = document.createElement("li");
    createLi.textContent = inputBox.value;
    listContainer.appendChild(createLi);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    createLi.appendChild(span);
    saveData();
  }
}

function addTaskClick() {
  document.querySelector(".addTask_btn").addEventListener("click", addTask);
}

addTaskClick();

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// gemmer data i browser (tilføjet de andre funktioner)

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();
