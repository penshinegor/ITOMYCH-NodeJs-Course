function multiplyMatrices(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        return null;
    }
    let resultMatrix = [];
    for (let rows of matrix1) {
        resultMatrix.push([]);
    }
    for (let rowOfMatrix1 = 0; rowOfMatrix1 < matrix1.length; rowOfMatrix1++) {
        for (let columnOfMatrix2 = 0; columnOfMatrix2 < matrix2[0].length; columnOfMatrix2++) {
            let temp = 0;
            for (let key = 0; key < matrix2.length; key++) {
                temp += matrix1[rowOfMatrix1][key] * matrix2[key][columnOfMatrix2];
            }
            resultMatrix[rowOfMatrix1][columnOfMatrix2] = temp;
        }
    }
    return resultMatrix;
}
