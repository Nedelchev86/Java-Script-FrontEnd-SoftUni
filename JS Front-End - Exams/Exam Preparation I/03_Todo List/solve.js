// TODO
function attachEvents() {}

attachEvents();

const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

let allTasks;
let currTask;
const todoList = document.querySelector("#todo-list");
const loadButton = document.querySelector("#load-button");
loadButton.addEventListener("click", loadAllTask);
const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addTask);

const taskTitle = document.querySelector("#title");

async function loadAllTask(e) {
    if (e) {
        e.preventDefault();
    }
    todoList.innerHTML = "";
    const result = Object.values(await (await fetch(BASE_URL)).json());
    allTasks = result;

    result.forEach((element) => {
        const li = document.createElement("li");
        li.id = element._id;
        const span = document.createElement("span");
        span.textContent = element.name;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", deleteTask);
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editTask);

        li.appendChild(span);
        li.appendChild(removeBtn);
        li.appendChild(editBtn);
        todoList.appendChild(li);
    });
}

async function addTask(e) {
    e.preventDefault();

    if (taskTitle.values !== "") {
        await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({name: taskTitle.value}),
        });
    }
    console.log("test2");
    loadAllTask(e);
}

async function deleteTask() {
    const taskID = this.parentElement.id;
    await fetch(`${BASE_URL}${taskID}`, {
        method: "DELETE",
    });
    loadAllTask();
}

function editTask() {
    const taskID = this.parentElement.id;
    const currElement = allTasks.find((x) => x._id === taskID);
    document.getElementById(taskID).querySelector("span").remove();
    const inputField = document.createElement("input");
    inputField.value = currElement.name;
    document.getElementById(taskID).prepend(inputField);
    document.getElementById(taskID).querySelectorAll("button")[1].remove();
    const submitBtn = document.createElement("button");

    submitBtn.textContent = "Submit";
    document.getElementById(taskID).appendChild(submitBtn);
    submitBtn.addEventListener("click", submitTask);
}

async function submitTask() {
    const taskID = this.parentElement.id;
    const currElement = allTasks.find((x) => x._id === taskID);
    console.log(currElement);
    const currentSubmit = document.getElementById(taskID).querySelector("input");
    await fetch(`${BASE_URL}${taskID}`, {
        method: "PATCH",
        body: JSON.stringify({name: currentSubmit.value, _id: currElement._id}),
    });
    loadAllTask();
}
