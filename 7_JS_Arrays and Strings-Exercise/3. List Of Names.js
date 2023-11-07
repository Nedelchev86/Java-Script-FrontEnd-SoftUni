function solve(arr) {
  let sortedArr = arr.sort();
  if (sortedArr.length > 0) {
    for (let index = 0; index < sortedArr.length; index++) {
      console.log(`${index + 1}.${sortedArr[index]}`);
    }
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
