var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var user = new User('Max', 31);
console.log(user);
console.log(user.getName(), user.getAge());
user.setName('Jack');
user.setAge(40);
console.log(user.getName(), user.getAge());
