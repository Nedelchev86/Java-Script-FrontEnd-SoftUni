function solve(first, second) {
  let start = first.charCodeAt();
  let end = second.charCodeAt();
  let myArr = [];

  if (start < end) {
    for (let index = start + 1; index < end; index++) {
      myArr.push(String.fromCharCode(index));
    }
  } else {
    for (let index = end + 1; index < start; index++) {
      myArr.push(String.fromCharCode(index));
    }
  }
  console.log(myArr.join(" "));
}

solve("C", "#");
