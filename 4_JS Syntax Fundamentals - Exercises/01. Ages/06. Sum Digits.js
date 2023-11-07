function solve(num) {
  let total = 0;
  num = String(num);

  for (let index = 0; index < num.length; index++) {
    total += Number(num[index]);
  }
  console.log(total);
}

solve(245678);
