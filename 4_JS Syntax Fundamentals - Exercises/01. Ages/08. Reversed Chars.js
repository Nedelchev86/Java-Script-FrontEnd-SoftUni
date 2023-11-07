function solve(...arr) {
  let result = [];

  let arrayReversed = arr.reverse();
  arrayReversed.forEach((element) => {
    result.push(element);
  });
  console.log(result.join(" "));
}

solve("A", "B", "C");
