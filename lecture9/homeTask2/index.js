import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

rl.question('Input day of week to get timetable: ', day => {
    getTimetable(day);
    rl.close();
});

function getTimetable(day) {
    switch (day) {
        case 'Monday': {
            return import('./modules/monday.js').then(timeTable => console.log(timeTable));
        }
        case 'Tuesday': {
            return import('./modules/tuesday.js').then(timeTable => console.log(timeTable));
        }
        case 'Wednesday': {
            return import('./modules/wednesday.js').then(timeTable => console.log(timeTable));
        }
        case 'Thursday': {
            return import('./modules/thursday.js').then(timeTable => console.log(timeTable));
        }
        case 'Friday': {
            return import('./modules/friday.js').then(timeTable => console.log(timeTable));
        }
        default: {
            console.log('Day of rest =)');
        }
    }
}