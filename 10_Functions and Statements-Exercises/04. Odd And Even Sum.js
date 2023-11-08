function solve(num) {
  let numAsString = String(num);
  let odd = [];
  let even = [];
  for (let index = 0; index < numAsString.length; index++) {
    const element = Number(numAsString[index]);
    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  }
  console.log(`Odd sum = ${odd.reduce((a, b) => a + b, 0)}, Even sum = ${even.reduce((a, b) => a + b, 0)}`);
}

solve(1000435);
