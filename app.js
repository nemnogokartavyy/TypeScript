var elementPromise;
elementPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var element = document.querySelector('div');
        if (element) {
            resolve(element);
        }
        else {
            reject(new Error('Элемент не найден'));
        }
    }, 1000);
});
elementPromise.then(function (result) {
    var element = result;
    console.log('Полученный элемент:', element);
}).catch(function (error) {
    console.error(error);
});
var elem = document.createElement('div');
document.body.append(elem);
console.log(elem);
var list = document.createElement('ul');
document.body.append(list);
console.log(list);
