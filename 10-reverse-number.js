const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseNumber(num) {
    let reversed = 0;
    let n = Math.abs(num);

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return num < 0 ? -reversed : reversed;
}

rl.question("Enter a number: ", (input) => {
    const num = Number(input);

    if (isNaN(num) || input.trim() === "") {
        console.log("Please enter a valid number.");
    } else {
        console.log("Reversed Number:", reverseNumber(num));
    }

    rl.close();
});
