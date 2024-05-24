let getData = new Promise((resolve, reject) => {
    let num = Math.random() * 10;
    console.log(num);

    if (num < 5) {
        resolve(735776);
    }
    reject("No data available");
})

getData
    .then(data => console.log(data + 22))
    .catch(err => console.log("ERR:", err))

