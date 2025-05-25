let elementPromise: Promise<any>;

elementPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const element = document.querySelector('div');
        if (element) {
            resolve(element);
        } else {
            reject(new Error('Элемент не найден'));
        }
    }, 1000);
});

elementPromise.then((result) => {
    const element = result as HTMLElement;
    console.log('Полученный элемент:', element);
}).catch((error) => {
    console.error(error);
});

let elem: HTMLElement = document.createElement('div');
document.body.append(elem);
console.log(elem);

let list: HTMLUListElement = document.createElement('ul');
document.body.append(list);
console.log(list);