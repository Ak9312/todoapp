let todoList = [];
const MAX_TODO_ITEMS = 6;
let addTask = document.querySelector(".AddTask");

function renderRowContainter() {
  // Clearing OutputContainer
  const appContainer = document.querySelector(".AppContainer");
  const outputContainer = document.querySelector(".OutputContainer");
  appContainer.removeChild(outputContainer);
  const newOutputContainer = document.createElement("div");
  newOutputContainer.classList.add("OutputContainer");
  appContainer.appendChild(newOutputContainer);

  // Generate Row Container based on todoList
  todoList.map((item, index) => {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("RowContainer");
    rowContainer.id = `row_${index}`;
    newOutputContainer.appendChild(rowContainer);
    //Adding Task Display Container
    const taskDisplayContainer = document.createElement("div");
    taskDisplayContainer.classList.add("TaskDisplayContainer");
    const taskName = document.createElement("p");
    taskName.textContent = `${index + 1}. ${item}`;
    taskDisplayContainer.appendChild(taskName);
    rowContainer.appendChild(taskDisplayContainer);

    //Add Task Edit Button Container

    //Add Task Delete Button Container
  });
}

renderRowContainter();

function addTaskHandler() {
  const inputBox = document.querySelector(".InputBox");
  if (inputBox.value === "") {
    alert("Please Enter Task");
    return;
  }
  if (todoList.length === MAX_TODO_ITEMS) {
    alert("Maximum limit of task reached!");
    return;
  }
  todoList.push(inputBox.value);
  renderRowContainter();
}

addTask.addEventListener("click", addTaskHandler);
