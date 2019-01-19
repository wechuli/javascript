///Function declarations
//we can pass default parameters
function greet(firstNAme = 'John', lastNAme = "Doe") {
    //in ES5 if no vallues are defined, we can put default values
    //if(typeof(firstNAme) === 'undefined'){firstNAme='John';}
    // if(typeof(lastNAme) === 'undefined'){lastNAme='Doe';}

    //console.log('Hello');
    return 'Hello ' + firstNAme + ' ' + lastNAme;
}

console.log(greet('Paul', 'Wechuli'));
console.log(greet());

//Function expressions-putting a function expression as a variable

const square = function (x) {

    return Math.pow(x, 2);

};

console.log(square(45));

//Immediately Invokable Fucntion Expressions IIFEs

(function (name) {
    console.log(`Hello ${name}`);
})("Paul");

//Functions can be put inside objects, they are called methods

const todo = {
    add: function () {
        console.log('Add todo');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);

    }
}

todo.add();
todo.edit(44);

//we can define other methods outside

todo.delete=function(){
    console.log("Delete todo");
}

todo.delete();
