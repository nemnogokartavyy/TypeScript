let regExpArr: RegExp[] = [];

regExpArr.push(/abc/);

console.log(regExpArr);

const promisesArr: Promise<string>[] = [
    new Promise((resolve) => setTimeout(() => resolve('Первый'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Третий'), 1500))
];

console.log(promisesArr);

interface WorkerInt {
    name: string;
    surname: string;
    age: number;
    salary: number;
    position: string;
}

let workersArr: WorkerInt[] = [
    {
        name: 'Петя',
        surname: 'Петров',
        age: 30,
        salary: 1000,
        position: 'Программист'
    },
    {
        name: 'Иван',
        surname: 'Иванов',
        age: 40,
        salary: 1500,
        position: 'Менеджер'
    }
];

console.log(workersArr);