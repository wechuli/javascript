# Asynchronous JavaScript

Asynchronous techniques are very useful, particularly in web programming. When a web app runs in abrowser and it executes an intensive chunk of code without returning control to the browser, the brower can appear to be frozen. This is called blocking; the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.

In a synchronous programming model, things happen one at a time. when you call a function that performs a long-running action, it returns only when the action has finished and it can return the result.. This stops your program from the time the action takes.

In asynchronous model allows multiple things to happen at the same time.When you start an action, your program continues to run. When the action finishes, the progran is informed and gets access to the result.

## Threads

A thread is basically a single process that a program can use to complete tasks. Each thread can only do a single task at once. A thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler, which is typically a part of the operating system. The implementation of threads and processes differes between operating systems, but in most cases a thread is a component of a process. Multiple threads can exists within one process, executing concurrently and sharing resources such as memory, while different processes do not share these resources.In particular , the threads of a process share its executable code and the values of its dynamically allocated variables and non-thread-locval global varibles at any given time.

        Task A --> Task B --> Task C

Each task will be run sequenctially, atsk has to complete before the next one can be started. JavaScript is traditionally single-threaded. Even with multiple cores, you could only get it to run tasks on a single thread, called the main thread.

After some time, JavaScript gained some tools to help with such problems. Web workers allow you to send some of the JavaScript processing off to a separate thread, called a worker, so that you can run multiple JavaScript chunks simultaneously. You'd generally use a worker to run expensive processes off the main thread so that user interaction is not blocked.

## Asynchronous Code

Web workers are pretty useful, but they do have their limitations. A major one is they are not able to access the DOM — you can't get a worker to directly do anything to update the UI. We couldn't render our 1 million blue circles inside our worker; it can basically just do number crunching.

The second problem is that although code run in a worker is not blocking, it is still basically synchronous. This becomes a problem when a function relies on the results of multiple previous processes to function. Consider the following thread diagrams:

Main thread: Task A --> Task B
In this case, let's say Task A is doing something like fetching an image from the server and Task B then does something to the image like applying a filter to it. If you start Task A running and then immediately try to run Task B, you'll get an error, because the image won't be available yet.

Main thread: Task A --> Task B --> |Task D|
Worker thread: Task C -----------> | |
In this case, let's say Task D makes use of the results of both Task B and Task C. If we can guarantee that these results will both be available at the same time, then we might be OK, but this is unlikely. If Task D tries to run when one of its inputs is not yet available, it will throw an error.

To fix such problems, browsers allow us to run certain operations asynchronously. Features like Promises allow you to set an operation running (e.g. the fetching of an image from the server), and then wait until the result has returned before running another operation:

Main thread: Task A Task B
Promise: |**async operation**|
Since the operation is happening somewhere else, the main thread is not blocked while the async operation is being processed.

We'll start to look at how we can write asynchronous code in the next article. Exciting stuff, huh? Keep reading!

Modern software design increasingly revolves around using asynchronous programming, to allow programs to do more than one thing at a time. As you use newer and more powerful APIs, you'll find more cases where the only way to do things is asynchronously. It used to be hard to write asynchronous code. It still takes getting used to, but it's gotten a lot easier.

many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.

Why is this difficult to get to work using async code? Let's look at a quick example. When you fetch an image from a server, you can't return the result immediately. That means that the following (pseudocode) wouldn't work:

```JavaScript
const response = fetch('MyImage.png');
const blob = response.blob();
// display your image blob in the UI somehow
```

That's because you don't know how long the image will take to download, so when you come to run the second line it will throw an erro(possibly intermittently, posibly every time) because the `response` is not yet available. Instead, you need your code to wait unitl the `reponse` is returned before it tries to doanything else to it.

There are two main types of asynchronous code style you'll come across in JavaScript code, old-style callbacks and newer promise-style code.

### Callbacks

One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result. Performing multiple asynchronous actions in arow using callbacks means that you have to keep passing new functions to handle the contonuation of the computation after the actions.

When we pass a callback function as a parameter to another function, we are only passing the function definition as the parameter - the callback function is not exectued immediately. It is 'called back' (hence the name) asynchronously somewhere inside the containing function's body. The containing function is reponsible for executing the callback function when the time comes.

Callbacks are versatile - not only do they allow you to control the order in which functions are run and what data is passed between them, they also allow you to pass data to different functions depending on circumstance. Note that not all callbacks are sync - some run synchronously.

