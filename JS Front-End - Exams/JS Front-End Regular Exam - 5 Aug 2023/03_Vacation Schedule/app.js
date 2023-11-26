BASE_URL = "http://localhost:3030/jsonstore/tasks/";

const allInputFields = {
    name: document.querySelector("#name"),
    days: document.querySelector("#num-days"),
    date: document.querySelector("#from-date"),
};
let vacantions = [];
let currentObj = {};
const loadVacationsBtn = document.querySelector("#load-vacations");
loadVacationsBtn.addEventListener("click", loadVacations);

const divList = document.querySelector("#list");
const addVacationBtn = document.querySelector("#add-vacation");
addVacationBtn.addEventListener("click", addVacation);

const editVacationBtn = document.querySelector("#edit-vacation");
editVacationBtn.addEventListener("click", editVacation);

const form = document.querySelector("form");

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

async function loadVacations() {
    divList.innerHTML = "";
    const result = await (await fetch(BASE_URL)).json();

    vacantions = Object.values(result);

    Object.values(result).forEach((el) => {
        const container = createDomElement("div", divList, null, ["container"], el._id);
        createDomElement("h2", container, el.name);
        createDomElement("h3", container, el.date);
        createDomElement("h3", container, el.days);

        const changeBtn = createDomElement("button", container, "Change", ["change-btn"]);
        changeBtn.addEventListener("click", changeVacantion);
        const doneBtn = createDomElement("button", container, "Done", ["done-btn"]);
        doneBtn.addEventListener("click", doneFunction);
    });
}

async function addVacation(e) {
    e.preventDefault();
    if (Object.values(allInputFields).some((x) => x.value === "")) {
        return;
    }

    const {name, days, date} = allInputFields;

    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({name: name.value, days: days.value, date: date.value}),
    });

    form.reset();
    loadVacations();
}

function changeVacantion() {
    const vacantionID = this.parentElement.id;
    currentObj = vacantions.find((x) => x._id === vacantionID);
    for (const key in allInputFields) {
        allInputFields[key].value = currentObj[key];
    }

    document.getElementById(vacantionID).remove();
    addVacationBtn.disabled = true;
    editVacationBtn.disabled = false;
}

async function editVacation(e) {
    e.preventDefault();
    const {name, days, date} = allInputFields;

    await fetch(`${BASE_URL}${currentObj._id}`, {
        method: "PUT",
        body: JSON.stringify({name: name.value, days: days.value, data: date.value, _id: currentObj._id}),
    });
    form.reset();
    loadVacations();
    addVacationBtn.disabled = false;
    editVacationBtn.disabled = true;
}

async function doneFunction(e) {
    const vacantionID = this.parentElement.id;
    currentObj = vacantions.find((x) => x._id === vacantionID);
    await fetch(`${BASE_URL}${currentObj._id}`, {
        method: "DELETE",
    });
    loadVacations();
}
