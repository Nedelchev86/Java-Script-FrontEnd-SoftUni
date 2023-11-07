function math(num1, num2, operator) {
  let result = 0;

  const results = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
    "%": num1 % num2,
    "**": num1 ** num2,
  };

  console.log(results[operator]);
}

math(5, 6, "+");
math(3, 5.5, "*");
