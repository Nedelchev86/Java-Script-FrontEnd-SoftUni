function attachEvents() {}

attachEvents();

let allObjects = {};
let currObj = "";

const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

const loadBtn = document.querySelector("#load-board-btn");
loadBtn.addEventListener("click", loadAllTasks);

const createTaskBtn = document.querySelector("#create-task-btn");
createTaskBtn.addEventListener("click", createTask);

const allInputFields = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
};

const content = {
    ToDo: "Move to In Progress",
    "In Progress": "Move to Code Review",
    "Code Review": "Move to Done",
    Done: "Close",
};

const nextStatus = {
    ToDo: "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
};

const containers = {
    ToDo: document.querySelector("#todo-section>ul"),
    "In Progress": document.querySelector("#in-progress-section>ul"),
    "Code Review": document.querySelector("#code-review-section>ul"),
    Done: document.querySelector("#done-section>ul"),
};

function createDomElement(type, parrent, textContent, classList, id, attributes, useInnerHtml) {
    const element = document.createElement(type);

    if (useInnerHtml && textContent) {
        element.innerHTML = textContent;
    } else {
        if (textContent && type !== "input") {
            element.textContent = textContent;
        }
    }
    if (textContent && type === "input") {
        element.value = textContent;
    }

    if (classList && classList.length > 0) {
        element.classList.add(...classList);
    }

    if (id) {
        element.id = id;
    }

    if (attributes) {
        for (const key in attributes) {
            element[key] = attributes[key];
        }
    }

    if (parrent) {
        parrent.appendChild(element);
    }
    return element;
}

async function loadAllTasks() {
    clearAllInputs();
    Object.values(containers).forEach((el) => {
        el.innerHTML = "";
    });

    const result = Object.values(await (await fetch(BASE_URL)).json());

    allObjects = result;

    result.forEach((element) => {
        const li = createDomElement("li", containers[element.status], null, ["task"], element._id);
        createDomElement("h3", li, element.title);
        createDomElement("p", li, element.description);
        const moveBtv = createDomElement("button", li, content[element.status]);
        moveBtv.addEventListener("click", moveTask);
    });
}

async function createTask() {
    if (Object.values(allInputFields).some((x) => x.value === "")) {
        return;
    }
    const {title, description} = allInputFields;

    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({title: title.value, description: description.value, status: "ToDo"}),
    });

    loadAllTasks();
}

function clearAllInputs() {
    Object.values(allInputFields).forEach((el) => (el.value = ""));
}

async function moveTask() {
    const taskID = this.parentElement.id;
    const curentTask = Object.values(allObjects).find((x) => x._id === taskID);

    if (["ToDo", "In Progress", "Code Review"].includes(curentTask.status)) {
        await fetch(`${BASE_URL}${taskID}`, {
            method: "PATCH",
            body: JSON.stringify({title: curentTask.title, description: curentTask.description, _id: curentTask._id, status: nextStatus[curentTask.status]}),
        });
    } else if (curentTask.status === "Done") {
        await fetch(`${BASE_URL}${taskID}`, {
            method: "DELETE",
        });
    }
    loadAllTasks();
}
