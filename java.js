let taskArray = [];
const listElement = document.getElementById("listOfTask");

if (localStorage.taskObject) {
  taskArray = JSON.parse(localStorage.taskObject);
}
const addButton = document.getElementById("button-add-list");
addButton.addEventListener("click", function () {
  inputElement();
  taskLoop();
});
function inputElement() {
  let inputField = document.getElementById("input-to-do");
  // const taskField = inputField.value;

  taskObject = {
    value: inputField.value,
    complete: false,
  };
  console.log(taskObject);

  taskArray.push(taskObject);
  // taskArray.push(taskField);
  localStorage.taskObject = JSON.stringify(taskArray);
}

function taskLoop() {
  listElement.innerHTML = "";
  for (let task of taskArray) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskDiv");
    taskElement.innerText = task.value;
    listElement.appendChild(taskElement);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    taskElement.appendChild(removeButton);
    removeButton.classList.add("remove");

    const index = taskArray.indexOf(task);

    removeButton.addEventListener("click", () => {
      taskArray.splice(index, 1);

      localStorage.taskObject = JSON.stringify(taskArray);
      taskLoop();
    });

    //old code!!
    // const completeButton = document.createElement("button");
    // completeButton.innerText = "complete";
    // taskElement.appendChild(completeButton);
    // completeButton.classList.add("complete");

    // completeButton.addEventListener("click", function () {
    //   taskElement.style.textDecoration = "line-through";
    // });

    // with this code below i used the help off chatGPT to save my "line-through" with local storage!
    //The code from 43-51 was the code that i did not get help from chat to get reference on what i got help with!!
    //Also got help from a classmate to solve some issues on displaying the array on the screen using a for loop.
    const completeButton = document.createElement("button");
    completeButton.innerText = "complete";
    taskElement.appendChild(completeButton);
    completeButton.classList.add("complete");

    // Check if the task has been completed before and update the style if necessary

    // if (localStorage.getItem(taskElement.innerText)) {
    //   taskElement.style.textDecoration = "line-through";
    // }
    if (localStorage.getItem(task.complete === true)) {
      taskElement.style.textDecoration = "line-through";
    }

    completeButton.addEventListener("click", function () {
      taskElement.style.textDecoration = "line-through";
      task.complete = true;

      // Save the completion state to local storage
      //  localStorage.setItem(taskElement.innerText, "completed");
      localStorage.taskObject = JSON.stringify(taskArray);
    });
  }
}
//what
taskLoop();
