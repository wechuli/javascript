//EVENT BUBBLING
/*
document.querySelector(".card-title").addEventListener("click", () => {
  console.log(`card title`);
});

document.querySelector(".card-content").addEventListener("click", () => {
  console.log(`card content`);
});

document.querySelector(".card").addEventListener("click", () => {
  console.log(`card`);
});

document.querySelector(".col").addEventListener("click", () => {
  console.log(`col`);
});
*/

//EVENT DELEGATION

//const deleteItem = document.querySelector(".delete-item");
//deleteItem.addEventListener("click", delItem);

document.body.addEventListener("click", delItem);

function delItem(e) {
  //if (e.target.parentElement.className === "delete-item //secondary-content") {
  //  console.log("delete item");
  //  console.log(e.target);
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
}
