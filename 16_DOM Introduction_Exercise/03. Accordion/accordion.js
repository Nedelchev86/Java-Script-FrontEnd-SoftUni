function toggle() {
    const buton = document.querySelector("span.button");
    const textDiv = document.querySelector("#extra");

    // if (buton.textContent === "More") {
    //     textDiv.style.display = "block";
    //     buton.textContent = "Less";
    // } else {
    //     textDiv.style.display = "none";
    //     buton.textContent = "More";
    // }
    textDiv.style.display = textDiv.style.display !== "block" ? "block" : "none";
    buton.textContent = buton.textContent !== "More" ? "More" : "Less";
}
