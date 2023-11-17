function solve() {
    const text = document.querySelector("#text").value.split(" ");
    const second = document.querySelector("#naming-convention").value;

    let result = "test";

    if (second === "Pascal Case") {
        result = text
            .map((x) => {
                x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
                return x;
            })
            .join("");
    } else if (second === "Camel Case") {
        result = text
            .map(function (word, index) {
                if (index == 0) {
                    return word.toLowerCase();
                }

                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join("");
    } else {
        result = "Error!";
    }
    document.querySelector("#result").textContent = result;

    console.log(result);
}
