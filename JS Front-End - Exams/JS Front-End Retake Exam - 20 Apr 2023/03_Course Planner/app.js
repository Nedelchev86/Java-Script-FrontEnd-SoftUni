const BASE_RUL = "http://localhost:3030/jsonstore/tasks/";

const allInputFields = {
    title: document.querySelector("#course-name"),
    type: document.querySelector("#course-type"),
    description: document.querySelector("#description"),
    teacher: document.querySelector("#teacher-name"),
};

const loadCourseBtn = document.querySelector("#load-course");
loadCourseBtn.addEventListener("click", loadCourses);
const addCourseBtn = document.querySelector("#add-course");
addCourseBtn.addEventListener("click", addCourse);

const editCourseBtn = document.querySelector("#edit-course");
editCourseBtn.addEventListener("click", editAndSave);

const divList = document.querySelector("#list");
const form = document.querySelector("form");

let courses = [];
let currentCourse = "";

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
    divList.innerHTML = "";
    const result = Object.values(await (await fetch(BASE_RUL)).json());
    courses = result;

    result.forEach((el) => {
        const container = createDomElement("div", divList, null, ["container"], el._id);
        createDomElement("h2", container, el.name);
        createDomElement("h3", container, el.teacher);
        createDomElement("h3", container, el.type);
        createDomElement("h4", container, el.description);
        const editBtn = createDomElement("button", container, "Edit Course", ["edit-btn"]);
        editBtn.addEventListener("click", editLoad);
        const finishBtn = createDomElement("button", container, "Finish Course", ["finish-btn"]);
        finishBtn.addEventListener("click", deleteCourse);
    });
}

async function addCourse(e) {
    e.preventDefault();

    if (Object.values(allInputFields).some((x) => x.value === "")) {
        return;
    }
    const {title, type, description, teacher} = allInputFields;
    await fetch(BASE_RUL, {
        method: "POST",
        body: JSON.stringify({title: title.value, type: type.value, description: description.value, teacher: teacher.value}),
    });
    form.reset();
    loadCourses();
}

function editLoad() {
    const courseId = this.parentElement.id;
    const course = courses.find((c) => c._id === courseId);
    currentCourse = course;

    for (const key in allInputFields) {
        allInputFields[key].value = course[key];
    }
    addCourseBtn.disabled = true;
    editCourseBtn.disabled = false;
    document.getElementById(courseId).remove();
}

async function editAndSave(e) {
    e.preventDefault();
    const {title, type, description, teacher} = allInputFields;

    await fetch(`${BASE_RUL}${currentCourse._id}`, {
        method: "PUT",
        body: JSON.stringify({title: title.value, type: type.value, description: description.value, teacher: teacher.value, _id: currentCourse._id}),
    });
    addCourseBtn.disabled = false;
    editCourseBtn.disabled = true;
    form.reset();
    loadCourses();
}

async function deleteCourse(e) {
    const courseId = this.parentElement.id;

    const course = courses.find((c) => c._id === courseId);

    await fetch(`${BASE_RUL}${course._id}`, {
        method: "DELETE",
    });
    loadCourses();
}
