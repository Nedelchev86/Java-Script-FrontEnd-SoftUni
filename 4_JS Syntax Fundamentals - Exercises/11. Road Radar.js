function solve(speed, place) {
  const speedLimit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let status = "";
  let difference = speed - speedLimit[place];

  if (speed <= speedLimit[place]) {
    console.log(`Driving ${speed} km/h in a ${speedLimit[place]} zone`);
  } else {
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit[place]} - ${status}`);
  }
}

solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
