window.addEventListener("load", solve);

function solve() {
    const allInputFields = {
        student: document.querySelector("#student"),
        university: document.querySelector("#university"),
        score: document.querySelector("#score"),
    };

    let currentnfo;
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.addEventListener("click", addStudentInfo);

    const previewList = document.querySelector("#preview-list");
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

    function addStudentInfo() {
        if (Object.values(allInputFields).some((x) => x.value === "")) {
            return;
        }
        const {student, university, score} = allInputFields;

        const li = createDomElement("li", previewList, null, ["application"]);
        const article = createDomElement("article", li);
        createDomElement("h4", article, student.value);
        createDomElement("p", article, `University: ${university.value}`);
        createDomElement("p", article, `Score: ${score.value}`);

        const editBtn = createDomElement("button", li, "edit", ["action-btn", "edit"]);
        editBtn.addEventListener("click", editInfo);

        const applyBtn = createDomElement("button", li, "apply", ["action-btn", "apply"]);
        applyBtn.addEventListener("click", applyInfo);

        nextBtn.disabled = true;
        currentnfo = {student: student.value, university: university.value, score: score.value};

        form.reset();
    }

    function editInfo() {
        previewList.innerHTML = "";

        for (const key in allInputFields) {
            allInputFields[key].value = currentnfo[key];
        }
        nextBtn.disabled = false;
    }

    function applyInfo() {
        const list = document.querySelector(".application");
        list.querySelector("button").remove();
        list.querySelector("button").remove();
        document.querySelector("#candidates-list").appendChild(list);
        nextBtn.disabled = false;
    }
}
