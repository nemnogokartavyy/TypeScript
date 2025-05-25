var map = new Map([
    ['key1', 1],
    ['key2', 2],
    ['key3', 3],
]);
console.log(map);
var set = new Set([
    1, 2, 3, 4, 5, 4, 3, 2, 1
]);
console.log(set);
for (var i = 0; i < 10; i++) {
    document.body.appendChild(document.createElement('div'));
}
var divs = document.body.querySelectorAll('div');
console.log(divs);
var divsCol = document.body.getElementsByTagName('div');
console.log(divsCol);
