# Cooperative Asynchronous JavaScript: Timeouts and intervals

For a long time, web platform has made available to JavaScript programmers a number of functions that allow you to asynchronously execute code after a certain time interval has elapsed, and to repeatedly execute a block of code asynchronously until you tellit to stop

- **`setTimeout()`** - Execute a specified block of code once after a specified time has elapsed.
- **`setInterval()`** - Execute a specified block of code repeatedly witha fixed time delay between each call
- **`requestAnimationFrame()`** - The modern version of `setInterval()`; executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

The asynchronous code set up by these functions actually runs on the main thread, but you are able to run other code between iterations to a more or less efficient degree, depending on how processor intensive these operations are. In any case, these functions are used for running constant animations and other background processing on a web site or application. In the following sections we will show you how they can be used.

## setTimeout()

`setTimeout()` executes a particular block of code once after a specified time has elapsed. It takes the following parameters:

- A function to run, or a reference to function defined elsewhere.
- A number representing the time interval in milliseconds (so 1000 equals one second) to wait before executing the code. If you specify a value of 0 (or omit this value altogether), the function will run immediately. More on why you might want to do this later.
- Zero or more values that represent any parameters you want to pass to the function when it is run.

Note: Because timeout callbacks are executed cooperatively, there's no guarantee that they will be called after exactly the specified amount of time. Instead, they will be called after at least that much time has elapsed. Timeout handlers can't be run until the main thread reaches the point in its execution where it goes through these handlers to find the ones that need to be run.

`setTimeout()` returns an identifier value that can be used to the timeout later, such as when you want to stop it.

Any parameters that we want to pass to the function being run inside the `setTimeout()` have to be passed to it as additional parameters at the end of the list.

If a timeout has been created, you can cancel it before the specified time has elaspsed by calling `clearTimeout()`, passing it the identifier of the `setTimeout()` call as a parameter.

## setInterval()

`setInterval()` works in a very similar way to `setTimeout()`, except that the function you pass to it as the first parameter is executed repeatedly at no less than the number of milliseconds given by the second parameter apart, rather than at once.You can also pass any parameters required by the function being executed in as subsequent parameters of the setInterval() call.

### Clearing intervals

`setInterval()` keeps running a task forever, unless we do something about it - we may well want a way to stop such tasks, otherwise we may end up getting errors when the browser can't complete any further versions of the task, or if the animation being handled by the task has finished
We can do this in the same sort of way as we stopped timeouts — by passing the identifier returned by the setInterval() call to the clearInterval() function:

```JavaScript
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);

```
