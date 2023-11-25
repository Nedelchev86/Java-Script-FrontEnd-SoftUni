window.addEventListener("load", solve);

function solve() {
    const inputFields = {
        student: document.querySelector("#student"),
        university: document.querySelector("#university"),
        score: document.querySelector("#score"),
    };
    const previewList = document.querySelector("#preview-list");
    const candidatesList = document.querySelector("#candidates-list");
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.addEventListener("click", loadDataFromInputd);
    const form = document.querySelector(".applyContent");

    const currInformation = {
        student: null,
        university: null,
        score: null,
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

    function loadDataFromInputd() {
        if (Object.values(inputFields).some((x) => x.value === "")) {
            return;
        }
        const {student, university, score} = inputFields;

        const li = createDomElement("li", previewList, null, ["application"]);
        const article = createDomElement("article", li);
        createDomElement("h4", article, student.value);
        createDomElement("p", article, `University: ${university.value}`);
        createDomElement("p", article, `Score: ${score.value}`);

        const editBtn = createDomElement("button", li, "edit", ["action-btn", "edit"]);
        const applyBtn = createDomElement("button", li, "apply", ["action-btn", "apply"]);

        editBtn.addEventListener("click", editFunction);
        applyBtn.addEventListener("click", applyFunction);

        for (const key in inputFields) {
            currInformation[key] = inputFields[key].value;
        }

        form.reset();
        nextBtn.setAttribute("disabled", "");
    }

    function editFunction() {
        for (const key in currInformation) {
            inputFields[key].value = currInformation[key];
            nextBtn.removeAttribute("disabled");
            previewList.innerHTML = "";
        }
    }

    function applyFunction() {
        // const currLi = document.querySelector(".application");
        // const newLi = currLi.cloneNode(true);
        // newLi.querySelector(".action-btn").remove();
        // newLi.querySelector(".action-btn").remove();
        // previewList.innerHTML = "";
        // candidatesList.appendChild(newLi);
        // nextBtn.removeAttribute("disabled");

        const newList = document.querySelector(".application");
        console.log(newList);
        newList.removeChild(newList.querySelector("button"));
        newList.removeChild(newList.querySelector("button"));
        candidatesList.appendChild(newList);
        previewList.textContent = "";
        nextBtn.disabled = false;
    }
}
