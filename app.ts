let map: Map<string, number> = new Map([
    ['key1', 1],
    ['key2', 2],
    ['key3', 3],
]);

console.log(map);

let set: Set<number> = new Set([
    1, 2, 3, 4, 5, 4, 3, 2, 1
]);

console.log(set);

for (let i: number = 0; i < 10; i++) {
    document.body.appendChild(document.createElement('div'));
}

let divs: NodeList = document.body.querySelectorAll('div');
console.log(divs);

let divsCol: HTMLCollection = document.body.getElementsByTagName('div');
console.log(divsCol);