For some APIs, the first argument in a callback function will contain an error if something went wrong, or will be empty if all went well. this pattern is called 'error first callbacks' and is very common. It is the standard pattern for callcack-based APIs in NodeJS. This means that for evry callback declared, we need to ckeck if there is an error and that just adds to the mess when dealing with nested callbacks.

### Promises

Promises are the new style of async code that you'll see used in modern Web APIs. A good example is the fetch API
The `Promise` object represents the eventual completion(or failure) of an asynchronous operation, and its resulting value. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Instead of providing a callback, a promise has its own methods which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result is available and “catch(…)” for when something went wrong.

```JavaScript
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
```

Here we see `fetch()` taking a single parameter - the URL of a resource you want to fetch from the network - and returning a promise. The promise is an object representing the completion or failure of the async operation. It represents an intermediate state, as it were. In essence, it's the browser's way of saying "I promise to get back to you with the anser as soon as I can", hence the name "promise".
We've then got three further code blocks chained onto the end of the `fetch()`

- Two then() blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation, so you can go forward and do something else to it. Each .then() block returns another promise, meaning that you can chain multiple .then() blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another
- The catch() block at the end runs if any of the .then() blocks fail - in a similiar wat to synchonous try..catch blocks, an error object is made available inside the catch(), which can be used to report the kind of errror that has occurred. Note however that synchronous try...catch won't work with promises, although it will work with async/await

### Promises VS Callbacks

Promises have some similarities to old-style callbacks. They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.

However, promises are specifically made for handling async operations, and have many advantages over old-style callbacks:

- You can chain multiple async operations together using multiple .then() operations, passing the result of one into the next one as an input. This is much harder to do with callbacks, which often ends up with a messy "pyramid of doom" (also known as callback hell).
- Promise callbacks are always called in the strict order they are placed in the event queue.
- Error handling is much better — all errors are handled by a single .catch() block at the end of the block, rather than being individually handled in each level of the "pyramid".

You can't include an async code block that returns a result, which you then rely on later in a sync code block. You just can't guarantee that the async function will return before the browser has processed the async block.

JavaScript promises as introdues in ES6. Using a promise this way looks like this:

```JavaScript
someAsyncOperation(someParams)
.then(function(result){
    // Do something with the result
})
.catch(function(error){
    // Handle error
});

```

One important side note here is that “someAsyncOperation(someParams)” is not a Promise itself but a function that returns a Promise. The true power of promises is shown when you have several asynchronous operations that depend on each other, just like in the example above under “Callback Hell”.

Another important thing to notice is that even though we are doing two different asynchronous requests we only have one .catch() where we handle our errors. That’s because any error that occurs in the Promise chain will stop further execution and an error will end up in the next .catch() in the chain.

A friendly reminder: just like with callback based APIs, this is still asynchronous operations. The code that is executed when the request has finished — that is, the subsequent .then() calls — is put on the event loop just like a callback function would be. This means you cannot access any variables passed to or declared in the Promise chain outside the Promise. The same goes for errors thrown in the Promise chain. You must also have at least one .catch() at the end of your Promise chain for you to be able to handle errors that occur. If you do not have a .catch(), any errors will silently pass and fade away and you will have no idea why your Promise does not behave as expected.

### Creating Promises

Callbacks are not interchangeable with Promises. This means that callback-based APIs cannot be used as Promises. The main difference with callback-based APIs is it does not return a value, it just executes the callback with the result. A promise-based API, on the other hand, immediately returns a Promise that wraps the asynchronous operation, and the the caller uses the returned Promise object and calls then() and .catch() on it to declare what will happen when the operations has finished.

The creation of a Promise object is done via the Promise constructor by calling “new Promise()”. It takes a function as an argument and that function gets passed two callbacks: one for notifying when the operation is successful (resolve) and one for notifying when the operation has failed (reject). What you pass as an argument when calling resolve will be passed to the next then() in the promise chain. The argument passed when calling reject will end up in the next catch(). It is a good idea to make sure that you always pass Error objects when calling reject.

We can wrap a callback based asynchronous operation with a Promise like this:

```JavaScript
function getAsyncData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}
```

Note that it is within the function being passed to the Promise constructor that we start the asynchronous operation. This function is then responsible for calling resolve(success) when it's done or reject(error) if there are errors.

