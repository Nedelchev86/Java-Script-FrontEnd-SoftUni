const BASEURL = "http://localhost:3030/jsonstore/tasks/";
const loadBtn = document.querySelector("#load-history");
loadBtn.addEventListener("click", loadHistory);
const list = document.querySelector("#list");
const form = document.querySelector("form");

const addBtn = document.querySelector("#add-weather");
addBtn.addEventListener("click", addWeather);

let allHistory = {};

const allInputFileds = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
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

async function loadHistory() {
    list.innerHTML = "";
    const weather = Object.values(await (await fetch(BASEURL)).json());
    allHistory = weather;
    console.log(allHistory);

    weather.forEach((element) => {
        const container = createDomElement("div", list, null, ["container"], element._id);
        createDomElement("h2", container, element.location);
        createDomElement("h3", container, element.date);
        createDomElement("h3", container, element.temperature, ["celsius"]);
        const buttonContainer = createDomElement("div", container, null, ["buttons-container"]);
        const changeBtn = createDomElement("button", buttonContainer, "Change", ["change-btn"]);
        const deleteBtn = createDomElement("button", buttonContainer, "Delete", ["delete-btn"]);
    });
}

async function addWeather() {
    if (Object.values(allHistory).some((x) => x.value === "")) {
        return;
    }

    const {location, temperature, date} = allInputFileds;

    await fetch(BASEURL, {
        method: "POST",
        body: JSON.stringify({location: location.value, temperature: temperature.value, date: date.value}),
    });
    form.reset();
    loadHistory();
}
