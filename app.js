var User = /** @class */ (function () {
    function User() {
        this.name = 'John';
        this.age = 1995;
    }
    User.prototype.getAge = function () {
        var dateNow = new Date;
        return dateNow.getFullYear() - this.age;
    };
    return User;
}());
var user = new User;
console.log(user.getAge());
