function schedule(arr) {
    let [allFlights, changefStatus, flightStatus] = arr;
    flightStatus = flightStatus[0];
    const flightObj = {};

    for (const el of allFlights) {
        const [number, ...destination] = el.split(" ");
        flightObj[number] = {};
        flightObj[number].Destination = destination.join(" ");
        flightObj[number].Status = "Ready to fly";
    }

    for (const el of changefStatus) {
        [number, fStatus] = el.split(" ");
        if (number in flightObj) {
            flightObj[number].Status = fStatus;
        }
    }

    Object.keys(flightObj).forEach((key) => {
        if (flightObj[key].Status === flightStatus) {
            console.log(`{ Destination: '${flightObj[key].Destination}', Status: '${flightStatus}' }`);
        }
    });
}
