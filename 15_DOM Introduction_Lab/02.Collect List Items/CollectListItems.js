// function extractText() {
//     const ulList = Array.from(document.querySelectorAll("li"));
//     const result = document.querySelector("#result");
//     let text = "";
//     for (const el of ulList) {
//         text += `${el.textContent}\n`;
//     }
//     result.textContent = text;
// }


function extractText() {
    const ulList = Array.from(document.querySelectorAll("li"));
    const result = document.querySelector("#result");

    result.value = ulList.map((item) => item.textContent).join("\n")
}
