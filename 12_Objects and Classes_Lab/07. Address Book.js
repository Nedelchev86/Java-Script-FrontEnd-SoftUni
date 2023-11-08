function solve(arr) {
  const myObj = Object.entries(
    arr.reduce((acc, curr) => {
      const [key, value] = curr.split(":");
      acc[key] = value;
      return acc;
    }, {})
  )
    .sort()
    .forEach((el) => console.log(`${el[0]} -> ${el[1]}`));
}

solve(["Tim:Doe Crossing", "Bill:Nelson Place", "Peter:Carlyle Ave", "Bill:Ornery Rd"]);
