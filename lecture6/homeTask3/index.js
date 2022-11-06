const reduce = function (arr, reduceCallback, initialValue) {
    let accumulator;
    if (initialValue === undefined) {
        accumulator = arr[0];
        for (let index = 1; index < arr.length; index++) {
            accumulator = reduceCallback(accumulator, arr[index], index, arr);
        }
    } else {
        accumulator = initialValue;
        for (let [index, item] of arr.entries()) {
            accumulator = reduceCallback(accumulator, item, index, arr);
        }
    }
    return accumulator;
}