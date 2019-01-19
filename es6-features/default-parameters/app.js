function addTo(amount,base=0){
    return amount + base;
}

console.log(addTo(10,10)) //If we provide a value, it replaces the default value
console.log(addTo(49)) //With no base\

//What if the second argument is not there

function addReverse (amount=50,base){
    return amount + base;
}

console.log(addReverse(75,)) //the result will be undefined, rearrange th3e functions