function solve(arr, word) {
  console.log(arr.split(" ").filter((x) => x == word).length);
}

solve("This is a word and it also is a sentence", "is");
