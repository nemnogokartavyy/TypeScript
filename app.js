var Student = /** @class */ (function () {
    function Student() {
        this.name = 'Jack';
        this.age = 21;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    return Student;
}());
var student = new Student;
console.log(student.getName(), student.getAge());
student.setName('Max');
student.setAge(22);
console.log(student.name, student.age);
