let func1 = (num1: number, num2: number): number => num1 + num2;

console.log(func1(1, 3));

let func2 = (str: string): string[] => str.split('');

console.log(func2('qwerty'));

let arr: number[] = [1, 2, 3];
let res: number[] = arr.map((num: number) => num ** 2);

console.log(res);