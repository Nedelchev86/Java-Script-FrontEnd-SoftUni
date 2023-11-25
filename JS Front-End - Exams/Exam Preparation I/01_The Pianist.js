function solve(arr) {
    const number = Number(arr.shift());
    const pieces = arr.splice(0, number).reduce((acc, curr) => {
        const [piece, composer, key] = curr.split("|");
        acc[piece] = {composer, key};
        return acc;
    }, {});

    for (const element of arr) {
        if (element === "Stop") {
            break;
        }

        const [command, piece, composer, key] = element.split("|");

        if (command === "Add") {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete pieces[piece];

                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command === "ChangeKey") {
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                console.log(`Changed the key of ${piece} to ${composer}!`);
                pieces[piece].key = composer;
            }
        }
    }
    for (const keys in pieces) {
        console.log(`${keys} -> Composer: ${pieces[keys].composer}, Key: ${pieces[keys].key}`);
    }
}

solve(["3", "Fur Elise|Beethoven|A Minor", "Moonlight Sonata|Beethoven|C# Minor", "Clair de Lune|Debussy|C# Minor", "Add|Sonata No.2|Chopin|B Minor", "Add|Hungarian Rhapsody No.2|Liszt|C# Minor", "Add|Fur Elise|Beethoven|C# Minor", "Remove|Clair de Lune", "ChangeKey|Moonlight Sonata|C# Major", "Stop"]);
