function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.calculateArea = function () {
        return Math.PI.toFixed(2) * Math.pow(this.r, 2);
    }

    this.calculatePerimeter = function () {
        return 2 * Math.PI.toFixed(2) * this.r;
    }
}

function calculateAreaOfIntersectionOfTwoCircle(circle1, circle2) {
    let distanceBetweenCircles =  Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
    if (distanceBetweenCircles > circle1.r + circle2.r) {
        return 0;
    } else if (distanceBetweenCircles <= Math.abs(circle1.r - circle2.r) && circle1.r >= circle2.r) {
        return Math.PI.toFixed(2) * Math.pow(circle2.r, 2);
    } else if (distanceBetweenCircles <= Math.abs(circle1.r - circle2.r) && circle1.r < circle2.r) {
        return Math.PI.toFixed(2) * Math.pow(circle1.r, 2);
    } else {
        let phi = (Math.acos((Math.pow(circle1.r, 2) + (Math.pow(distanceBetweenCircles, 2)) - Math.pow(circle2.r, 2)) / (2 * circle1.r * distanceBetweenCircles))) * 2;
        let theta = (Math.acos((Math.pow(circle2.r, 2) + (Math.pow(distanceBetweenCircles, 2)) - Math.pow(circle1.r, 2)) / (2 * circle2.r * distanceBetweenCircles))) * 2;
        let area1 = 0.5 * theta * Math.pow(circle2.r, 2) - 0.5 * Math.pow(circle2.r, 2) * Math.sin(theta);
        let area2 = 0.5 * phi * Math.pow(circle1.r, 2) - 0.5 * Math.pow(circle1.r, 2) * Math.sin(phi);
        return area1 + area2;
    }
}
