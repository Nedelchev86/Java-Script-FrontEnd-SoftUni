window.addEventListener("load", solve);

function solve() {
    const allInputs = {
        firstName: document.querySelector("#first-name"),
        lastName: document.querySelector("#last-name"),
        age: document.querySelector("#age"),
        storyTitle: document.querySelector("#story-title"),
        genre: document.querySelector("#genre"),
        story: document.querySelector("#story"),
    };
    const previewList = document.querySelector("#preview-list");
    const formBtn = document.querySelector("#form-btn");
    formBtn.addEventListener("click", publishStory);
    const form = document.querySelector("form");

    const allValues = {
        firstName: null,
        lastName: null,
        age: null,
        storyTitle: null,
        genre: null,
        story: null,
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
    function publishStory() {
        if (Object.values(allInputs).some((x) => x.value === "")) {
            return;
        }

        const {firstName, lastName, age, storyTitle, genre, story} = allInputs;

        const li = createDomElement("li", previewList, null, ["story-info"]);
        const article = createDomElement("article", li);

        createDomElement("h4", article, `Name: ${firstName.value} ${lastName.value}`);
        createDomElement("p", article, `Age: ${age.value}`);
        createDomElement("p", article, `Title: ${storyTitle.value}`);
        createDomElement("p", article, `Genre: ${genre.value}`);
        createDomElement("p", article, story.value);

        const saveBtn = createDomElement("button", li, "Save Story", ["save-btn"]);
        saveBtn.addEventListener("click", saveStory);
        const editBtn = createDomElement("button", li, "Edit Story", ["edit-btn"]);
        editBtn.addEventListener("click", editStory);
        const deleteBtn = createDomElement("button", li, "Delete Story", ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteStory);

        for (const key in allInputs) {
            allValues[key] = allInputs[key].value;
        }
        form.reset();
        formBtn.disabled = true;
    }

    function editStory() {
        for (const key in allInputs) {
            allInputs[key].value = allValues[key];
            allInputs[key].disabled = true;

            previewList.innerHTML = "<h3>Preview</h3>";
        }
        formBtn.disabled = false;
    }

    function deleteStory() {
        previewList.innerHTML = "<h3>Preview</h3>";
        for (const key in allInputs) {
            allInputs[key].disabled = false;
            previewList.innerHTML = "<h3>Preview</h3>";
        }
        formBtn.disabled = false;
    }

    function saveStory() {
        document.querySelector("#main").innerHTML = "<h1>Your scary story is saved!</h1>";
    }
}
