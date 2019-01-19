//get all the references to the DOM objects
const text = document.getElementById("button1");
const json = document.getElementById("button2");
const apiData = document.getElementById("button3");
const para = document.getElementById("output");

const textp = document.querySelector(".text");
const jsonp = document.querySelector(".json");
const apiDatap = document.querySelector(".apiData");

//attach event listeners
text.addEventListener("click", getText);
json.addEventListener("click", getJson);
apiData.addEventListener("click", getExternal);

//Functions for handling events

//Get Local Text File Data
function getText() {
  fetch("text.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      let paraContent = document.createElement("p");
      paraContent.textContent = data;
      textp.appendChild(paraContent);
    })
    .catch(function(err) {
      console.log(err);
    });
}

//Get Local Text
function getJson() {
  fetch("jsondata.json")
    .then(res => res.json()) //Using an arrow function
    .then(result => {
      let output = "";
      result.forEach((item, index) => {
        output += `<ul>
                    <h3>Customer ${index + 1}</h3>
                    <li>Name: ${item.name}</li>
                    <li>Sex: ${item.gender}</li>
                    <li>Company: ${item.company}</li>
                  </ul>`;
      });
      jsonp.innerHTML = output;
      console.log(result);
    })
    .catch(err => console.log(err));
}

//Get External data
function getExternal() {
  fetch("https://api.github.com/users/wechuli")
    .then(res => res.json())
    .then(function(result) {
      console.log(result);

      let output = `<ul>
                        <h3>${result.login}</h3>
                        <li>No of public Repos: ${result.public_repos}</li>
                        <li>URL Link:<a href="${result.url}">${
        result.url
      }</a></li>  
                    </ul> <img src="${result.avatar_url}">`;

      apiDatap.innerHTML = output;
    })
    .catch(err => console.log(err));
}
