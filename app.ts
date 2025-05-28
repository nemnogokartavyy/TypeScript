class Employee {
    name: string;
    surname: string;
    age: number;
    salary: number;

    constructor(name: string, surname: string, age: number, salary: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
}

let employee1: Employee = new Employee('Петя', 'Иванов', 24, 1000);
let employee2: Employee = new Employee('Константин', 'Ефимов', 34, 1200);

console.log(employee1, employee2);