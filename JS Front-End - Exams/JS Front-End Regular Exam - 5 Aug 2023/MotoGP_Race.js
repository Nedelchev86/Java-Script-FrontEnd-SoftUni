function solve(arr) {
    const number = Number(arr.shift());
    const racers = arr
        .splice(0, number)
        .map((x) => (isNaN(x) ? x : Number(x)))
        .reduce((acc, curr) => {
            const [name, capacity, position] = curr.split("|").map((x) => (isNaN(x) ? x : Number(x)));
            acc.push({name, capacity, position});
            return acc;
        }, []);

    function findRider(name) {
        return racers.find((x) => name === x.name);
    }

    for (const line of arr) {
        if (line === "Finish") {
            break;
        }

        const [command, ...rest] = line.split(" - ");

        if (command === "StopForFuel") {
            const [riderName, minFuel, newPosition] = rest.map((x) => (isNaN(x) ? x : Number(x)));
            const rider = findRider(riderName);

            if (rider.capacity < minFuel) {
                rider.position = newPosition;
                console.log(`${riderName} stopped to refuel but lost his position, now he is ${newPosition}.`);
            } else {
                console.log(`${riderName} does not need to stop for fuel!`);
            }
        } else if (command === "Overtaking") {
            const [rider1, rider2] = rest;
            const firstRider = findRider(rider1);
            const secondRider = findRider(rider2);
            if (firstRider.position < secondRider.position) {
                console.log(`${rider1} overtook ${rider2}!`);
                [firstRider.position, secondRider.position] = [secondRider.position, firstRider.position];
            }
        } else if (command === "EngineFail") {
            const [name, lapsLeft] = rest;
            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            const currRider = findRider(name);
            racers.splice(racers.indexOf(currRider), 1);
        }
    }
    racers.forEach((el) => {
        console.log(el.name);
        console.log(`  Final position: ${el.position}`);
    });
}

solve(["4", "Valentino Rossi|100|1", "Marc Marquez|90|3", "Jorge Lorenzo|80|4", "Johann Zarco|80|2", "StopForFuel - Johann Zarco - 90 - 5", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]);
