function simpleCalculator(a, b, operator) {
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  if (operator === "multiply") {
      console.log(multiply(a, b));
  } else if (operator === "divide") {
      console.log(divide(a, b));
  } else if (operator === "add") {
      console.log(add(a, b));
  } else if (operator === "subtract") {
      console.log(subtract(a, b));
  }
}