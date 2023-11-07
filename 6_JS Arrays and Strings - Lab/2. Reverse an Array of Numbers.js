function solve(num, arr) {
  let newArr = arr.slice(0, num).reverse();
  console.log(newArr.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
