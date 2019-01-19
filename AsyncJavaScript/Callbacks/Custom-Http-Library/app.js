const http = new easyHTTP();

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

//Get Single post

http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Create data

const data = {
  userId: 101,
  id: 101,
  title: "This is not a drill oj",
  body:
    "This is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drillThis is not a drill"
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

http.put("https://jsonplaceholder.typicode.com/posts/21", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Delete Post

http.delete("https://jsonplaceholder.typicode.com/posts/21", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
