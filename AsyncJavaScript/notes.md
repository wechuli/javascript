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