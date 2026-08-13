const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    const number = Number(input);

    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log("Prime Number");
    } else {
        console.log("Not a Prime Number");
    }

    rl.close();
});