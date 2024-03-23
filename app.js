#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const numbers = await inquirer.prompt([{
        name: "usersNumber",
        type: "number",
        message: "Enter the number between 1-6: ",
    },
]);
if (numbers.usersNumber === randomNumber) {
    console.log("Congratulations, you guessed it right");
}
else {
    console.log("Wrong Guess! Better luck next time.");
}
