#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
const numbers = await inquirer_1.default.prompt([{
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
