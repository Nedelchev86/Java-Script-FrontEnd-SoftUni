function solve(product, number) {
  const price = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };
  console.log((price[product] * number).toFixed(2));
}

solve("water", 5);
