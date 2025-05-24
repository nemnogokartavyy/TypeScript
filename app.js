function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
var arr = [1, 2, 3];
function sumArray(arr) {
    var res = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        res += num;
    }
    return res;
}
console.log(sumArray(arr));
