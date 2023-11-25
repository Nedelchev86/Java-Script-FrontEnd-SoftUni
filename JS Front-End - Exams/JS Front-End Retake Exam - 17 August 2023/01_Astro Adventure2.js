function solve(arr) {
    const numebr = Number(arr.shift());

    const astronauts = arr.splice(0, numebr).reduce((acc, curr) => {
        const [name, oxygen, energy] = curr.split(" ").map((x) => (isNaN(x) ? x : Number(x)));

        acc[name] = {oxygen: oxygen, energy: energy};
        return acc;
    }, {});

    for (const line of arr) {
        if (line === "End") {
            break;
        }
        let [command, name, amount] = line.split(" - ").map((x) => (isNaN(x) ? x : Number(x)));

        if (command === "Explore") {
            if (astronauts[name].energy >= amount) {
                astronauts[name].energy -= amount;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } else if (command == "Refuel") {
            if (astronauts[name].energy + amount > 200) {
                let curr_amount = 200 - astronauts[name].energy;
                astronauts[name].energy = 200;
                console.log(`${name} refueled their energy by ${curr_amount}!`);
            } else {
                console.log(`${name} refueled their energy by ${amount}!`);
                astronauts[name].energy += amount;
            }
        } else if (command == "Breathe") {
            if (astronauts[name].oxygen + amount > 100) {
                let curr_amount = 100 - astronauts[name].oxygen;
                astronauts[name].oxygen = 100;
                console.log(`${name} took a breath and recovered ${curr_amount} oxygen!`);
            } else {
                console.log(`${name} took a breath and recovered ${amount} oxygen!`);
                astronauts[name].oxygen += amount;
            }
        }
    }
    for (const [name, value] of Object.entries(astronauts)) {
        console.log(`Astronaut: ${name}, Oxygen: ${astronauts[name].oxygen}, Energy: ${astronauts[name].energy}`);
    }
}

// solve(["3", "John 50 120", "Kate 80 180", "Rob 70 150", "Explore - John - 50", "Refuel - Kate - 30", "Breathe - Rob - 20", "End"]);
solve(["4", "Alice 60 100", "Bob 40 80", "Charlie 70 150", "Dave 80 180", "Explore - Bob - 60", "Refuel - Alice - 30", "Breathe - Charlie - 50", "Refuel - Dave - 40", "Explore - Bob - 40", "Breathe - Charlie - 30", "Explore - Alice - 40", "End"]);
