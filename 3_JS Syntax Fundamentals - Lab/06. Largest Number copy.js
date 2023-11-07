function largetNum(...arr) {
  let largest = -9999999;

  arr.forEach((element) => {
    if (element >= largest) {
      largest = element;
    }
  });
  console.log(`The largest number is ${largest}.`);
}

largetNum(5, -3, 16);
