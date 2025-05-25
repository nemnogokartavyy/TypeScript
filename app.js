var func1 = function (num1, num2) { return num1 + num2; };
console.log(func1(1, 3));
var func2 = function (str) { return str.split(''); };
console.log(func2('qwerty'));
var arr = [1, 2, 3];
var res = arr.map(function (num) { return Math.pow(num, 2); });
console.log(res);
