const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a year: ", (input) => {

    const year = Number(input);

    if ((year % 400 === 0) || 
        (year % 4 === 0 && year % 100 !== 0)) {
        
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }

    rl.close();
});
