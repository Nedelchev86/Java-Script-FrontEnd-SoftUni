function solve(firstName, lastName, hair) {
  myObj = {name: firstName, lastName, hairColor: hair};
  const myJson = JSON.stringify(myObj);
  return myJson;
}

console.log(solve("George", "Jones", "Brown"));
