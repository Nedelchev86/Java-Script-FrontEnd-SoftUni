function solve(arr) {
    const parking = {};
  
    arr.forEach((element) => {
      const [command, number] = element.split(", ");
      if (command == "IN") {
        parking[number] = 1;
      } else {
        parking[number] -= 1;
      }
    });
    const result = Object.entries(parking)
      .filter(([key, value]) => value > 0)
      .map((x) => x[0])
      .sort();
  
    if (result.length > 0) {
      console.log(result.join(`\n`));
    } else {
      console.log("Parking Lot is Empty");
  
    }
  }
  