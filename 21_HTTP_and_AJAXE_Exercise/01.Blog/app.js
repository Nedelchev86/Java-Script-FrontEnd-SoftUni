function attachEvents() {
    const btnLoadPosts = document.querySelector("#btnLoadPosts");
    btnLoadPosts.addEventListener("click", LoadPost);
    const posts = document.querySelector("#posts");
    const ul = document.querySelector("#post-comments");
    const postTtile = document.querySelector("#post-title");
    const bodyTitle = document.querySelector("#post-body");

    let allPostObj = {};

    async function LoadPost() {
        const promise = await fetch("http://localhost:3030/jsonstore/blog/posts");
        const allPosts = await promise.json();

        allPostObj = allPosts;
        Object.entries(allPosts).forEach(([key, value]) => {
            const option = document.createElement("option");
            option.textContent = value.title.toUpperCase();
            option.value = value.id;
            posts.appendChild(option);
        });
    }

    const btnViewPost = document.querySelector("#btnViewPost");
    btnViewPost.addEventListener("click", loadComment);

    async function loadComment() {
        for (const key in allPostObj) {
            console.log(allPostObj);
            console.log(key);
            if (posts.value === allPostObj[key].id) {
                postTtile.textContent = allPostObj[key].title;
                bodyTitle.textContent = allPostObj[key].body;
            }
        }

        ul.innerHTML = "";
        const promise = await fetch("http://localhost:3030/jsonstore/blog/comments");
        const allComment = await promise.json();

        Object.entries(allComment).forEach(([key, value]) => {
            if (value.postId === posts.value) {
                const li = document.createElement("li");
                li.textContent = value.text;
                ul.appendChild(li);
            }
        });
    }
}
attachEvents();
