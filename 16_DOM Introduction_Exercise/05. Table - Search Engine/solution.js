function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        const elements = Array.from(document.querySelectorAll("tbody td"));

        for (const el of elements) {
            el.parentElement.classList.remove("select");
        }

        const word = document.querySelector("#searchField").value;
        for (const el of elements) {
            if (el.textContent.includes(word)) {
                el.parentElement.classList.add("select");
            }
        }
        document.querySelector("#searchField").value = "";
    }
}
