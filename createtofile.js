const fs = require('fs');
const readline = require('readline');

const greetingtofile = (name) => {
    fs.writeFile('greeting.txt',`Hello there ${name}`, err => {
        if(err){
            console.log('Error occuered when writing to file');
        }
    });
}

greetingtofile('Nikhil');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('What is your name ', (name) => {
    r1.close();
    greetingtofile(name);
});