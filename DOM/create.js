//Create element

const li = document.createElement("li");

//Add class
li.className = "collection-item";

//Add id
li.id = "new-item";

//Add attribute
li.setAttribute("title", "New item");

//create text node and append
text = document.createTextNode("Hello World");
li.appendChild(text);

//Create new link element

const link = document.createElement('a');
link.className="delete-item secondary-content";
link.innerHTML='<i class="fa fa-remove"></i>';

//Append li as a child to ul
li.appendChild(link);

const mylist=document.querySelector('ul.collection');
mylist.appendChild(li);

console.log(li);
