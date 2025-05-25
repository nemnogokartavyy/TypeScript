interface EventInt {
    name: string,
    time: {
        start: string,
        finish: string
    }
}

let event: EventInt = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31'
    }
}

interface EmployeeInt {
    name: string,
    position: {
        name: string,
        salary: number
    }
    addr: {
        country: string,
        city: string
    }
}

let employee: EmployeeInt = {
    name: 'andrew',
    position: {
        name: 'programmer',
        salary: 1000
    },
    addr: {
        country: 'belarus',
        city: 'minsk'
    }
};