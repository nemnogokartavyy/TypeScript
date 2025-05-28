class User {
    name: string;
    surname: string;
    age: number;

    constructor(
        name: string,
        surname: string,
        age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Employee extends User {
    salary: number;

    constructor(
        name: string,
        surname: string,
        age: number,
        salary: number
    ) {
        super(name, surname, age);
        this.salary = salary;
    }
}

let employee: Employee = new Employee('Иван', 'Иванов', 20, 1000);

console.log(employee);