function solve() {
    let busStop = "depot";
    let arivedStop = "";
    const info = document.querySelector("#info .info");
    const departBtn = document.querySelector("#depart");
    const arriveBtn = document.querySelector("#arrive");

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop}`)
            .then((promise) => promise.json())
            .then((buses) => {
                info.textContent = `Next stop ${buses.name}`;

                departBtn.disabled = true;
                arriveBtn.disabled = false;
                arivedStop = buses.name;
                busStop = buses.next;
            });
    }

    async function arrive() {
        info.textContent = `Arriving at ${arivedStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
