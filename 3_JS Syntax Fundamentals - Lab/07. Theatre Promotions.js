function solve(day, age) {
  let price = 0;

  if (age < 0 || age > 122) {
    console.log("Error!");
    return;
  }

  if (age <= 18) {
    if (day === "Weekday") {
      price = 12;
    } else if (day === "Weekend") {
      price = 15;
    } else if (day === "Holiday") {
      price = 5;
    }
  } else if (age <= 64) {
    if (day === "Weekday") {
      price = 18;
    } else if (day === "Weekend") {
      price = 20;
    } else if (day === "Holiday") {
      price = 12;
    }
  } else if (age <= 122) {
    if (day === "Weekday") {
      price = 12;
    } else if (day === "Weekend") {
      price = 15;
    } else if (day === "Holiday") {
      price = 10;
    }
  }
  console.log(`${price}$`);
}

solve("Weekday", 42);
solve("Holiday", -12);
