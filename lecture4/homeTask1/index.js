function calculatePerimeterAndAreaOfSquare(side) {
    side = Number(side);
    if (isNaN(side)) {
        return null;
    }
    if (side < 1 || side > 1000) {
        return null;
    }
    else {
        return { perimeter: side * 4, area: Math.pow(side, 2)};
    }
}

console.log(calculatePerimeterAndAreaOfSquare('5'));
console.log(calculatePerimeterAndAreaOfSquare(7));
console.log(calculatePerimeterAndAreaOfSquare('f'));
console.log(calculatePerimeterAndAreaOfSquare(1001));

