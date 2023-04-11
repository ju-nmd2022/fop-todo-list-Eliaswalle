let taskArray = [];

const addButton = document.getElementById("button-add-list");
addButton.addEventListener("click", function () {
  inputElement();
});

function inputElement() {
  let inputField = document.getElementById("input-to-do");
  const taskField = inputField.value;
  // taskArray.push(taskField);
  if (localStorage.taskField === undefined) {
    localStorage.taskField = JSON.stringify(taskArray);
  }
  let taskArray = JSON.parse(localStorage.taskField);
  taskArray.push(taskField);
  localStorage.taskField = JSON.stringify(taskArray);

  console.log(taskArray);
  console.log(localStorage);
}

// function inputElement() {
//   const listOfTask = document.getElementById("input-to-do");
//   listOfTask.innerText = taskArray;
// }

// function inputTask() {
//   let valueOfTask = document.getElementById("input-to-do").value;
//   taskArray.push(valueOfTask);
//   document.getElementById("listOfTask").innerHTML = taskArray;
// }
