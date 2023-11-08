function phoneBook(text) {
  const phoneBook = {};
  for (const element of text) {
    const [key, value] = element.split(" ");
    phoneBook[key] = value;
  }
  for (const [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`);
  }
}

phoneBook(["Tim 0834212554", "Peter 0877547887", "Bill 0896543112", "Tim 0876566344"]);
