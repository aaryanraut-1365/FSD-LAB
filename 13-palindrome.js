const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of terms: ", (input) => {

    const n = Number(input);

    let a = 0;
    let b = 1;

    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);

        const next = a + b;

        a = b;
        b = next;
    }

    console.log("Fibonacci Series:", result.join(" "));

    rl.close();
});