const getDistanceBetweenPoints = require('../components/function/getDistanceBetweenPoints');

class Quadrangle {
    #sideA;
    #firstDiagonal;
    #secondDiagonal;
    #angleBetweenDiagonals;

    constructor(a, b, c, d, angleBetweenDiagonals) {
        this.#sideA = {
            length: getDistanceBetweenPoints(a, b),
            coordinates: {
                start: a,
                end: b,
            },
        };
        this.#firstDiagonal = {
            length: getDistanceBetweenPoints(a, c),
            coordinates: {
                start: a,
                end: c,
            },
        };
        this.#secondDiagonal = {
            length: getDistanceBetweenPoints(d, b),
            coordinates: {
                start: d,
                end: b,
            },
        };
        this.#angleBetweenDiagonals = angleBetweenDiagonals;
    }
    // constructor(a, b, secondDiagonal, angleBetweenDiagonals) {
    //     this.#sideA = a;
    //     this.#firstDiagonal = firstDiagonal;
    //     this.#secondDiagonal = secondDiagonal;
    //     this.#angleBetweenDiagonals = angleBetweenDiagonals;
    // }

    get sideA() {
        return this.#sideA;
    }
    get firstDiagonal() {
        return this.#firstDiagonal;
    }
    get secondDiagonal() {
        return this.#secondDiagonal;
    }
    get angleBetweenDiagonals() {
        return this.#angleBetweenDiagonals;
    }

    getInfo() {
        return `Side a: ${JSON.stringify(this.sideA)}\n` +
                `First diagonals: ${JSON.stringify(this.firstDiagonal)}\n` +
                `Second diagonals: ${JSON.stringify(this.secondDiagonal)}\n` +
                `Angle between diagonals: ${this.angleBetweenDiagonals}`;
    }
    calculateAreaUsingGeneralFormula() {
        return 0.5 * this.firstDiagonal.length * this.secondDiagonal.length * Math.sin(this.angleBetweenDiagonals);
    }
}

class Trapezoid extends Quadrangle {
    #sideB;
    #sideC;
    #sideD;
    #height;
    #middleLine = null;

    constructor(a, b, c, d, height, angleBetweenDiagonals) {
        super(a, b, c, d, angleBetweenDiagonals);
        this.#sideB = {
            length: getDistanceBetweenPoints(b, c),
            coordinates: {
                start: b,
                end: c,
            },
        };
        this.#sideC = {
            length: getDistanceBetweenPoints(c, d),
            coordinates: {
                start: c,
                end: d,
            },
        };
        this.#sideD = {
            length: getDistanceBetweenPoints(d, a),
            coordinates: {
                start: d,
                end: a,
            },
        };
        this.#height = height;
    }

    get sideB() {
        return this.#sideB;
    }
    get sideC() {
        return this.#sideC;
    }
    get sideD() {
        return this.#sideD;
    }
    get height() {
        return this.#height;
    }
    get middleLine() {
        return this.#middleLine;
    }

    getInfo() {
        return `${super.getInfo()}\n` +
                `Side b: ${JSON.stringify(this.sideB)}\n` +
                `Side c: ${JSON.stringify(this.sideC)}\n` +
                `Side d: ${JSON.stringify(this.sideD)}\n` +
                `Height: ${this.height}\n` +
                `Middle line: ${this.middleLine}\n` +
                `Type: ${this.determineTypeOfTrapezoid()}`;
    }
    calculateMiddleLine() {
        return this.#middleLine = (this.sideB.length + this.sideD.length) / 2;
    }
    calculateArea() {
        if (this.middleLine) {
            return this.middleLine * this.height;
        }
        return this.calculateMiddleLine() * this.height;
    }
    determineTypeOfTrapezoid() {
        if (this.sideA.length === this.height || this.sideC.length === this.height) {
            return 'Rectangular trapezoid';
        } else if (this.sideA.length === this.sideC.length) {
            return 'Isosceles trapezoid';
        }
        return 'Versatile trapezoid';
    }
}

class Parallelogram extends Quadrangle {
    #sideB;
    #sideC;
    #sideD;
    #height;

    constructor(a, b, c, d, height, angleBetweenDiagonals) {
        super(a, b, c, d, angleBetweenDiagonals);
        this.#sideB = {
            length: getDistanceBetweenPoints(b, c),
            coordinates: {
                start: b,
                end: c,
            },
        };
        this.#sideC = {
            length: getDistanceBetweenPoints(c, d),
            coordinates: {
                start: c,
                end: d,
            },
        };
        this.#sideD = {
            length: getDistanceBetweenPoints(d, a),
            coordinates: {
                start: d,
                end: a,
            },
        };
        this.#height = height;
    }

    get sideB() {
        return this.#sideB;
    }
    get sideC() {
        return this.#sideC;
    }
    get sideD() {
        return this.#sideD;
    }
    get height() {
        return this.#height;
    }

    getInfo() {
        return `${super.getInfo()}\n` +
            `Side b: ${JSON.stringify(this.sideB)}\n` +
            `Side c: ${JSON.stringify(this.sideC)}\n` +
            `Side d: ${JSON.stringify(this.sideD)}\n` +
            `Height: ${this.height}`;

    }
    calculatePerimeter() {
        return this.sideA.length * 2 + this.sideB.length * 2;
    }
    calculateArea() {
        return this.sideB.length * this.height;
    }
}

class Rectangle extends Parallelogram {
    constructor(a, b, c, d, angleBetweenDiagonals) {
        super(a, b, c, d, getDistanceBetweenPoints(a, b), angleBetweenDiagonals);
    }

    calculateArea() {
        return this.sideA.length * this.sideB.length;
    }
    describeCircleAroundFigure() {
        return 'We described a circle around this figure.\n' +
                'The center of the circle is the point of intersection of the diagonals of the figure';
    }
}

class Square extends Rectangle {
    constructor(a, b, c, d, angleBetweenDiagonals) {
        super(a, b, c, d, angleBetweenDiagonals);
    }

    calculatePerimeter() {
        return this.sideA.length * 4;
    }
    inscribeCircleInFigure() {
        return 'We inscribe a circle in this figure.\n' +
            `The radius of the circle is equal to half the side - ${this.sideA / 2}`;
    }
}

function areaOfIntersectionQuadrangles(figure1, figure2)
{
    let x_dist = (Math.min(figure1.sideB.coordinates.end.x, figure2.sideB.coordinates.end.x) - Math.max(figure1.sideA.coordinates.start.x, figure2.sideA.coordinates.start.x));
    let y_dist = (Math.min(figure1.sideB.coordinates.end.y, figure2.sideB.coordinates.end.y) - Math.max(figure1.sideA.coordinates.start.y, figure2.sideA.coordinates.start.y));
    if (x_dist > 0 && y_dist > 0) {
        return x_dist * y_dist;
    }
}

let rectangle1 = new Rectangle({x: -3, y: -1}, {x: -3, y: 4}, {x: 1, y: 4}, {x: 1, y: -1}, null);
let rectangle2 = new Rectangle({x: -2, y: 1}, {x: -2, y: 4}, {x: 2, y: 4}, {x: 2, y: 1}, null);
console.log(areaOfIntersectionQuadrangles(rectangle1, rectangle2));
