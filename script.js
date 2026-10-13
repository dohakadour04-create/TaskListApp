const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;

    completeButton.textContent = "Complete";
    deleteButton.textContent = "Delete";

    completeButton.addEventListener("click", function () {
        taskName.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskName);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
