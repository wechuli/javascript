//Using simple patterns

//Simple patterns are constructed of characters for which you want to find a direct match.


//Using special charcasters

let pattern = /ab*c/;
let pattern2 = /ab(a-zA-Z0-9)*c/

let matched = pattern.exec('This is some abbbcndnt stuff but comb');
let matched2 = pattern.exec('This is some abundant stuff but comb');

console.log(matched);
console.log(matched2);

//Escaping