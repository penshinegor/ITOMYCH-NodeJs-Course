const calculateSumOfRomanNumbers = require('./function/calculateSumOfRomanNumbers');
const prompt = require('prompt-sync')({sigint: true});

let string = prompt('Input two roman numbers separated by a plus less 2000: ');
let result = calculateSumOfRomanNumbers(string);
if (!result) {
    console.log('You input wrong value');
} else {
    console.log(result);
}

