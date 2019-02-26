import { http } from "./http";
import {ui} from './ui'

//Get posts on DOM load

document.addEventListener("DOMContentLoaded", getPosts);

function getPosts() {
  const posts = http
    .get("http://localhost:3000/posts")
    .then(data => {
        ui.showPosts(data);
    })
    .catch(err => console.log(err));
}
