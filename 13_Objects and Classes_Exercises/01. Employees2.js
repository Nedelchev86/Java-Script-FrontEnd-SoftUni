// Simple solution without object

function solve(arr) {
    arr.forEach((element) => {
        const name = element;
        const value = element.length;
        console.log(`Name: ${name} -- Personal Number: ${value}`);
    });
}

solve(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
