var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.getSum2 = function (arr) {
        var sum = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var elem = arr_1[_i];
            sum += Math.pow(elem, 2);
        }
        return sum;
    };
    Calc.getSum3 = function (arr) {
        var sum = 0;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var elem = arr_2[_i];
            sum += Math.pow(elem, 3);
        }
        return sum;
    };
    return Calc;
}());
console.log(Calc.getSum2([1, 2, 3, 4, 5]));
console.log(Calc.getSum3([1, 2, 3, 4, 5]));
