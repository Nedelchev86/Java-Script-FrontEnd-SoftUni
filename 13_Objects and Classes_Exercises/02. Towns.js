function solve(arr) {
  const myObj = arr
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");

      return {town, latitude: parseFloat(latitude).toFixed(2), longitude: parseFloat(longitude).toFixed(2)};
    })
    .forEach((element) => {
      console.log(element);
    });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
