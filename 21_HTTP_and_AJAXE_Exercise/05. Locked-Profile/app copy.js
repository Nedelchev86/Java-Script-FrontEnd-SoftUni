function lockedProfile() {
    loadProfile();
    const mainDiv = document.querySelector("#main");

    async function loadProfile() {
        const profiels = await (await fetch("http://localhost:3030/jsonstore/advanced/profiles")).json();

        Object.values(profiels).forEach((el) => {
            const profileDiv = document.createElement("div");
            profileDiv.classList.add("profile");

            const image = document.createElement("img");
            image.src = "./iconProfile2.png";
            image.classList.add("userIcon");

            profileDiv.appendChild(image);

            const label = document.createElement("label");
            label.textContent = "Lock";
            profileDiv.appendChild(label);

            const locked = document.createElement("input");
            locked.type = "radio";
            locked.name = `${el.username}Locked`;
            locked.value = "lock";
            locked.checked = true;
            profileDiv.appendChild(locked);
            console.log(el);
            const label1 = document.createElement("label");
            label1.textContent = "Unlock";
            profileDiv.appendChild(label1);

            const unLocked = document.createElement("input");
            unLocked.type = "radio";
            unLocked.name = `${el.username}ocked`;
            unLocked.value = "unlock";
            unLocked.checked = false;

            profileDiv.appendChild(unLocked);

            const br = document.createElement("br");
            const hr = document.createElement("hr");

            profileDiv.appendChild(br);
            profileDiv.appendChild(hr);

            const LabelName = document.createElement("label");
            LabelName.textContent = "Username";

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.name = `${el.username}`;
            nameInput.value = el.username;
            nameInput.disabled = true;
            nameInput.readOnly = true;

            profileDiv.appendChild(nameInput);

            mainDiv.appendChild(profileDiv);
        });
    }
}
