function AddTodo() {
  // Taking Elements From Input
  const input = document.querySelector("#new-task-input");
  const listCont = document.querySelector("#tasks");
  const task = input.value;
  document.getElementById("tas").classList.add("hidden");
  if (input.value === "") {
    alert("please Enter a Todo")
    return;
  }

  //Creating Element o Append in HTML
  const li = document.createElement("li");
  const taskInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const actionsDiv = document.createElement("div");
  taskInput.value = task;

  //Adding Classlist to Created Elements
  li.classList.add("content");
  taskInput.classList.add("text");
  editButton.classList.add("edit");
  deleteButton.classList.add("delete");
  actionsDiv.classList.add("action");

  // Setting Attribute
  taskInput.setAttribute("readonly", "readonly");

  // Appending Childs
  listCont.appendChild(li);
  li.appendChild(taskInput);
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);
  li.appendChild(actionsDiv);

  //Assigning Value
  editButton.innerText = "Edit";
  deleteButton.innerText = "Delete";
  taskInput.type = "text";

  //Clearing the Input value
  input.value = "";

  //Adding Event Listners
  editButton.addEventListener("click", (e) => {
    if (editButton.innerText.toLowerCase() == "edit") {
      editButton.innerText = "Save";
      taskInput.removeAttribute("readonly");
      taskInput.focus();
    } else {
      editButton.innerText = "Edit";
      taskInput.setAttribute("readonly", "readonly");
    }
  });
  deleteButton.addEventListener("click", (e) => {
    listCont.removeChild(li);
  });
}
