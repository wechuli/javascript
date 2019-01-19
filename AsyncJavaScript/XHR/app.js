//Create Event listener for the button

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest();
  //OPEN -specify the type of request we want to make and the URL
  xhr.open("GET", "data.txt", true);
  // console.log('READYSTATE',xhr.readyState);

  //Optional-USed for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function() {
    //onload is called when everything is ready
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = `<p>${
        this.responseText
      }</p>`;
    }
  };

  //   xhr.onreadystatechange=function(){
  //     console.log('READYSTATE',xhr.readyState);

  //       if(this.status===200 && this.readyState===4){
  //           console.log(this.responseText);
  //       }
  //   }

  //for error handling
  xhr.onerror = function() {
    console.log("Request error...");
  };
  xhr.send(); //sends the request

  //readyState Values
  //0:request not initialized
  //1:server connection established
  //2:request received
  //3:processing request
  //4:request finished and response is ready

  //HTTP Statuses
  //200:OK
  //403:Forbidden
  //404:Not Found
}
