function attachEvents() {
    const refreshBtn = document.querySelector("#refresh");
    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", AddMessage);
    refreshBtn.addEventListener("click", refreshMessage);
    const messagesBox = document.querySelector("#messages");

    async function refreshMessage() {
        messagesBox.textContent = "";
        const allMessage = await (await fetch("http://localhost:3030/jsonstore/messenger")).json();
        const messageList = [];
        Object.entries(allMessage).forEach(([key, value]) => {
            messageList.push(`${value.author}: ${value.content}`);
        });
        messagesBox.textContent = messageList.join("\n");
    }

    async function AddMessage() {
        const author = document.querySelector(`input[name="author"]`).value;
        const content = document.querySelector(`input[name="content"]`).value;

        fetch("http://localhost:3030/jsonstore/messenger", {
            method: "POST",
            body: JSON.stringify({author, content}),
        });
    }
}

attachEvents();
