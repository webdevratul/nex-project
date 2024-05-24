function loadUsers2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(data) {
    let ul = document.getElementById("users-list")
    for (let user of data) {
        let li = document.createElement("li")
        li.innerText = user.name
        ul.appendChild(li);
    }
}