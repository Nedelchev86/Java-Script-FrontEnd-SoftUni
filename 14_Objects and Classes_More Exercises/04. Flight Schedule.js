function solve(arr) {
    const myObj = arr.shift().reduce((acc, curr) => {
        const [flight, destitantion] = curr.split(" ");
        acc[flight] = {};
        acc[flight]["Destination"] = destitantion;
        acc[flight]["Status"] = "Ready to fly";
        return acc;
    }, {});

    arr.shift().map((el) => {
        const [flight, status] = el.split(" ");
        if (myObj.hasOwnProperty(flight)) {
            myObj[flight]["Status"] = status;
        }
    });

    const currStatus = arr.shift()[0];

    for (const key in myObj) {
        if (myObj[key].Status === currStatus) {
            console.log(myObj[key]);
        }
    }
}

solve([["WN269 Delaware", "FL2269 Oregon", "WN498 Las Vegas", "WN3145 Ohio", "WN612 Alabama", "WN4010 New York", "WN1173 California", "DL2120 Texas", "KL5744 Illinois", "WN678 Pennsylvania"], ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"], ["Cancelled"]]);
