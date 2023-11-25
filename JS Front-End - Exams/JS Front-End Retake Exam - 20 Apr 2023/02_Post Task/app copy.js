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
    };

    const reviewList = document.querySelector("#review-list");
    const publishedList = document.querySelector("#published-list");
    const form = document.querySelector(".newPostContent");

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

    const publishBtn = document.querySelector("#publish-btn");
    publishBtn.addEventListener("click", PublishPost);

    function PublishPost() {
        if (Object.values(allInputFields).some((x) => x.value === "")) {
            return;
        }

        const {taskTitle, taskCategory, taskContent} = allInputFields;

        const li = createDomElement("li", reviewList, null, ["rpost"]);
        const article = createDomElement("article", li);
        createDomElement("h4", article, taskTitle.value);
        createDomElement("p", article, `Category: ${taskCategory.value}`);
        createDomElement("p", article, `Content: ${taskContent.value}`);

        const editBtn = createDomElement("button", li, "Edit", ["action-btn", "edit"]);
        editBtn.addEventListener("click", editInformation);
        const postBtn = createDomElement("button", li, "Post", ["action-btn", "post"]);
        postBtn.addEventListener("click", publushPost);

        for (const key in allInputFields) {
            postValue[key] = allInputFields[key].value;
        }
        form.reset();
    }

    function editInformation() {
        for (const key in allInputFields) {
            allInputFields[key].value = postValue[key];
        }
        reviewList.innerHTML = "";
    }

    function publushPost() {
        const currList = document.querySelector(".rpost");

        currList.querySelector("button").remove();
        currList.querySelector("button").remove();
        publishedList.appendChild(currList);
    }
}
