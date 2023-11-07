// function solve(a, b, c) {
//   console.log(`${a}${b}${c}`);
// }

// solve("a", "b", "c");

function solve(...arr) {
  console.log(arr.join(""));
}

solve("a", "b", "c");
