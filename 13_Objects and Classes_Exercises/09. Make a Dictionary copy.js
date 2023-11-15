function solve(arr) {
    const result = Object.entries(
        arr
            .map((x) => JSON.parse(x))
            .reduce((acc, curr) => {
                return {...acc, ...curr};
            }, {})
    )
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((element) => {
            console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
        });
}
