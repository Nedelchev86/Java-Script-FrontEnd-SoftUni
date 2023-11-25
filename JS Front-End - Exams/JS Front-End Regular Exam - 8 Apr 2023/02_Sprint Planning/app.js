window.addEventListener("load", solve);

function solve() {
    const allInputFields = {
        title: document.querySelector("#title"),
        description: document.querySelector("#description"),
        label: document.querySelector("#label"),
        points: document.querySelector("#points"),
        assignee: document.querySelector("#assignee"),
    };
    const tasks = [];

    const createTaskBtn = document.querySelector("#create-task-btn");
    createTaskBtn.addEventListener("click", createTask);

    const totalPoints = document.querySelector("#total-sprint-points");
    const deleteTaskBtn = document.querySelector("#delete-task-btn");
    deleteTaskBtn.addEventListener("click", deleteTask);
    const form = document.querySelector("#create-task-form");
    const tasksSection = document.querySelector("#tasks-section");

    const inputID = document.querySelector("#task-id");

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

    function createTask() {
        if (Object.values(allInputFields).some((x) => x.value === "")) {
            return;
        }

        textContent = {
            Feature: "Feature &#8865;",
            "Low Priority Bug": "Low Priority Bug &#9737;",
            "High Priority Bug": "High Priority Bug &#9888;",
        };

        classes = {
            Feature: "feature",
            "Low Priority Bug": "low-priority",
            "High Priority Bug": "high-priority",
        };

        const {title, description, label, points, assignee} = allInputFields;

        article = createDomElement("article", tasksSection, null, ["task-card"], `task-${tasks.length + 1}`);
        createDomElement("div", article, textContent[label.value], ["task-card-label", `${classes[label.value]}`], null, null, true);
        createDomElement("h3", article, allInputFields.title.value, ["task-card-title"]);
        createDomElement("p", article, allInputFields.description.value, ["task-card-description"]);
        createDomElement("div", article, `Estimated at ${allInputFields.points.value} pts`, ["task-card-points"]);
        createDomElement("div", article, `Assigned to: ${allInputFields.assignee.value}`, ["task-card-assignee"]);
        const div = createDomElement("div", article, null, ["task-card-actions"]);
        const deleteBtn = createDomElement("button", div, "Delete");
        deleteBtn.addEventListener("click", DeletePost);

        tasks.push({"task-id": `task-${tasks.length + 1}`, title: title.value, description: description.value, label: label.value, points: points.value, assignee: assignee.value});
        const Allpoints = tasks.reduce((acc, curr) => {
            acc += Number(curr.points);
            return acc;
        }, 0);
        totalPoints.textContent = `Total Points ${Allpoints}pts`;
        form.reset();
    }

    function DeletePost(e) {
        const elId = e.currentTarget.parentElement.parentElement.id;
        const currentTask = tasks.find((x) => x["task-id"] === elId);

        for (const key in allInputFields) {
            allInputFields[key].value = currentTask[key];
        }

        inputID.value = elId;
        createTaskBtn.disabled = true;
        deleteTaskBtn.disabled = false;

        for (const key in allInputFields) {
            allInputFields[key].disabled = true;
        }
    }
    function deleteTask(e) {
        const currentId = e.currentTarget.parentElement.parentElement.querySelector("#task-id").value;
        document.querySelector(`#${currentId}`).remove();

        const currentTask = tasks.find((x) => x["task-id"] === currentId);
        const idx = tasks.indexOf(currentTask);
        tasks.splice(idx, 1);
        const Allpoints = tasks.reduce((acc, curr) => {
            acc += Number(curr.points);
            return acc;
        }, 0);
        totalPoints.textContent = `Total Points ${Allpoints}pts`;

        for (const key in allInputFields) {
            allInputFields[key].disabled = false;
        }

        form.reset();
        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;
    }
}
