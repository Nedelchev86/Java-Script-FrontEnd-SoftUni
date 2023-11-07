function solve(arr, word) {
  while (arr.includes(word)) {
    arr = arr.replace(word, "*".repeat(word.length));
  }
  console.log(arr);
}

solve("A small sentence with some words", "small");
solve("Find the hidden word", "hidden");
