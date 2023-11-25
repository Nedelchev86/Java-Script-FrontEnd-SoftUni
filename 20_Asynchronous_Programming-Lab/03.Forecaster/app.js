function attachEvents() {
    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", getWather);

    const symbols = {
        Sunny: "☀",
        "Partly sunny": "⛅",
        Overcast: "☁",
        Rain: "☂",
    };

    const location = document.querySelector("#location");

    async function getWather() {
        document.querySelector("#upcoming").style.display = "none";
        document.querySelector(".label").textContent = "Current conditions";
        try {
            const promise = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
            const locations = await promise.json();
            const code = locations.find((el) => el.name === location.value).code;
            Conditions(code);
            TreeDays(code);
        } catch (e) {
            const forecast = document.querySelector("#forecast");
            forecast.style.display = "block";
            document.querySelector("#upcoming").style.display = "none";
            document.querySelector(".label").textContent = "Error";

            return;
        }
    }

    async function Conditions(code) {
        const promise = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const conditions = await promise.json();

        document.querySelector("#forecast").style.display = "block";
        const currentDiv = document.querySelector("#current");

        const forecastsDiv = document.createElement("div");
        forecastsDiv.classList.add("forecasts");

        const spanSymbol = document.createElement("span");
        spanSymbol.classList.add("condition");
        spanSymbol.classList.add("symbol");
        spanSymbol.textContent = symbols[`${conditions.forecast.condition}`];
        forecastsDiv.appendChild(spanSymbol);

        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");

        const spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = conditions.name;

        const spanDegree = document.createElement("span");
        spanDegree.classList.add("forecast-data");
        spanDegree.textContent = `${conditions.forecast.low}°/${conditions.forecast.high}°`;

        const spanInfo = document.createElement("span");
        spanInfo.classList.add("forecast-data");
        spanInfo.textContent = conditions.forecast.condition;

        conditionSpan.appendChild(spanName);
        conditionSpan.appendChild(spanDegree);
        conditionSpan.appendChild(spanInfo);

        forecastsDiv.appendChild(conditionSpan);
        currentDiv.appendChild(forecastsDiv);
    }

    async function TreeDays(code) {
        const promise = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const info = await promise.json();

        const forecastInfo = document.createElement("div");
        forecastInfo.classList.add("forecast-info");

        for (let index = 0; index < 3; index++) {
            const upsomingDiv = document.querySelector("#upcoming");

            const upcomingSpan = document.createElement("span");
            upcomingSpan.classList.add("upcoming");
            const spanSymbol = document.createElement("span");
            spanSymbol.classList.add("symbol");
            spanSymbol.textContent = symbols[info.forecast[index].condition];

            const spanInfo = document.createElement("span");
            spanInfo.classList.add("forecast-data");
            spanInfo.textContent = `${info.forecast[index].low}°/${info.forecast[index].high}°`;

            const spanInfoMore = document.createElement("span");
            spanInfoMore.classList.add("forecast-data");
            spanInfoMore.textContent = info.forecast[index].condition;

            upcomingSpan.appendChild(spanSymbol);
            upcomingSpan.appendChild(spanInfo);
            upcomingSpan.appendChild(spanInfoMore);
            forecastInfo.appendChild(upcomingSpan);

            upsomingDiv.appendChild(forecastInfo);
        }
    }
}

attachEvents();
