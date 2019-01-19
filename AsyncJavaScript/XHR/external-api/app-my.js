const button = document.querySelector(".get-jokes");
button.addEventListener("click", getJokes);
const input = document.querySelector("#number");
const list = document.querySelector("ul");
const clearBtn = document.querySelector(".clear-jokes");
clearBtn.addEventListener("click", clearList);

function getJokes(e) {
  const value = input.value;

  const xhr = new XMLHttpRequest();
  console.log(value);

  e.preventDefault();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${value}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const jokes = JSON.parse(this.responseText);
      jokes["value"].forEach(element => {
        //console.log(element);
        const joke = element.joke;
        //console.log(joke);
        const listItem = document.createElement("li");
        listItem.textContent = joke;
        list.appendChild(listItem);
        input.value = "";
      });
    }
  };
  xhr.send();
}

function clearList(e) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  input.value = "";
  e.preventDefault();
}
