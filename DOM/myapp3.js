//document.getElementByClassName
/*
const items=document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

items[0].style.color="red";
items[3].textContent="Hello";

const listitems=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listitems);

*/
//document.getElementByTagName
let items = document.getElementsByTagName('li');
console.log(items);
console.log(items[0]);

items[0].style.color = "red";
items[3].textContent = "Hello";

//Convert HTML collection into array

items = Array.from(items);

items.reverse();

items.forEach((item, index) => {
    console.log(item.className);
    item.textContent = `${index} Hello`;
});
//console.log(items);


//document.querySelectorAll

const myitems = document.querySelectorAll('ul.collection li.collection-item');
console.log(myitems);

myitems.forEach((myitem, index) => {
    console.log(myitem.className);
    myitem.textContent = `${index} Hello`;
});

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item,index)=>{
    item.style.background='grey';
    item.textContent=`${index}: Hello an Even`;
});

for(let i=0;i<liEven.length;i++){
    liEven[i].style.background='#ccc';

}