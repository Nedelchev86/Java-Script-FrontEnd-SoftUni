function solve(word, text) {
  let newArr = text.split(" ");
  let find = false;

  newArr.forEach((element) => {
    if (element.toLowerCase() === word.toLowerCase()) {
      console.log(element.toLowerCase());
      find = true;
      return;
    }
  });
  if (!find) {
    console.log(`${word} not found!`);
  }
}

solve("javascript", "JavaScript is the best programming language");
