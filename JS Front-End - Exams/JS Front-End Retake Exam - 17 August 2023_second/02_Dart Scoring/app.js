window.addEventListener("load", solve);

function solve() {
    const allInputFields = {
        player: document.querySelector("#player"),
        score: document.querySelector("#score"),
        round: document.querySelector("#round"),
    };

    const addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", addResult);

    const sureList = document.querySelector("#sure-list");
    const form = document.querySelector("form");
    let currentElement = {};
    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", reloadPage);

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

    function addResult() {
        if (Object.values(allInputFields).some((v) => v.value === "")) {
            return;
        }

        const {player, score, round} = allInputFields;

        currentElement = {player: player.value, score: score.value, round: round.value};

        const li = createDomElement("li", sureList, null, ["dart-item"]);
        const article = createDomElement("article", li);
        createDomElement("p", article, player.value);
        createDomElement("p", article, `Score: ${score.value}`);
        createDomElement("p", article, `Round: ${round.value}`);

        const editBtn = createDomElement("button", li, "edit", ["btn", "edit"]);
        editBtn.addEventListener("click", editResult);

        const okBtn = createDomElement("button", li, "ok", ["btn", "ok"]);
        okBtn.addEventListener("click", saveResult);

        form.reset();
        addBtn.disabled = true;
    }

    function editResult() {
        sureList.innerHTML = "";

        Object.keys(allInputFields).forEach((key) => {
            allInputFields[key].value = currentElement[key];
        });
        addBtn.disabled = false;
    }

    function saveResult() {
        const currList = document.querySelector(".dart-item");
        currList.querySelector("button").remove();
        currList.querySelector("button").remove();
        document.querySelector("#scoreboard-list").appendChild(currList);
    }

    function reloadPage() {
        document.location.reload();
    }
}
