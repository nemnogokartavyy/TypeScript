abstract class Figure {
    _perimeter: number;
    _area: number;

    constructor(perimeter: number, area: number) {
        this._perimeter = perimeter;
        this._area = area
    }

    public abstract perimeter(): number;
    public abstract area(): number;
}

class Square extends Figure {
    side: number;

    constructor(perimeter: number, area: number, side: number) {
        super(perimeter, area);
        this.side = side;
    }

    public perimeter(): number {
        return this.side * 4;
    }

    public area(): number {
        return this.side * this.side;
    }
}

class Rectangle extends Figure {
    firstSide: number;
    secondSide: number;

    constructor(perimeter: number, area: number, firstSide: number, secondSide: number) {
        super(perimeter, area);
        this.firstSide = firstSide;
        this.secondSide = secondSide;
    }

    public perimeter(): number {
        return this.firstSide * 2 + this.secondSide * 2;
    }

    public area(): number {
        return this.firstSide * this.secondSide;
    }
}

let squ: Square = new Square(0, 0, 7);
console.log(squ.perimeter());
console.log(squ.area());

let rect: Rectangle = new Rectangle(0, 0, 10, 5);
console.log(rect.perimeter());
console.log(rect.area());