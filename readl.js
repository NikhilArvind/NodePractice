const readline = require('readline');

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

r1.question('What do you think?', (name) => {
    console.log(`Thank you  ${name}`);
    r1.close();
});