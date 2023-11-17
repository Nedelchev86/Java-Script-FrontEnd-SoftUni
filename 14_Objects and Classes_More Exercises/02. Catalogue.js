function solve(arr) {
    let current = "";
    const myObj = Object.entries(
        arr.reduce((acc, curr) => {
            const [name, price] = curr.split(" : ");
            acc[name] = Number(price);
            return acc;
        }, {})
    )
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);
        })
        .forEach((element) => {
            if (current !== element[0][0]) {
                console.log(element[0][0]);
                current = element[0][0];
            }
            console.log(`  ${element[0]}: ${element[1]}`);
        });
}

solve(["Appricot : 20.4", "Fridge : 1500", "TV : 1499", "Deodorant : 10", "Boiler : 300", "Apple : 1.25", "Anti-Bug Spray : 15", "T-Shirt : 10"]);
