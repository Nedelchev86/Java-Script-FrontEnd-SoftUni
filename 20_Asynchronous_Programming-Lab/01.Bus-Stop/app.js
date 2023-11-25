async function getInfo() {
    const busId = document.querySelector("#stopId");
    const busesUL = document.querySelector("#buses");
    const stopName = document.querySelector("#stopName");

    busesUL.textContent = "";

    if (!stopId.value) {
        stopName.textContent = "Error";
        busId.value = "";
        return;
    }
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId.value}`);
        allBuses = await response.json();
    } catch (_) {
        stopName.textContent = "Error";
        busId.value = "";
        return;
    }

    stopName.textContent = allBuses.name;

    Object.entries(allBuses.buses).forEach((element) => {
        const li = document.createElement("li");
        li.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`;
        busesUL.appendChild(li);
    });
    busId.value = "";
}
