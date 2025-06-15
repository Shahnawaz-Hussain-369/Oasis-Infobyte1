const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = taskText;
    taskInput.setAttribute("readonly", "readonly");

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            taskInput.removeAttribute("readonly");
            taskInput.focus();
            editBtn.textContent = "Save";
        } else {
            taskInput.setAttribute("readonly", "readonly");
            editBtn.textContent = "Edit";
        }
    });

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li);
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInput);
    li.appendChild(actions);

    todoList.appendChild(li);
    input.value = "";
}