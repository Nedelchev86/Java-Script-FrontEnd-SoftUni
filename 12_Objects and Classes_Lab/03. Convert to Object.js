function solve(someString) {
  myObj = JSON.parse(someString);

  for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
  }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
