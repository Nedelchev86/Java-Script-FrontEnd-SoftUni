function subtract() {
    const first = Number(document.querySelector("#firstNumber").value);
    const second = Number(document.querySelector("#secondNumber").value);
    first.disabled = false;
    document.querySelector("#result").textContent = first - second;
    console.log("test");
    console.log(first);
}
