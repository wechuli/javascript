## Objectives

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems


## Recursion
A process(a function in our case) that calls itself
Examples:
- JSON.parse/JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- It is sometimes a cleaner alternative to iteration

## The Call Stack
In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked
It's named the **call stack!**
- Any time a function is invoked, it is placed(pushed) on top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)
