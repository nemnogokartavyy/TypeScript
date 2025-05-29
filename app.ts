class User {
    protected name: string;
    protected surn: string;

    constructor(name: string, surn: string) {
        this.name = name;
        this.surn = surn;
    }
}

class Employee extends User {
    protected salary: number;
    constructor(name: string, surn: string, salary: number) {
        super(name, surn);
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSurn() {
        return this.surn;
    }

    getSalary() {
        return this.salary;
    }
}

let employee: Employee = new Employee("John", "Doe", 50000);

console.log(employee.getName(), employee.getSurn(), employee.getSalary());