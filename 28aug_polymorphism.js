class Shape {
  constructor() {
    this.type = "Shape";
  }

  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "Circle";
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

function printArea(shape) {
  console.log(`Type: ${shape.type} --> Area: ${shape.area()}`);
}

const circle = new Circle(5);
const rect = new Rectangle(4, 6);

printArea(circle);
printArea(rect);
