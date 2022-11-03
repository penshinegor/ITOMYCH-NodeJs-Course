function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

function isBelongToCircle(pointCoordinates, circle) {
    return Math.pow(pointCoordinates.x - circle.x, 2) + Math.pow(pointCoordinates.y - circle.y, 2) <= Math.pow(circle.r, 2);
}