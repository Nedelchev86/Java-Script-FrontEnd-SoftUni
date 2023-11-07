function solve(words, text) {
  words = words.split(", ");
  words.forEach((element) => {
    let searching = "*".repeat(element.length);
    if (text.includes(searching)) {
      text = text.replace(searching, element);
    }
  });
  console.log(text);
}

solve("great", "softuni is ***** place for learning new programming languages");
solve("great, learning", "softuni is ***** place for ******** new programming languages");


