export class Shape {
    static count = 0; 

    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape.");
        }
        Shape.count++;
    }

    static getCount() { return Shape.count; }

    calculateArea() { 
        return 0; 
    }
    calculatePerimeter() {
         return 0; 
        }

    toString() {
        return `Area: ${this.calculateArea().toFixed(2)}, Perimeter: ${this.calculatePerimeter().toFixed(2)}`;
    }
}

export class Rectangle extends Shape {
    static instance = null;
    constructor(width, height) {
        if (Rectangle.instance) {
            return Rectangle.instance; 
        }
        super();
        this.width = width || 0;
        this.height = height || 0;
        Rectangle.instance = this;
    }
    calculateArea() {
         return this.width * this.height;
         }
    calculatePerimeter() { 
        return 2 * (this.width + this.height); 
    }
    toString() {
         return `Rectangle -> ${super.toString()}`; 
        }
}

export class Square extends Shape {
    static instance = null;
    constructor(side) {
        if (Square.instance){
         return Square.instance; 
        }
        super();
        this.side = side || 0;
        Square.instance = this;
    }
    calculateArea() {
         return Math.pow(this.side, 2);
         }
    calculatePerimeter() {
         return 4 * this.side; 
        }
    toString() {
         return `Square -> ${super.toString()}`;
         }
}

export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius || 0;
    }
    calculateArea() { 
        return Math.PI * Math.pow(this.radius, 2);
     }
    calculatePerimeter() {
         return 2 * Math.PI * this.radius; 
        }
    toString() { 
        return `Circle -> ${super.toString()}`;
     }
}