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
    const savedHits = document.querySelector(".saved-container");
    const likes = document.querySelector(".likes").querySelector("p");
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

        const {genre, name, author, date} = allInputFields;

        const div = createDomElement("div", allHitsContainer, null, ["hits-info"]);
        createDomElement("img", div, null, null, null, {src: "./static/img/img.png"});
        createDomElement("h2", div, `Genre: ${genre.value}`);
        createDomElement("h2", div, `Name: ${name.value}`);
        createDomElement("h2", div, `Author: ${author.value}`);
        createDomElement("h3", div, `Date: ${date.value}`);
        const saveBtn = createDomElement("button", div, "Save song", ["save-btn"]);
        saveBtn.addEventListener("click", saveSongFunc);
        const likeBtn = createDomElement("button", div, "Like song", ["like-btn"]);
        likeBtn.addEventListener("click", likeSongFunc);
        const deleteBtn = createDomElement("button", div, "Delete", ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteSongFunc);
        form.reset();
    }

    function likeSongFunc(e) {
        console.log(e.currentTarget);
        e.currentTarget.disabled = true;
        const currentLikes = Number(likes.textContent.split(": ")[1]);
        likes.textContent = `Total Likes: ${currentLikes + 1}`;
        // document.querySelector(".like-btn").disabled = true;
    }

    function saveSongFunc() {
        const currentSong = document.querySelector(".hits-info");
        currentSong.querySelector("button").remove();
        currentSong.querySelector("button").remove();
        savedHits.appendChild(currentSong);
    }

    function deleteSongFunc(e) {
        const element = e.currentTarget.parentElement;
        element.remove();
    }
}
