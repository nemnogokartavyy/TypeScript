class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            throw new Error("Возраст должен быть в диапазоне от 0 до 120");
        }
    }
}

const user = new User("Иван", 30);
console.log(user.age);

try {
    user.age = -5;
} catch (error) {
    console.error(error.message);
}

try {
    user.age = 150;
} catch (error) {
    console.error(error.message);
}

try {
    user.age = 100;
} catch (error) {
    console.error(error.message);
}

console.log(user.age);