This means that we can use the function 'getAsyncData' like this:

```JavaScript
getAsyncData(“someValue”)
// Calling resolve in the Promise will get us here, to the first then(…)
.then(function(result){
    // Do stuff
})
// Calling reject in the Promise will get us here, to the catch(…)
// Also if there is an error in any then(..) it will end up here
.catch(function(error){
    // Handle error
});
```

The process of wrapping a callback based asynchronous function inside a Promise and return that promise instead is called “promisification”. We are “promisifying” a callback-based function. There are lots of modules that let you do this in a nice way but since version 8 NodeJs has a built in a helper called “util.promisify” for doing exactly that.
This means that our whole Promise wrapper above could instead be written like this:

```JavaScript
const { promisify } = require(‘util’);
const getAsyncData = promisify(getData);
getAsyncData(“someValue”)
.then(function(result){
    // Do stuff
})
.catch(function(error){
    // Handle error
});
```

### Conclusion

In its most basic form, JavaScript is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time. But web browsers define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs (the passage of time, the user's interaction with the mouse, or the arrival of data over the network, for example). This means that you can let your code do several things at the same time without stopping or blocking your main thread.

Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.

There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.

If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the main thread and complete the task asynchronously.

## Graceful Asynchronous Programming with Promises

Promises are a comparatively new feature of the JavaScript language that alow you to defer further actions unitl after a previous action has completed, or respond to its failure. This is really useful for setting up a sequence of async operations to work correctly.

Essentially, a Promise is an object that represents an intermediate state of an operation - in effect, a promise that a result of some kind will be returned at some point in the future. There is no guarantee of exactly when the operation will complte and the result will be returned, but there is a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.

Generally you are less interested in the amount of time an async operation will take to return its result (unless of course it takes far too long!), and more interested in being able to respond to it being returned, whenever that is. And of course, it's nice that it doesn't block the rest of the code execution.

At their most baisc, promises are similar to event listeners =, but with a few differences:

- A promises can only succeed or fail once. It cannot succeed or fail twice and it cannot switch from success to failure or vice cersa once the operation has completed.
- If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

#### Recap on Promises

1. When a promise is created, it is neither in a success or failure state. It is said to be pending.
2. When a promise returns, it is said to be resolved
   1. A successfully resolved promise is said to be fulfilled. It returns a value which can be accessed by chaining a `.then()` block onto the end of the promise chain. The executor function inside the `.then()` block contain the promise's return value.
   2. An unsuccessful resolved promise is said to be rejected. It returns a reson, an error message stating why the promise was rejected. This reason can be accessed by chaining a `.catch()` block onto the end of the promise chain.

### Running code in response to multiple promises fulfilling

`Promise.all()` is a static method that takes an array of promises as an input parameter and returns a new `Promise` object that will fulfill only if and when *all* promises in the array fulfill.

```JavaScript
Promise.all([a,b,c]).then(values =>{
    ...
})
```

If they fulfill, then the chained `.then()` block's executor function will be passed an array containing all those results as a parameter. If any of the promises passed to `Promise.all()` reject, the whole block will reject.

This can be very useful. Imagine that we’re fetching information to dynamically populate a UI feature on our page with content. In many cases, it makes sense to receive all the data and only then show the complete content, rather than displaying partial information.

### Running some final code after a promise fulfills/rejects

There will be cases where you want to run a final block of code after a promise completes regardless of whether it fulfilled or rejected. You can do this using the `.finally()` method.

```JavaScript
myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});
```

### Building Custom Promises

It is possible to build your own promises using the `Promise()` constructor. The main situation in which you'll want to do this is when you've got code based on an old-school asynchronous API that is not promise-based, which you want to promisify. This comes in handy when you need to use existing, older project code, libraries or frameworks along with modern promise-based code.

We can create a promise that rejects using the `reject()` method - just like `resolve()`, this takes a single value, but in this case it is the reason to reject with i.e the error that will be passed into the `.catch()` block.

#### Promises Conclusion

Promises are a good way to build asynchronous applications when we don't know the return value of a function or how long it will take to return.They make is easier to express and reason about sequences of asynchronous operations without deeply nested callbacks and they support a style of error hanlding that is similar to the synchrnous `try..catch` statement.

Most moderm Web APIs are promise-based. Among those APIs are **WebRTC**,**WebAudio**,**Media Capture and Streams** 