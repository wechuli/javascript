const posts = [
  {
    title: "post one",
    body: "This is post one"
  },
  {
    title: "post two",
    body: "This is post two"
  },
  {
    title: "post three",
    body: "This is post three"
  }
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Four", body:"This is post four" });
getPosts();