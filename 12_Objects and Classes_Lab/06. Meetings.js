function meeting(arr) {
  const meeting = {};

  for (const element of arr) {
    const [key, value] = element.split(" ");
    if (!meeting[key]) {
      meeting[key] = value;
      console.log(`Scheduled for ${key}`);
    } else {
      console.log(`Conflict on ${key}!`);
    }
  }

  for (const [key, value] of Object.entries(meeting)) {
    console.log(`${key} -> ${value}`);
  }
}

meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
