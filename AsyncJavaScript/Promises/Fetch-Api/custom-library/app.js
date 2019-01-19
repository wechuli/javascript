const http = new EasyHTTP();

//Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));

//USer Data
const userData = {
  name: "Paul Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};

//Create Users
http
  .post("https://jsonplaceholder.typicode.com/users", userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

  //Update Users
http
.put("https://jsonplaceholder.typicode.com/users/2", userData)
.then(data => console.log(data))
.catch(err => console.log(err));

//Delete Users
http
.delete("https://jsonplaceholder.typicode.com/users/3")
.then(data => console.log(data))
.catch(err => console.log(err));