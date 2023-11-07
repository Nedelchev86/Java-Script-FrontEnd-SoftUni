function roadRadar(speed, area) {
  const speedLimitTable = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const speedLimit = speedLimitTable[area];
  const difference = speed - speedLimit;
  let status = "";

  if (difference <= 0) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    return;
  }

  status = difference <= 20 ? "speeding" : difference <= 40 ? "excessive speeding" : "reckless driving";

  console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}
