let array = [1, 2, 2, 3, 3, 3];

array = array.filter((item , index) => {
    return array.indexOf(item) === index;
});

console.log(array);