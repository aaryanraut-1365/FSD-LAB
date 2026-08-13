const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    let number = Math.abs(Number(input));
    let sum = 0;

    while (number > 0) {
        const digit = number % 10;

        sum += digit;

        number = Math.floor(number / 10);
    }

    console.log("Sum of digits:", sum);

    rl.close();
});