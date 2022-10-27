const divideTheNumber = require('./function/divideTheNumber');
 const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 });

 readline.question('Input number: ', number => {
     let result = divideTheNumber(number);
     if(!result) {
         console.log('You input wrong value');
     } else {
         console.log(result[0], result[1]);
     }
     readline.close();
 });
