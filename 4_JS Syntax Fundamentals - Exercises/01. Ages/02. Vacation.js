function solve(people, type, day) {
  const price = {
    Students: {Friday: 8.45, Saturday: 9.8, Sunday: 10.46},
    Business: {Friday: 10.9, Saturday: 15.6, Sunday: 16},
    Regular: {Friday: 15, Saturday: 20, Sunday: 22.5},
  };

  let total = people * price[type][day];

  if (type === "Students" && people >= 30) {
    total *= 0.85;
  }

  if (type === "Business" && people >= 100) {
    total -= 10 * price[type][day];
  }

  if (type === "Regular" && people >= 10 && people <= 20) {
    total *= 0.95;
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
