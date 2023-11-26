const BASE_RUL = "http://localhost:3030/jsonstore/tasks/";

const allInputFields = {
    title: document.querySelector("#course-name"),
    type: document.querySelector("#course-type"),
    description: document.querySelector("#description-name"),
    teacher: document.querySelector("#teacher-name"),
};

const BtnLoadCourse = document.querySelector("#load-course");
BtnLoadCourse.addEventListener("click", loadCourses);
const divList = document.querySelector("#teacher-name");


let courses = [] 

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

async function loadCourses() {
    const result = Object.values(await (await fetch(BASE_RUL)).json());
    courses = result
}
