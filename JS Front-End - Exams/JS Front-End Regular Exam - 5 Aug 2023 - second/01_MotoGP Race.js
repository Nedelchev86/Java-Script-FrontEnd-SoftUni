function solve(arr) {
    const number = Number(arr.shift());

    const racers = arr.splice(0, number).reduce((acc, curr) => {
        const [rider, fuel, position] = curr.split("|").map((x) => (isNaN(x) ? x : Number(x)));
        acc[rider] = {fuel, position};
        return acc;
    }, {});

    for (const line of arr) {
        if (line === "Finish") {
            break;
        }
        const [command, rider, ...rest] = line.split(" - ");
        if (command === "StopForFuel") {
            const [minFuel, newPosition] = rest;
            if (racers[rider].fuel < minFuel) {
                racers[rider].position = newPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (command === "Overtaking") {
            const rider2 = rest[0];
            if (racers[rider].position < racers[rider2].position) {
                [racers[rider].position, racers[rider2].position] = [racers[rider2].position, racers[rider].position];
                console.log(`${rider} overtook ${rider2}!`);
            }
        } else if (command === "EngineFail") {
            const laps = rest[0];
            console.log(`${rider} is out of the race because of a technical issue, ${laps} laps before the finish.`);
            delete racers[rider];
        }
    }
    for (const key in racers) {
        console.log(key);
        console.log(`  Final position: ${racers[key].position}`);
    }
}

solve(["4", "Valentino Rossi|100|1", "Marc Marquez|90|3", "Jorge Lorenzo|80|4", "Johann Zarco|80|2", "StopForFuel - Johann Zarco - 90 - 5", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]);
