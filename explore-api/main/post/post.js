function loadPost() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(posts) {
    let container = document.getElementById("container");
    for (let post of posts) {
        let postDiv = document.createElement("div")
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: title:${post.title}</h5>
            <p>Post Description:${post.body}</P>
        `
        container.appendChild(postDiv);
    }
}
loadPost();