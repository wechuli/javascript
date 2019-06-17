## Object and Map Compared
- The keys of an Object are Strings, where they can be of any value for a map
- You can get the size of a Map easily while you have to manually keep track of size for an Object
- The iteration of maps is in insertion order of the elements *
- an Object has a prototype, so there are default keys in the map(this can be bypassed using map = Object.create(null))

## Tips when deciding between maps and Objects
- Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
- Use maps if there is a need to store primitive values as keys because object treats each key as a string whether its a number value, boolean value or any other primitve value
- Use objects when there is logic that operates on individual elements
