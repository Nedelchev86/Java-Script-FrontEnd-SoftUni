function solve(arr) {
    const number = Number(arr.shift());
    const astronauts = arr.splice(0, number).reduce((acc, curr) => {
        const [astro, oxygen, energy] = curr.split(" ").map((x) => (isNaN(x) ? x : Number(x)));
        acc[astro] = {oxygen, energy};
        return acc;
    }, {});

    for (const line of arr) {
        if (line === "End") {
            break;
        }
        const [command, name, value] = line.split(" - ").map((x) => (isNaN(x) ? x : Number(x)));

        if (command === "Explore") {
            if (astronauts[name].energy >= value) {
                astronauts[name].energy -= value;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } else if (command === "Refuel") {
            if (astronauts[name].energy + value > 200) {
                const amount = 200 - astronauts[name].energy;
                astronauts[name].energy = 200;
                console.log(`${name} refueled their energy by ${amount}!`);
            } else {
                astronauts[name].energy += value;
                console.log(`${name} refueled their energy by ${value}!`);
            }
        } else if (command === "Breathe") {
            if (astronauts[name].oxygen + value > 100) {
                const amount = 100 - astronauts[name].oxygen;
                astronauts[name].oxygen = 100;
                console.log(`${name} took a breath and recovered ${amount} oxygen!`);
            } else {
                astronauts[name].oxygen += value;
                console.log(`${name} took a breath and recovered ${value} oxygen!`);
            }
        }
    }
    Object.keys(astronauts).forEach((key) => {
        console.log(`Astronaut: ${key}, Oxygen: ${astronauts[key].oxygen}, Energy: ${astronauts[key].energy}`);
    });
}

solve(["3", "John 50 120", "Kate 80 180", "Rob 70 150", "Explore - John - 50", "Refuel - Kate - 30", "Breathe - Rob - 20", "End"]);
