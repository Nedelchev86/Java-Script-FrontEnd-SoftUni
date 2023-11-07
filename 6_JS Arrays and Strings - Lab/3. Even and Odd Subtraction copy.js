function solve(arr) {
  let even = arr.filter((x) => x % 2 === 0).reduce((a, b) => a + b, 0);
  let odd = arr.filter((x) => x % 2 !== 0).reduce((a, b) => a + b, 0);

  console.log(even - odd);
}
