var obj = { a: 1, b: 2, c: 3 };
var res = 0;
for (var key in obj) {
    var elem = obj[key];
    res += elem;
}
console.log(res);
