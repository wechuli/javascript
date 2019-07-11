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

## Things to Keep in Mind about `setTimeout()` and `setInterval()`

### Recursive timeouts

```JavaScript
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

Compare the above example to the following one - this uses `setInterval()` to accomplish the same effect:

```JavaScript
let i = 1;

setInterval(function run() {
  console.log(i);
  i++
}, 100);
```

When your code has the potential to take longer to run than the time interval you’ve assigned, it’s better to use recursive setTimeout() — this will keep the time interval constant between executions regardless of how long the code takes to execute, and you won't get errors.

### Immediate timeouts

Using 0 as the value of `setTimeout()` schedules the execution of the specified callback function as soon as possible but only after the main code thread has been run.

This can be useful in cases where you want to set a block of code to run as soon as all of the main thread has finished running — put it on the async event loop, so it will run straight afterwards.

### Clearing with clearTimeout() or clearInterval()

clearTimeout() and clearInterval() both use the same list of entries to clear from. Interestingly enough, this means that you can use either method to clear a setTimeout() or setInterval().

For consistency, you should use clearTimeout() to clear setTimeout() entries and clearInterval() to clear setInterval() entries. This will help to avoid confusion

## requestAnimationFrame()

requestAnimationFrame() is a specialized looping function created for running animations efficiently in the browser. It is basically the modern version of setInterval() — it executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable frame rate regardless of the environment it is being run in.

It was created in response to perceived problems with setInterval(), which for example doesn't run at a frame rate optimized for the device, sometimes drops frames, continues to run even if the tab is not the active tab or the animation is scrolled off the page, etc.
