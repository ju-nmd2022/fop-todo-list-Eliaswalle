let taskArray = [];
const listElement = document.getElementById("listOfTask");

if (localStorage.taskField) {
  // localStorage.taskField = JSON.stringify(taskArray);
  taskArray = JSON.parse(localStorage.taskField);
}
const addButton = document.getElementById("button-add-list");
addButton.addEventListener("click", function () {
  inputElement();
  taskLoop();
});

function inputElement() {
  let inputField = document.getElementById("input-to-do");
  const taskField = inputField.value;
  // taskArray.push(taskField);

  taskArray.push(taskField);
  localStorage.taskField = JSON.stringify(taskArray);
  console.log(localStorage);
  console.log(taskArray);
}

function taskLoop() {
  listElement.innerHTML = "";
  for (let task of taskArray) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskDiv");
    taskElement.innerText = task;
    listElement.appendChild(taskElement);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    taskElement.appendChild(removeButton);
    removeButton.classList.add("remove");

    const index = taskArray.indexOf(task);

    removeButton.addEventListener("click", () => {
      taskArray.splice(index, 1);
      taskLoop();
    });

    const completeButton = document.createElement("button");
    completeButton.innerText = "complete";
    taskElement.appendChild(completeButton);
    completeButton.classList.add("complete");


    if (completeButton = pressed){
      taskElement.innerText = "Task complete";
    }
  }

}
taskLoop();
