//JavaScript has a special keyword, this, that you can use within a method to refer to the current object the code is being written inside. When creating conmstructors and so on, this is very useful -  it will always ensure that the correct values are used when a member's context changes

// this isn't hugely useful when you are writing out object literals but it really comes into its own when you are dynamically generating objects

//It is useful to think about the way objects communicate as message passing - when an object needs another object to perform some kind of action, often it will send a message to the other object via its methods, and wait for a response, which we know as a return value.