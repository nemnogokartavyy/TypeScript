var User = /** @class */ (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge >= 0 && newAge <= 120) {
                this._age = newAge;
            }
            else {
                throw new Error("Возраст должен быть в диапазоне от 0 до 120");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Иван", 30);
console.log(user.age);
try {
    user.age = -5;
}
catch (error) {
    console.error(error.message);
}
try {
    user.age = 150;
}
catch (error) {
    console.error(error.message);
}
try {
    user.age = 100;
}
catch (error) {
    console.error(error.message);
}
console.log(user.age);
