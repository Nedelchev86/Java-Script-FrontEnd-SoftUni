function solve(arr) {
  let words = arr.split(" ").match(/\b\w+(?=y\b)/g);
  console.log(words);
}

solve("Hi, how are you?");
