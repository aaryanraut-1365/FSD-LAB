const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    const originalNum = Number(input);

    if (isNaN(originalNum) || input.trim() === "") {
        console.log("Please enter a valid number.");
        rl.close();
        return;
    }

    if (originalNum < 0) {
        console.log(`${originalNum} is NOT a Palindrome Number.`);
        rl.close();
        return;
    }

    let temp = originalNum;
    let reversedNum = 0;

    while (temp > 0) {
        const digit = temp % 10;
        reversedNum = (reversedNum * 10) + digit;
        temp = Math.floor(temp / 10);
    }

    if (originalNum === reversedNum) {
        console.log(`${originalNum} is a Palindrome Number`);
    } else {
        console.log(`${originalNum} is NOT a Palindrome Number`);
    }

    rl.close();
});
