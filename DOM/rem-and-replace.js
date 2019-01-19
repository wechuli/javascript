///REPLACE ELEMENT

//Create Element

const newHeading = document.createElement("h2");

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task List New"));

//Get the old heading

const oldHeading = document.getElementById("task-title");

const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove list item
lis[0].remove();

//Remove Child
list.removeChild(lis[1]);

//CLASSES and ATTR

const firstli = document.querySelector("li:first-child");
const linkg = firstli.children[0];

let val;

val=linkg.className;
val=linkg.classList;
val=linkg.classList[0];
linkg.classList.add('test');
val=linkg.classList;


//Attributes
val=linkg.getAttribute('href'); //get an attribute
val=linkg.setAttribute('href','http://google.com'); //set an attriute
linkg.setAttribute('title',"Google");
val=linkg.hasAttribute('href');
linkg.removeAttribute('title');
console.log(val);