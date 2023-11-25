function solve(arr) {
    const products = arr.shift().split("!");

    for (const el of arr) {
        if (el === "Go Shopping!") {
            break;
        }
        const [command, item, newItem] = el.split(" ");

        if (command === "Urgent") {
            if (products.includes(item)) {
                continue;
            } else {
                products.splice(0, 0, item);
            }
        } else if (command === "Unnecessary") {
            if (products.includes(item)) {
                products.splice(products.indexOf(item), 1);
            } else {
                continue;
            }
        } else if (command === "Correct") {
            if (products.includes(item)) {
                products[products.indexOf(item)] = newItem;
            } else {
                continue;
            }
        } else if (command === "Rearrange") {
            if (products.includes(item)) {
                products.splice(products.indexOf(item), 1);
                products.push(item);
            } else {
                continue;
            }
        }
    }
    console.log(products.join(", "));
}

solve(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);
