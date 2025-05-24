let obj = {a: 1, b: 2, c: 3};
let res: number = 0;

for (let key in obj) {
	let elem = obj[key];
	res += elem;
}

console.log(res);