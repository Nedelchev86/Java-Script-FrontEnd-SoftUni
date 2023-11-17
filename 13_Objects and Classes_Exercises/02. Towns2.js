function solve(arr) {
    for (const towns of arr) {
        const [town, latitude, longitude] = towns.split(" | ");
        let result = {town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)};
        console.log(result);
    }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
