const clearBt = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");
//Click
// clearBt.addEventListener("click", runEvent);
//Double Click
//clearBt.addEventListener('dblclick',runEvent);

//Mouse Down
//clearBt.addEventListener('mousedown',runEvent);

//Mouse Up
//clearBt.addEventListener('mouseup',runEvent);

//Mouse Enter
//card.addEventListener('mouseenter',runEvent);

//Mouse Leave
//card.addEventListener('mouseleave',runEvent);

//Mouse Over
//card.addEventListener('mouseover',runEvent);

//Mouse Out
//card.addEventListener('mouseout',runEvent);

//Mousemove
card.addEventListener("mousemove", runEvent);

//Event Handler

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},${e.offsetY+e.offsetX})`;
}
