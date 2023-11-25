window.addEventListener("load", solve);

function solve() {
    const allInputFields = {
        taskTitle: document.querySelector("#task-title"),
        taskCategory: document.querySelector("#task-category"),
        taskContent: document.querySelector("#task-content"),
    };

    const postValue = {
        taskTitle: null,
        taskCategory: null,
        taskContent: null,
    }

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

    const publishBtn = document.querySelector("#publish-btn")
    publishBtn.addEventListener("click", PublishPost)

    function PublishPost(){
        const {taskTitle, taskCategory, taskContent} = allInputFields


    }
}
