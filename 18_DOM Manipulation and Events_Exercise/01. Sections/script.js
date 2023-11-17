function create(words) {
    divContent = document.querySelector("#content");

    for (const word of words) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = word;
        p.style.display = "none";
        div.appendChild(p);

        div.addEventListener("click", onClick);
        divContent.appendChild(div);
    }

    function onClick(e) {
        e.currentTarget.querySelector("p").style.display = "block";
    }
}
