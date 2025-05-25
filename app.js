var regExpArr = [];
regExpArr.push(/abc/);
console.log(regExpArr);
var promisesArr = [
    new Promise(function (resolve) { return setTimeout(function () { return resolve('Первый'); }, 1000); }),
    new Promise(function (resolve) { return setTimeout(function () { return resolve('Второй'); }, 2000); }),
    new Promise(function (resolve) { return setTimeout(function () { return resolve('Третий'); }, 1500); })
];
console.log(promisesArr);
var workersArr = [
    {
        name: 'Петя',
        surname: 'Петров',
        age: 30,
        salary: 1000,
        position: 'Программист'
    },
    {
        name: 'Иван',
        surname: 'Иванов',
        age: 40,
        salary: 1500,
        position: 'Менеджер'
    }
];
console.log(workersArr);
