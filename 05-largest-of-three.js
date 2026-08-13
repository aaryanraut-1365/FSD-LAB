const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (firstInput) => {
    rl.question("Enter second number: ", (secondInput) => {
        rl.question("Enter third number: ", (thirdInput) => {

            const a = Number(firstInput);
            const b = Number(secondInput);
            const c = Number(thirdInput);

            if (a >= b && a >= c) {
                console.log("Largest:", a);
            } else if (b >= a && b >= c) {
                console.log("Largest:", b);
            } else {
                console.log("Largest:", c);
            }

            rl.close();
        });
    });
});