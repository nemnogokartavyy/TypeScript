function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (acc, elem) { return acc += elem; }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
