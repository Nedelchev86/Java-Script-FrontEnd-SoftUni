function solve(arr) {
    const horses = arr.shift().split("|");

    for (let index = 0; index < arr.length; index++) {
        const line = arr[index];

        if (line === "Finish") {
            break;
        }
        const [command, horse1, horse2] = line.split(" ");

        if (command === "Retake") {
            const horse1Position = horses.indexOf(horse1);
            const horse2Position = horses.indexOf(horse2);
            if (horse1Position < horse2Position) {
                [horses[horse1Position], horses[horse2Position]] = [horses[horse2Position], horses[horse1Position]];
                console.log(`${horse1} retakes ${horse2}.`);
            }
        } else if (command === "Trouble") {
            const horsePosition = horses.indexOf(horse1);
            if (horsePosition > 0) {
                [horses[horsePosition], horses[horsePosition - 1]] = [horses[horsePosition - 1], horses[horsePosition]];
                console.log(`Trouble for ${horse1} - drops one position.`);
            }
        } else if (command === "Rage") {
            const horsePosition = horses.indexOf(horse1);
            horses.splice(horsePosition, 1);
            horses.splice(horsePosition + 2, 0, horse1);
            console.log(`${horse1} rages 2 positions ahead.`);
        } else if (command === "Miracle") {
            horses.push(horses.shift());
            console.log(`What a miracle - ${horses[horses.length - 1]} becomes first.`);
        }
    }
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses.pop()}`);
}

solve(["Bella|Alexia|Sugar", "Retake Alexia Sugar", "Rage Bella", "Trouble Bella", "Finish"]);
