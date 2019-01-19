function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request

easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  //if we don't want to use arrow function
  //let self = this

  this.http.onload = () => {
    if (this.http.status === 200) {
      //When you are inside a function, the this keyword partains to that function, so we use an arrow function
      callback(null, this.http.responseText);
    } else {
      callback(`Error: ${this.http.status}`);
    }
  };

  this.http.send();
};
//Make an HTTP POST Request

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//Make an HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);
  //if we don't want to use arrow function
  //let self = this

  this.http.onload = () => {
    if (this.http.status === 200) {
      //When you are inside a function, the this keyword partains to that function, so we use an arrow function
      callback(null, "Post Deleted");
    } else {
      callback(`Error: ${this.http.status}`);
    }
  };

  this.http.send();
};
