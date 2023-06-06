class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}


const circle = new Circle(5, 'red');
console.log(circle.getArea());
console.log(circle.getCircumference());

circle.setRadius(7);
console.log(circle.getArea());
console.log(circle.getCircumference());


