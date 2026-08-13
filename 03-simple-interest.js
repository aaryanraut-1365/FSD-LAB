const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter principal amount: ", (pInput) => {
    rl.question("Enter rate of interest: ", (rInput) => {
        rl.question("Enter time in years: ", (tInput) => {

            const P = Number(pInput);
            const R = Number(rInput);
            const T = Number(tInput);

            const SI = (P * R * T) / 100;

            console.log("Simple Interest:", SI);

            rl.close();
        });
    });
});