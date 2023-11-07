function solve(arr, num) {
  const result = [];
  for (let index = 0; index < arr.length; index += num) {
    result.push(arr[index]);
  }
  return result;
}

console.log(solve(["5", "20", "31", "4", "20"], 2));
