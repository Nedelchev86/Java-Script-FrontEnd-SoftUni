function solve(...arr) {
  let number = arr.shift();
  for (let index = 0; index < arr.length; index++) {
    const command = arr[index];

    if (command === "chop") {
      number /= 2;
    } else if (command === "dice") {
      number = Math.sqrt(number);
    } else if (command === "spice") {
      number += 1;
    } else if (command === "bake") {
      number *= 3;
    } else if (command === "fillet") {
      number *= 0.8;
    }
    console.log(number);
  }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
