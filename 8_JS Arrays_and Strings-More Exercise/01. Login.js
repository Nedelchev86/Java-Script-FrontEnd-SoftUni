function solve(arr) {
  const username = arr.shift();
  const password = username.split("").reverse().join("");
  count = 0;
  let finish = false;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === password) {
      console.log(`User ${username} logged in.`);
      finish = true;
    } else {
      count += 1;
      if (count == 4) {
        console.log("User sunny blocked!");
        finish = true;
        return;
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
    if (finish) {
      return;
    }
  }
}

solve(["sunny", "rainy", "cloudy", "sunny", "sunny", "ynnus", "not sunny"]);
