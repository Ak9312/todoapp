let todoList = [];
const MAX_TODO_ITEMS = 6;
let addTask = document.querySelector(".AddTask");
let confirmDelete = document.querySelector(".DeleteConfirm");
let deleteItem = document.querySelector(".DeleteBody")
let deleteConfirmButton = document.querySelector(".ConfirmDelete")
let deleteCancelButton = document.querySelector(".CancelDelete")
let editItem = document.querySelector(".EditConfirm");
let editValue = document.querySelector(".EditText");
let editConfirmButton = document.querySelector(".ConfirmEdit")
let editCancelButton = document.querySelector(".CancelEdit")


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
    editButton.textContent = "Edit";
    editButton.id = "taskedit_" + `${index}`;
    taskEdit.appendChild(editButton);
    rowContainer.appendChild(taskEdit);
    //Add Task Delete Button Container
    const taskDelete = document.createElement("div");

    taskDelete.classList.add("TaskDeleteButtonContainer");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "taskDelete_" + `${index}`;
    taskDelete.appendChild(deleteButton);
    rowContainer.appendChild(taskDelete);

deleteButton.addEventListener("click", ()=> {
  confirmDelete.style.display = "block";
  deleteItem.textContent =  ` ${item}`;
})

deleteCancelButton.addEventListener("click", () => {
  confirmDelete.style.display = "none";

})

editButton.addEventListener("click", () => {
  editItem.style.display = "block";
  editValue.value =  ` ${item}`;
})


editCancelButton.addEventListener("click", () => {
  editItem.style.display = "none";

})


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
  inputBox.value = "";
}

addTask.addEventListener("click", addTaskHandler);


