function solve(newProducts, newDelivery) {
  const products = newProducts.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      acc[curr] = Number(newProducts[i + 1]);
    }
    return acc;
  }, {});

  for (let index = 0; index < newDelivery.length; index += 2) {
    const [product, quantity] = [newDelivery[index], newDelivery[index + 1]];

    if (!products.hasOwnProperty(product)) {
      products[product] = 0;
    }
    products[product] += Number(quantity);
  }
  Object.entries(products).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

solve(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"], ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);
