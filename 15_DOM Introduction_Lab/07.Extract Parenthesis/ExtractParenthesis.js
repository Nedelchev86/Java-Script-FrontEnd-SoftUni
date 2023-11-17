function extract(content) {
    const element = document.querySelector(`#${content}`).textContent;

    let reBrackets = /\((.*?)\)/g;
    let listOfText = [];
    let found;
    while ((found = reBrackets.exec(element))) {
        listOfText.push(found[1]);
    }
    return listOfText.sort();
}
