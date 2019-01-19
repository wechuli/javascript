//For Loop


for (let i = 0; i < 10; i++) {
   // console.log(`${i}`)
   if(i===2){
       console.log(`${i} is my favorite number`);
       //If we want it to start a new iteration we use continue
       continue;
   }
   console.log(`Number ${i}`);
}

//break
let mychoice=6;
for (let i = 0; i < 10; i++) {
    // console.log(`${i}`)
    if(i===mychoice){
        console.log(`${i} is my favorite number`);
        //If we want it to break out of an iteration we
        //use break
        break;
    }
    console.log(`I don't like ${i}`);
 }