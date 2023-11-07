function solve(word, start, num) {
  let newStr = "";
  for (let index = start; index <= num; index++) {
    newStr += word[index];
  }
  console.log(newStr);
}

solve("ASentence", 1, 8);
solve("SkipWord", 4, 7);
