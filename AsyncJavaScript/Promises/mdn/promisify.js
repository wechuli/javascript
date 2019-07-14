let timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000)
})

timeout.then(response => console.log(response)).catch(err => console.log(err))