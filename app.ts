class Student {
    name: string = 'Jack';
    age: number = 21;

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }
}

let student: Student = new Student;
console.log(student.getName(), student.getAge());
student.setName('Max');
student.setAge(22);
console.log(student.name, student.age);