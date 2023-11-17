function colorize() {
    const element = Array.from(document.querySelectorAll("tr:nth-child(even)")).map((items) => (items.style.background = "Teal"));
}
