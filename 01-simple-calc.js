const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (firstInput) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
        rl.question("Enter second number: ", (secondInput) => {

            const a = Number(firstInput);
            const b = Number(secondInput);

            let result;

            if (operator === "+") {
                result = a + b;
            } else if (operator === "-") {
                result = a - b;
            } else if (operator === "*") {
                result = a * b;
            } else if (operator === "/") {
                if (b === 0) {
                    console.log("Cannot divide by zero.");
                    rl.close();
                    return;
                }

                result = a / b;
            } else {
                console.log("Invalid operator.");
                rl.close();
                return;
            }

            console.log("Result:", result);

            rl.close();
        });
    });
});