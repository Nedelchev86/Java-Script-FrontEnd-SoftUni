function solve(number) {
  let numAsString = String(number);
  let total = 0;
  let same = true;
  const firstEl = numAsString[0];

  for (let index = 0; index < numAsString.length; index++) {
    const element = numAsString[index];
    total += Number(element);
    if (element !== firstEl) {
      same = false;
    }
  }
  console.log(same);
  console.log(total);
}
solve(2222222);
