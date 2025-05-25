type Func = (x: number, y: number,
    z: number) => number;

let func: Func = function (x: number, y: number, z: number): number {
    let sum: number = x + y + z;
    return sum;
}

console.log(func(2, 3, 4));

type Func2 = (number: number, arrNumbers: number[]) => number[];