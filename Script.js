let todoList = [];
const MAX_TODO_ITEMS = 6;
let currentSelectedIndex = -1;
let addTask = document.querySelector(".AddTask");
let editModalContainer = document.querySelector(".EditModalContainer");
let editModalInput = document.querySelector(".EditModalInput");
let editModalButtonConfirm = document.querySelector(".EditModalButtonConfirm");
let editModalButtonCancel = document.querySelector(".EditModalButtonCancel");

let deleteModalContainer = document.querySelector(".DeleteModalContainer");
let deleteModalInput = document.querySelector(".DeleteModalInput");
let deleteModalButtonConfirm = document.querySelector(
  ".DeleteModalButtonConfirm"
);
let deleteModalButtonCancel = document.querySelector(
  ".DeleteModalButtonCancel"
);

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
    const taskEdit = document.createElement("div");
    taskEdit.classList.add("TaskEditButtonContainer");
    const editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square");

    editButton.id = "taskedit_" + `${index}`;
    editButton.addEventListener("click", editTaskHandler);

    taskEdit.appendChild(editButton);
    rowContainer.appendChild(taskEdit);

    //Add Task Delete Button Container
    const taskDelete = document.createElement("div");
    taskDelete.classList.add("TaskDeleteButtonContainer");
    const deleteButton = document.createElement("button");

    deleteButton.id = "taskDelete_" + `${index}`;
    deleteButton.classList.add("fa-solid", "fa-trash");
    deleteButton.addEventListener("click", deleteTaskHandler);
    taskDelete.appendChild(deleteButton);
    rowContainer.appendChild(taskDelete);
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
  inputBox.value = "";
  renderRowContainter();
}

function editTaskHandler(event) {
  const buttonId = event.target.id;
  currentSelectedIndex = buttonId.split("_")[1];
  editModalContainer.style.display = "block";
  editModalInput.value = todoList[currentSelectedIndex];
}

function editModalButtonConfirmHandler() {
  const newEditedTaskValue = editModalInput.value;
  todoList[currentSelectedIndex] = newEditedTaskValue;
  editModalContainer.style.display = "none";
  renderRowContainter();
}

function editModalButtonCancelHandler() {
  editModalContainer.style.display = "none";
}

function deleteTaskHandler(event) {
  const buttonId = event.target.id;
  currentSelectedIndex = buttonId.split("_")[1];
  deleteModalContainer.style.display = "block";
  deleteModalInput.textContent = todoList[currentSelectedIndex];
}

function deleteModalButtonConfirmHandler() {
  todoList.splice(currentSelectedIndex, 1);
  deleteModalContainer.style.display = "none";
  renderRowContainter();
}

function deleteModalButtonCancelHandler() {
  deleteModalContainer.style.display = "none";
}

addTask.addEventListener("click", addTaskHandler);

editModalButtonCancel.addEventListener("click", editModalButtonCancelHandler);
editModalButtonConfirm.addEventListener("click", editModalButtonConfirmHandler);

deleteModalButtonConfirm.addEventListener(
  "click",
  deleteModalButtonConfirmHandler
);
deleteModalButtonCancel.addEventListener(
  "click",
  deleteModalButtonCancelHandler
);
