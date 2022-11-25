function isBelongToTriangle(triangle: {A: {x: number, y: number}, B: {x: number, y: number}, C: {x: number, y: number}}, point: {x: number, y: number}): number {
    if (checkValueOfPoints(triangle) && checkValueOfPoints(point)) {
        let skewProductOfVectors1: number = (triangle.A.x - point.x) * (triangle.B.y - triangle.A.y) - (triangle.B.x - triangle.A.x) * (triangle.A.y - point.y);
        let skewProductOfVectors2: number = (triangle.B.x - point.x) * (triangle.C.y - triangle.B.y) - (triangle.C.x - triangle.B.x) * (triangle.B.y - point.y);
        let skewProductOfVectors3: number = (triangle.C.x - point.x) * (triangle.A.y - triangle.C.y) - (triangle.A.x - triangle.C.x) * (triangle.C.y - point.y);
        if ((skewProductOfVectors1 >= 0 && skewProductOfVectors2 >= 0 && skewProductOfVectors3 >= 0) ||
            (skewProductOfVectors1 <= 0 && skewProductOfVectors2 <= 0 && skewProductOfVectors3 <= 0)) {
            return 1;
        }
        return 0;
    }

    function checkValueOfPoints(obj: any): boolean{
        for (let objKey in obj) {
            if (typeof obj[objKey] === 'object') {
                if (Math.abs(obj[objKey].x) > 100 || Math.abs(obj[objKey].y) > 100) {
                    return false;
                }
            } else if (Math.abs(obj[objKey]) > 100) {
                return false;
            }
        }
        return true;
    }
}

console.log(isBelongToTriangle({A: {x: -2, y: 0}, B: {x: -2, y: 4}, C: {x: -5, y: 0}}, {x: -3, y: 2}));