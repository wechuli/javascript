
let val;

val=document;
val=document.all;
val=document.all[0];
val=document.all[2];
val=document.doctype;

val=document.domain;
val=document.URL;
val=document.all.length
val=document.characterSet;
val=document.contentType;

val=document.forms;
val=document.forms[0].id;
val=document.forms[0].action;

val=document.links;
val=document.links[0];
val=document.links[0].className;
val=document.links[0].classList[0];


val=document.images;
val=document.scripts;
val=document.scripts[2].getAttribute('src');

let scripts=document.scripts;

let scriptsArray=Array.from(scripts);

scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val);