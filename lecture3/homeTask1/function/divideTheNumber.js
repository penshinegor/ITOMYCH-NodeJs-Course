module.exports = function (number) {
    number = Number(number);
    if (isNaN(number)) {
        return null;
    }
    else if (number < 10 || number > 99) {
        return null;
    } else {
        return number.toString().split('').map(Number);
    }
}