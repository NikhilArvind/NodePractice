function add (a,b){
    return a+b ;
}

function subtract(a,b){
    return a-b;
}

console.log(add(1,2));

module.exports.add = add;
module.exports.subtract = subtract;