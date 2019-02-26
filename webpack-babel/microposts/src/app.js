
import {http} from './http';


//Get posts on DOM load

document.addEventListener('DOMContentLoaded',getPosts);

function getPosts(){
   const posts =  http.get('http://localhost:3000/posts');
   console.log(posts);

