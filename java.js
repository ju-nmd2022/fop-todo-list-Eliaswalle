const taskList = document.getElementById("listOfTask");

const addButton = document.getElementById("button-add-list");
addButton.addEventListener("click", function () {
  saveToDoList();
});

function saveToDoList() {
  const inputElement = document.getElementById("input-to-do");
  let saveToDoList = {
    input: inputElement.value,
  };
}
function displayToDoList() {
  if (localStorage.inputElement !== undefined) {
    let inputArray = JSON.parse(localStorage.inputElement);
  }
  for (let value of inputArray) {
    const item = document.createElement("li");
    item.innerText = value;
  }
}
