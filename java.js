let taskArray = [];

const addButton = document.getElementById("button-add-list");
addButton.addEventListener("click", function () {
  inputElement();
});

function inputElement() {
  let inputField = document.getElementById("input-to-do");
  const taskField = inputField.value;
  taskArray.push(taskField);
}
console.log();
// function inputElement() {
//   const listOfTask = document.getElementById("input-to-do");
//   listOfTask.innerText = taskArray;
// }

// function inputTask() {
//   let valueOfTask = document.getElementById("input-to-do").value;
//   taskArray.push(valueOfTask);
//   document.getElementById("listOfTask").innerHTML = taskArray;
// }
