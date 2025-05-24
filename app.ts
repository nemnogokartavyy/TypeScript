function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(1, 2));

let arr: number[] = [1, 2, 3];

function sumArray(arr: number[]): number {
    let res = 0;

    for (let num of arr) {
        res += num;
    }

    return res;
}

console.log(sumArray(arr));