//set local storage item-local storage must be deleted
/*
localStorage.setItem('name','John');
localStorage.setItem('age','30');

//SET SESSION ITEM
sessionStorage.setItem('name',"Beth");

//REMOVE FROM STORAGE
//localStorage.removeItem('name');

//GET FROM STORAGE

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name,age);

//clear local storage

localStorage.clear();

console.log(name,age);

*/

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((task,index) => {
    console.log(index,task);
});
