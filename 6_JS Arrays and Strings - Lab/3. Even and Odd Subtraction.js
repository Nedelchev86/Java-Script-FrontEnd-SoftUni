function solve(arr) {
  let [even, odd] = [0, 0];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      even += element;
    } else {
      odd += element;
    }
  });
  console.log(even - odd);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
