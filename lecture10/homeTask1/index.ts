const REGULAR_SEPARATOR_FOR_TASK = /(\+|\-)/;

function multiplyPolynomials(polynomial1: string, polynomial2: string): string {
    let arrayOfPolynomial1: any[] = transformStringToArray(polynomial1);
    let arrayOfPolynomial2: any[] = transformStringToArray(polynomial2);
    let result: string = '';
    arrayOfPolynomial1.forEach((value1, index1, array1) => {
      arrayOfPolynomial2.forEach((value2, index2) => {
          if (index1 === 0 && index2 === 0) {
              result += 'x^' + (parseInt(value1.split('^')[1]) + parseInt(value2.split('^')[1]));
          } else if (value2 === '+' || value2 === '-') {
              if ((value1 === '+' && value2 === '-') || (value1 === '-' && value2 === '+')) {
                  result += value1;
              } else if (array1[index1 - 1] === '-' && value2 === '+') {
                  result += array1[index1 - 1];
              } else if (array1[index1 - 1] === '-' && value2 === '-') {
                  result += '+';
              } else {
                  result += value2;
              }
          } else if (value1 === '+' || value1 === '-') {

          } else if (typeof value1 === 'number' && typeof value2 === 'number') {
              result += value1 * value2;
          } else if (typeof value1 === 'number') {
              result += value1 + value2;
          } else {
              result += value2 + value1;
          }
      });
    });
    return result;

    function transformStringToArray(line: string): (string | number)[] {
        return line.split(REGULAR_SEPARATOR_FOR_TASK).map(value => {
            if (!isNaN(Number(value))) {
                return parseInt(value);
            } else {
                return value;
            }
        });
    }
}

console.log(multiplyPolynomials('x^2+1', 'x^3+10'));