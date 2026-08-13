const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (firstInput) => {
    rl.question("Enter second number: ", (secondInput) => {

        let a = Number(firstInput);
        let b = Number(secondInput);

        console.log("Before swapping:");
        console.log("a =", a);
        console.log("b =", b);

        [a, b] = [b, a];

        console.log("After swapping:");
        console.log("a =", a);
        console.log("b =", b);

        rl.close();
    });
});