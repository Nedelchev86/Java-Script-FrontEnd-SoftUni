function solve(arr) {
    const result = arr
        .map((x) => JSON.parse(x))
        .reduce((acc, curr) => {
            return {...acc, ...curr};
        }, {});

    const sorted = Object.keys(result).sort();

    sorted.forEach((element) => {
        console.log(`Term: ${element} => Definition: ${result[element]}`);
    });
}
