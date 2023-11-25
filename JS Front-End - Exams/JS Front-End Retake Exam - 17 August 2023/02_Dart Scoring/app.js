window.addEventListener("load", solve);

function solve() {
    const inputFields = {
        player: document.querySelector("#player"),
        score: document.querySelector("#score"),
        round: document.querySelector("#round"),
    };

    const form = document.querySelector(".scoring-content");

    const buttons = {
        addBtn: document.querySelector("#add-btn"),
    };

    const currInformation = {
        player: null,
        score: null,
        round: null,
    };

    buttons.addBtn.addEventListener("click", loadAllData);

    function loadAllData() {
        if (Object.values(inputFields).some((x) => x.value === "")) {
            return;
        }
        const li = document.createElement("li");
        li.classList.add("dart-item");

        const article = document.createElement("article");
        const Pplayer = document.createElement("p");
        Pplayer.textContent = inputFields.player.value;
        const Pscore = document.createElement("p");
        Pscore.textContent = `Score: ${inputFields.score.value}`;
        const Pround = document.createElement("p");
        Pround.textContent = `Round: ${inputFields.round.value}`;

        for (const key in inputFields) {
            currInformation[key] = inputFields[key].value;
        }

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "edit");
        editBtn.textContent = "edit";
        editBtn.addEventListener("click", editInformation);

        const okBtn = document.createElement("button");
        okBtn.classList.add("btn", "ok");
        okBtn.textContent = "ok";
        okBtn.addEventListener("click", okFunction);

        article.appendChild(Pplayer);
        article.appendChild(Pscore);
        article.appendChild(Pround);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);

        document.querySelector("#sure-list").appendChild(li);

        buttons.addBtn.disabled = true;
        form.reset();
    }
    function editInformation() {
        for (const key in currInformation) {
            inputFields[key].value = currInformation[key];
        }
        document.querySelector("#sure-list").innerHTML = "";
        buttons.addBtn.disabled = false;
    }

    function okFunction() {
        let infoList = document.querySelector(".dart-item");
        console.log(infoList);
        let cloneList = infoList.cloneNode(true);
        cloneList.querySelector(".btn").remove();
        cloneList.querySelector(".btn").remove();
        document.querySelector("#scoreboard-list").appendChild(cloneList);
        document.querySelector("#sure-list").innerHTML = "";
        buttons.addBtn.disabled = false;
    }

    document.querySelector(".clear").addEventListener("click", () => window.location.reload());
}
