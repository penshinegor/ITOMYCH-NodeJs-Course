import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import calculator from "./components/function/calculator.js";

const rl = readline.createInterface({ input, output });

rl.question('Input example: ', example => {
    console.log(calculator(example));
    rl.close();
});