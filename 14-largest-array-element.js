const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by spaces: ", (input) => {

    const numbers = input.split(" ").map(Number);

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("Array:", numbers);
    console.log("Largest element:", largest);

    rl.close();
});