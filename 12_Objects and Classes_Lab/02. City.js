function city(myObj) {
  for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key} -> ${value}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
