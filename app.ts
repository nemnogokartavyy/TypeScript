interface Country {
    name: string,
    cities: string[]
};

let country: Country = {
    name: 'Республика Беларусь',
    cities: ['Минск', 'Брест', 'Гродно', 'Гомель', 'Витебск', 'Могилев']
};

console.log(country);