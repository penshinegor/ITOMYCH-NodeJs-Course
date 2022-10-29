function createBase(number) {
    let baseNumber = number;
    return (num) => baseNumber + num;
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

let addTen = createBase(10);
console.log(addTen(5));
console.log(addTen(13));
