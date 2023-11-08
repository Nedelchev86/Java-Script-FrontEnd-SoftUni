function solve(a, b, operator) {
  const operations = {
    multiply: a * b,
    divide: a / b,
    add: a + b,
    subtract: a - b,
  };

  console.log(operations[operator]);
}

solve(5, 5, "multiply");
