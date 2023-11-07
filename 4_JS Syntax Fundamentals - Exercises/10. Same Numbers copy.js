function solve(number) {
  let mySet = new Set(String(number).split(""));

  mySet.size === 1 ? console.log("true") : console.log("false");
  console.log(
    String(number)
      .split("")
      .map((x) => Number(x))
      .reduce((a, b) => a + b)
  );
}
solve(2222222);
