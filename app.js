var Employee = /** @class */ (function () {
    function Employee(name, surname, age, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var employee1 = new Employee('Петя', 'Иванов', 24, 1000);
var employee2 = new Employee('Константин', 'Ефимов', 34, 1200);
console.log(employee1, employee2);
