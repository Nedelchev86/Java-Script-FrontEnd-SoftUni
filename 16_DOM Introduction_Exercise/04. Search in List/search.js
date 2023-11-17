function search() {
    const listItems = Array.from(document.querySelectorAll("li"));
    let matches = 0;

    const searching = document.querySelector("#searchText").value;

    for (const el of listItems) {
        el.style.textDecoration = "";
        el.style.fontWeight = "";
    }

    for (const el of listItems) {
        if (el.textContent.includes(searching)) {
            matches += 1;
            el.style.textDecoration = "underline";
            el.style.fontWeight = "bold";
        }
    }

    document.querySelector("#result").textContent = `${matches} matches found`;
}
