function solve(num1, num2, num3) {
  const sumNums = (a, b) => a + b;
  const substract = (a, b) => a - b;

  console.log(substract(sumNums(num1, num2), num3));
}

solve(23, 6, 10);
