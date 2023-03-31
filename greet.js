const operatorsObj = require('./add.js');

require('./add.js');

function greet(name){
    console.log("Hello there " +name + "!");
}

greet("Nikhil");

console.log(operatorsObj.add(10,20));
console.log(operatorsObj.subtract(20,10));