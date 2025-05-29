class User {
    public name: string = 'John';
    public age: number = 1995;
    getAge() {
        let dateNow: Date = new Date;
        return dateNow.getFullYear() - this.age;
    }
}
let user = new User;
console.log(user.getAge())