window.addEventListener("load", solve);

function solve() {
    const allInputFields = {
        genre: document.querySelector("#genre"),
        name: document.querySelector("#name"),
        author: document.querySelector("#author"),
        date: document.querySelector("#date"),
    };

    const form = document.querySelector("form");
    const addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", addSongFunction);
    const allHitsContainer = document.querySelector(".all-hits-container");

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

    function addSongFunction(e) {
        e.preventDefault();
        if (Object.values(allInputFields).some((x) => x.value === "")) {
            return;
        }

        const {genre, name, author, date} = allHitsContainer;

        const div = createDomElement("div", allHitsContainer, null, ["hits-info"]);
        createDomElement("img", allHitsContainer, "./static/img/img.png", null, null, "scr");
        createDomElement("h2", allHitsContainer, `Genre: ${genre.value}`);
        createDomElement("h2", allHitsContainer, `Name: ${name.value}`);
        createDomElement("h2", allHitsContainer, `Author: ${author.value}`);
        createDomElement("h3", allHitsContainer, `Date: ${date.value}`);
    }
}
