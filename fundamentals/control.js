const id = '100';

//Equal 

if (id == 100) {
    console.log("Equal to 100");
} else {
    console.log("Not equal to 100");
}

//Not Equal to
let randnumner=300
if (randnumner != 100) {
    console.log("Equal to 100");
} else {
    console.log("Not equal to 100");
}

//You want to test the value and also the type by 3 equal signs

if (id === 100) {
    console.log("Equal to 100");
} else {
    console.log("Not equal to 100");
}
//

if (randnumner !== 100) {
    console.log("Equal to 100");
} else {
    console.log("Not equal to 100");
}

//test to see if it is defined

if(typeof id !== undefined){
    console.log(`The ID is ${id}`);

}else{
    console.log('No ID');
}

//Greater or less than
if (id => 200) {
    console.log("Greater than or equal to 200");
} else {
    console.log("Less than 200");
}
//If else
const color='yellow';

if(color === 'red'){
    console.log('Color is Red');
}else if(color == 'blue'){
    console.log('Color is blue');
}else if(color=='yellow'){
    console.log('color is yellow');
}
else{
    console.log('Unknown Color')
}