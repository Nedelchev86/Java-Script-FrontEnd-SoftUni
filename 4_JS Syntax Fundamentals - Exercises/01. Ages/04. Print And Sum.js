function solve(num1, num2) {
  let total = 0;
  let numebrs = [];
  for (let index = num1; index <= num2; index++) {
    total += index;
    numebrs.push(index);
  }

  console.log(numebrs.join(" "));
  console.log(`Sum: ${total}`);
}

solve(5, 10);
