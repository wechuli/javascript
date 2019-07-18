// sync

function hello() {
    return 'hello there'
}

console.log(hello());

async function hello_sync() {
    return 'hello there';
}

console.log(hello_sync())
hello_sync().then(message => console.log(message));