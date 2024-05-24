/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => console.log(response));
    .then(response => response.json()) // .json is not similar but close to JSON
    .then(json => console.log(json)) */

/* let url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json)); */

function loadData() {
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
}




