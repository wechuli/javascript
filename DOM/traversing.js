let val;

const list = document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes

val = list.childNodes; //Return a node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//node Type encoding
//1-Element
//2-Attribute(deprecated)
//3-Text node
//8-Comment
//9-Document itself
//10.Doctype


//Get children element nodes-gives us only the elements

val = list.children; //Returns an HTML collection
val = list.children[1];
val.textContent = "Hello";

val = list.children[3].children;
val = list.children[3].children[0].id = "test-link";


///First child

val = list.firstChild; //node
val = list.firstElementChild; //element

//last Child
val = list.lastChild; //node
val = list.lastElementChild; //element

//Count child elements

val = list.childElementCount;

//Get Parent node


val = listItem.parentNode;
val = listItem.parentElement;

//parents of parents

val = listItem.parentElement.parentNode;

//Get next siblings

val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;


//Get previous siblings

val=listItem.previousSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;



console.log(val);