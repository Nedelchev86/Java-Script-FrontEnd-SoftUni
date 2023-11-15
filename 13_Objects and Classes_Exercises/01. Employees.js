function solve(arr) {
  const myObj = Object.entries(
    arr.reduce((acc, curr) => {
      acc[curr] = curr.length;
      return acc;
    }, {})
  ).forEach(([key, value]) => {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  });
}

solve(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
