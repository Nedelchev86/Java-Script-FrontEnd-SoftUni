function solve(arr) {
  const obj = arr
    .shift()
    .split(" ")
    .reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {});

  arr.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
      obj[element] += 1;
    }
  });
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .forEach((element) => {
      console.log(`${element[0]} - ${element[1]}`);
    });
}
