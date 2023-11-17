function sumTable() {
    const sum = Array.from(document.querySelectorAll("td:nth-child(even")).reduce((acc, curr) => {
        if (curr.id === "sum") {
            return acc;
        } else {
            acc += Number(curr.textContent);
        }
        return acc;
    }, 0);

    const result = (document.querySelector("#sum").innerText = sum.toFixed(2));
    console.log(result);
}
