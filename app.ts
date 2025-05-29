class User {
    private name;
    private age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }

}

let user = new User('Max', 31);
console.log(user);
console.log(user.getName(), user.getAge());
user.setName('Jack');
user.setAge(40);
console.log(user.getName(), user.getAge());