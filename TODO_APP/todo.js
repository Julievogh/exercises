// Henter input-boksen, listen og listen med slettede opgaver fra HTML
const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
const deletedListContainer = document.getElementById("deleted_list_container");

// Funktion til at tilføje en ny opgave
function addTask() {
  // Tjekker om input-boksen er tom
  if (inputBox.value === "") {
    alert("Indtast venligst en opgave");
  } else {
    // Opretter et nyt listeelement og tilføjer det til listen
    let createLi = document.createElement("li");
    createLi.textContent = inputBox.value;
    listContainer.appendChild(createLi);
    inputBox.value = "";
    // Opretter en slet-knap og tilføjer den til listeelementet
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    createLi.appendChild(span);
    span.addEventListener("click", function (event) {
      moveToDeletedList(event.target.parentElement);
    });
    // Gemmer ændringerne i local storage
    saveData();
  }
}

// Funktion til at flytte en opgave til listen med slettede opgaver
function moveToDeletedList(task) {
  if (task.parentElement) {
    // Tjekker om opgaven er på den oprindelige liste
    let isOnFirstUl = task.parentElement.id === "list_container";
    task.remove();
    // Kopierer opgaven og tilføjer en passende knap til den
    let deletedTask = task.cloneNode(true);
    let span = document.createElement("span");
    span.innerHTML = isOnFirstUl ? "\u21E7" : "\u00d7";
    span.classList.add(isOnFirstUl ? "restoreTask_btn" : "deleteTask_btn");
    deletedTask.appendChild(span);
    deletedListContainer.appendChild(deletedTask);
    // Lytter efter klik på knappen og udfører passende handling
    span.addEventListener("click", function (event) {
      event.stopPropagation();
      if (isOnFirstUl) {
        restoreTask(event.target.parentElement);
      } else {
        moveToDeletedList(event.target.parentElement);
      }
    });
    // Gemmer ændringerne i local storage
    saveData();
  }
}

// Funktion til at gendanne en slettet opgave
function restoreTask(task) {
  task.remove();
  let taskText = task.textContent.trim();
  let taskName = taskText.replace("⇧", "").replace("\u00d7", "").trim();
  let li = document.createElement("li");
  li.textContent = taskName;
  if (task.classList.contains("checked")) {
    li.classList.add("checked");
  }
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  span.addEventListener("click", function (event) {
    moveToDeletedList(event.target.parentElement);
  });
  // Gemmer ændringerne i local storage
  saveData();
}

// Skjuler listen med slettede opgaver som standard
deletedListContainer.style.display = "none";

// Funktion til at skifte mellem at vise og skjule listen med slettede opgaver
function toggleDeletedTasks() {
  if (deletedListContainer.style.display === "none") {
    deletedListContainer.style.display = "block";
    const deletedTasks = deletedListContainer.querySelectorAll("li");
    const message = document.getElementById("deleted_tasks_message");
    if (deletedTasks.length === 0) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  } else {
    deletedListContainer.style.display = "none";
    document.getElementById("deleted_tasks_message").style.display = "none";
  }
}

// Henter knappen til at slette alle opgaver
const deleteListButton = document.querySelector(".delete_list");
deleteListButton.style.display = "none";

// Funktion til at skifte knappen til at slette alle opgaver
function toggleDeleteListButton() {
  deleteListButton.style.display =
    deleteListButton.style.display === "none" ? "block" : "none";
}

// Henter knappen til at åbne eller lukke listen med slettede opgaver og tilføjer en event listener
const deleteTasksButton = document.querySelector(".deleted_tasks button");
deleteTasksButton.addEventListener("click", function () {
  toggleDeletedTasks();
  toggleDeleteListButton();

  // Ændrer teksten på knappen alt efter om listen med slettede opgaver er åben eller lukket
  const buttonText = deleteTasksButton.textContent.trim();
  if (buttonText === "Åbn slettede") {
    deleteTasksButton.textContent = "Luk slettede";
  } else {
    deleteTasksButton.textContent = "Åbn slettede";
  }
});

// Funktion til at tilføje en ny opgave ved klik på knappen
function addTaskClick() {
  document.querySelector(".addTask_btn").addEventListener("click", addTask);
}

// Funktion til at gendanne en slettet opgave ved klik på knappen
function restoreTaskClick() {
  deletedListContainer.addEventListener("click", function (event) {
    if (
      event.target.tagName === "SPAN" &&
      event.target.classList.contains("restoreTask_btn")
    ) {
      restoreTask(event.target.parentElement);
    }
  });
}

// Lytter efter klik på knappen til at tilføje en ny opgave
addTaskClick();

// Lytter efter klik på knappen til at gendanne en slettet opgave
restoreTaskClick();

// Lytter efter klik på opgaver i listen og gemmer ændringerne i local storage
listContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("checked");
    saveData();
  } else if (clickedElement.tagName === "SPAN") {
    const parentLi = clickedElement.closest("li");
    if (parentLi) {
      moveToDeletedList(parentLi);
    }
  }
});

// Funktion til at slette alle slettede opgaver og fjerne dem fra local storage
function clearDeletedTasks() {
  deletedListContainer.innerHTML = "";
  localStorage.removeItem("deletedListData");
}

// Lytter efter klik på knappen til at slette alle slettede opgaver
document
  .querySelector(".delete_list")
  .addEventListener("click", clearDeletedTasks);

// Funktion til at gemme data i local storage
function saveData() {
  localStorage.setItem("listData", listContainer.innerHTML);
  localStorage.setItem("deletedListData", deletedListContainer.innerHTML);
}

// Funktion til at vise gemt data fra local storage
function showList() {
  listContainer.innerHTML = localStorage.getItem("listData") || "";
  deletedListContainer.innerHTML =
    localStorage.getItem("deletedListData") || "";
}

// Viser gemte data fra local storage når siden indlæses
showList();
