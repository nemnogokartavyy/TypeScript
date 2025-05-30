var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(perimeter, area) {
        this._perimeter = perimeter;
        this._area = area;
    }
    return Figure;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(perimeter, area, side) {
        var _this = _super.call(this, perimeter, area) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.perimeter = function () {
        return this.side * 4;
    };
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}(Figure));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(perimeter, area, firstSide, secondSide) {
        var _this = _super.call(this, perimeter, area) || this;
        _this.firstSide = firstSide;
        _this.secondSide = secondSide;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return this.firstSide * 2 + this.secondSide * 2;
    };
    Rectangle.prototype.area = function () {
        return this.firstSide * this.secondSide;
    };
    return Rectangle;
}(Figure));
var squ = new Square(0, 0, 7);
console.log(squ.perimeter());
console.log(squ.area());
var rect = new Rectangle(0, 0, 10, 5);
console.log(rect.perimeter());
console.log(rect.area());
