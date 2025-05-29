class Calc {
    public static getSum2(arr: number[]): number {
        let sum: number = 0;

        for (let elem of arr) {
            sum += Math.pow(elem, 2);
        }

        return sum;
    }

     public static getSum3(arr: number[]): number {
        let sum: number = 0;

        for (let elem of arr) {
            sum += Math.pow(elem, 3);
        }

        return sum;
    }
}

console.log(Calc.getSum2([1,2,3,4,5]));
console.log(Calc.getSum3([1,2,3,4,5]));