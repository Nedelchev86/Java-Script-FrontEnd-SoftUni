const loadHistoryBtn = document.querySelector("#load-history");
loadHistoryBtn.addEventListener("click", loadHistory);

const form = document.querySelector("form");
const divList = document.querySelector("#list");
const addWeatherBtn = document.querySelector("#add-weather");
addWeatherBtn.addEventListener("click", addWeather);
const editWeatherBtn = document.querySelector("#edit-weather");
editWeatherBtn.addEventListener("click", editWeather);

let allInfo = {};

let currWeather = "";

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

const allInputFields = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
};

async function loadHistory() {
    divList.innerHTML = "";
    const result = await (await fetch("http://localhost:3030/jsonstore/tasks/")).json();

    allInfo = Object.values(result);
    Object.values(result).forEach((el) => {
        const container = createDomElement("div", divList, null, ["container"]);

        createDomElement("h2", container, el.location);
        createDomElement("h3", container, el.date);
        createDomElement("h3", container, el.temperature, null, "celsius");
        const divBtns = createDomElement("div", container, null, ["buttons-container"], `${el._id}`);
        const changeBtn = createDomElement("button", divBtns, "Change", ["change-btn"]);
        changeBtn.addEventListener("click", changeWeather);
        const deleteBtn = createDomElement("button", divBtns, "Delete", ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteFunction);
    });
}

async function addWeather() {
    const {location, temperature, date} = allInputFields;

    if (Object.values(allInputFields).some((x) => x.value === "")) {
        return;
    }
    const postInfo = await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        body: JSON.stringify({location: location.value, temperature: temperature.value, date: date.value}),
    });
    form.reset();
    loadHistory();
}

function changeWeather(e) {
    const currId = e.currentTarget.parentElement.id;

    currWeather = allInfo.find((el) => el._id === currId);
    console.log(currWeather);
    e.currentTarget.parentElement.parentElement.remove();

    for (const key in allInputFields) {
        allInputFields[key].value = currWeather[key];
    }
    addWeatherBtn.disabled = true;
    editWeatherBtn.disabled = false;
    editWeatherBtn.setAttribute("data-id", currId);
}

async function editWeather(e) {
    // const objectID = e.currentTarget.getAttribute("data-id");

    const {location, temperature, date} = allInputFields;

    // const postInfo = fetch(`http://localhost:3030/jsonstore/tasks/${objectID}`, {
    const postInfo = fetch(`http://localhost:3030/jsonstore/tasks/${currWeather._id}`, {
        method: "PATCH",
        body: JSON.stringify({location: location.value, temperature: temperature.value, date: date.value, _id: currWeather._id}),
    });

    form.reset();
    editWeatherBtn.disabled = true;
    addWeatherBtn.disabled = false;
    loadHistory();
}

function deleteFunction(e) {
    const currId = e.currentTarget.parentElement.id;

    const postInfo = fetch(`http://localhost:3030/jsonstore/tasks/${currId}`, {
        method: "DELETE",
    });

    loadHistory();
}
