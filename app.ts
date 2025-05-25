interface Employee {
    name: string,
    age: number,
    salaryday: number
}

let obj: Employee = {
    name: 'john',
    age: 30,
    salaryday: 1000,
}

interface Time {
    hour: number,
    minute: number,
    second: number
}

let objTime1: Time = {
    hour: 10,
    minute: 10,
    second: 10,
}

let objTime2: Time = {
    hour: 10,
    minute: 10,
    second: 10,
}

let objTime3: Time = {
    hour: 10,
    minute: 10,
    second: 10,
}

console.log(
    obj,
    objTime1,
    objTime2, objTime3
)