function solve(...arr) {
  let negative = 0;

  arr.forEach((element) => {
    if (element < 0) {
      negative += 1;
    }
  });

  negative % 2 === 0 ? console.log("Positive") : console.log("Negative");
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
