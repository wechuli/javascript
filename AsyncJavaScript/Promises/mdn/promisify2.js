function timeoutPromise(message, interval) {

    return new Promise((resolve, reject) => {
        if (message === '' || typeof message !== 'string') {
            reject('Message is empty or not a string');
        } else if (interval < 0 || typeof interval !== 'number') {
            reject("Interval is negative or not a number");
        } else {
            setTimeout(() => {
                resolve(message);
            }, interval)
        }
    })
}

timeoutPromise('Hello there!', 2000).then(message => console.log(message)).catch(err => console.log(err));

timeoutPromise('', 200).then(message => console.log(message)).catch(err => console.log(err));
timeoutPromise('blah blah', -200).then(message => console.log(message)).catch(err => console.log(err));

//result

// Message is empty or not a string
// Interval is negative or not a number
// Hello there!
