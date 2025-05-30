abstract class Figure {
    perimeter: number;
    area: number;

    constructor(perimeter: number, area: number) {
        this.perimeter = perimeter;
        this.area = area
    }
}

class Square extends Figure {

}

class Rectangle extends Figure {

}