const prompt = require('prompt-sync')();

module.exports = function () {
    return new Promise((resolve, reject) => {
        try {
            let points = 0;
            while (true) {
                const numberToGuess = Math.floor(Math.random() * 6) + 1;
                let guess = prompt('Guess a number from 1 to 6 (if you want to exit - enter 0): ');
                if (guess == 0) {
                    break;
                } else if (Number(guess) === numberToGuess) {
                    points += 2;
                    console.log('Congratulations! You get 2 points');
                } else if (Number(guess) === numberToGuess - 1 || Number(guess) === numberToGuess + 1)  {
                    points += 1;
                    console.log('Congratulations! You get 1 points');
                } else {
                    console.log('Sorry, guess again!');
                }
            }
            resolve(points);
        } catch (err) {
            reject(err);
        }
    })
        .then(points => console.log('Your points: ', points), err => console.log('Something went wrong.', err));
}
