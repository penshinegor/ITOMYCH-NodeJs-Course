module.exports = function (string) {
    string = string.split('+');
    if (convertToNumber(string[0].split('')) > 2000 || convertToNumber(string[1].split('')) > 2000) {
        return null;
    }
    return convertToRoman(convertToNumber(string[0].split('')) + convertToNumber(string[1].split('')));
}

const ROMAN_NUMBERS = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}

function convertToNumber(array) {
    let result = ROMAN_NUMBERS[array[0]];
    for (let previous = 0, current = 1; current < array.length; previous++, current++) {
        result += ROMAN_NUMBERS[array[current]];
        if (isExceptionalPair(array[previous], array[current])) {
            result -= 2 * ROMAN_NUMBERS[array[previous]];
        }
    }
    return result;
}

function isExceptionalPair(x, y) {
    return ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].indexOf(x + y) > -1;
}

function convertToRoman(number) {
    let result = '';
    for (let key in ROMAN_NUMBERS) {
        while (ROMAN_NUMBERS[key] <= number) {
            result += key;
            number -= ROMAN_NUMBERS[key];
        }
    }
    return result;
}