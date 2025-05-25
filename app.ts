interface Position {
    name: string,
    salary: number,
}

interface Addr {
    country: string,
    city: string,
}

interface Employee {
    name: string,
    position: Position,
    addr: Addr,
}

let employee: Employee = {
    name: 'andrew',
    position: {
        name: 'programmer',
        salary: 1000,
    },
    addr: {
        country: 'belarus',
        city: 'minsk'
    }
};

interface Parent {
    name: string,
    age: number,
    parents: null,
}

interface User {
    name: string,
    age: number,
    parents: {
        mother: Parent,
        father: Parent,
    }
}

let user: User = {
    name: 'john',
    age: 30,
    parents: {
        mother: {
            name: 'jane',
            age: 30,
            parents: null
        },
        father: {
            name: 'eric',
            age: 30,
            parents: null
        }
    }
}