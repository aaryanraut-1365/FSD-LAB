const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {

    let count = 0;

    for (let i = 0; i < input.length; i++) {

        const character = input[i].toLowerCase();

        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {
            count++;
        }
    }

    console.log("Number of vowels:", count);

    rl.close();
});