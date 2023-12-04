const BASEURL = "http://localhost:3030/jsonstore/tasks/";

const list = document.querySelector("#list");

const loadBtn = document.querySelector("#load-vacations");
loadBtn.addEventListener("click", loadVacantions);

const addVacationBtn = document.querySelector("#add-vacation");
addVacationBtn.addEventListener("click", addVacation);

const editVacationBtn = document.querySelector("#edit-vacation");
editVacationBtn.addEventListener("click", editVacantion);

const form = document.querySelector("form");
const allInputFields = {
    name: document.querySelector("#name"),
    days: document.querySelector("#num-days"),
    date: document.querySelector("#from-date"),
};

let allVacantions;
let currID;

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

async function loadVacantions() {
    list.innerHTML = "";
    const vacantions = Object.values(await (await fetch(BASEURL)).json());
    allVacantions = vacantions;

    vacantions.forEach((el) => {
        const container = createDomElement("div", list, null, ["container"], el._id);
        createDomElement("h2", container, el.name);
        createDomElement("h3", container, el.date);
        createDomElement("h3", container, el.days);

        const changeBtn = createDomElement("button", container, "Change", ["change-btn"]);
        changeBtn.addEventListener("click", changeVacantion);

        const doneBtn = createDomElement("button", container, "Done", ["done-btn"]);
        doneBtn.addEventListener("click", doneVacantion);
    });
}

async function addVacation(e) {
    e.preventDefault();
    const {name, days, date} = allInputFields;

    await fetch(BASEURL, {
        method: "POST",
        body: JSON.stringify({name: name.value, days: days.value, date: date.value}),
    });

    loadVacantions();

    form.reset();
}

function changeVacantion() {
    currID = this.parentElement.id;
    const vacantion = allVacantions.find((x) => x._id === currID);

    for (const key in allInputFields) {
        allInputFields[key].value = vacantion[key];
    }
    addVacationBtn.disabled = true;
    editVacationBtn.disabled = false;

    this.parentElement.remove();
}

async function editVacantion(e) {
    e.preventDefault();
    const {name, days, date} = allInputFields;
    await fetch(`${BASEURL}${currID}`, {
        method: "PUT",
        body: JSON.stringify({name: name.value, days: days.value, date: date.value, _id: currID}),
    });

    addVacationBtn.disabled = false;
    editVacationBtn.disabled = true;
    form.reset();
    loadVacantions();
}

async function doneVacantion() {
    currID = this.parentElement.id;
    await fetch(`${BASEURL}${currID}`, {
        method: "DELETE",
    });
    loadVacantions();
}
