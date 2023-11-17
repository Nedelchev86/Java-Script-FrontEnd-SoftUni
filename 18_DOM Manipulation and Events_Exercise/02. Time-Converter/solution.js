function attachEventsListeners() {
    const daysBtn = document.querySelector("#daysBtn");
    const hoursBtn = document.querySelector("#hoursBtn");
    const minutesBtn = document.querySelector("#minutesBtn");
    const secondsBtn = document.querySelector("#secondsBtn");

    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    daysBtn.addEventListener("click", daysClick);

    function daysClick(e) {
        const daysNum = e.currentTarget.parentElement.querySelector("#days").value;
        hours.value = daysNum * 24;
        minutes.value = daysNum * 1440;
        seconds.value = daysNum * 86400;
    }

    hoursBtn.addEventListener("click", hoursClick);

    function hoursClick(e) {
        const hoursNum = e.currentTarget.parentElement.querySelector("#hours").value;
        const daysNum = hoursNum / 24;
        days.value = daysNum;
        minutes.value = daysNum * 1440;
        seconds.value = daysNum * 86400;
    }

    minutesBtn.addEventListener("click", minutesClick);

    function minutesClick(e) {
        const minutesNum = e.currentTarget.parentElement.querySelector("#minutes").value;
        const daysNum = minutesNum / 1440;
        days.value = daysNum;
        hours.value = daysNum * 24;
        seconds.value = daysNum * 86400;
    }

    secondsBtn.addEventListener("click", secondsClick);

    function secondsClick(e) {
        const secondsNum = e.currentTarget.parentElement.querySelector("#seconds").value;
        const daysNum = secondsNum / 86400;
        days.value = daysNum;
        hours.value = daysNum * 24;
        minutes.value = daysNum * 1440;
    }
}

