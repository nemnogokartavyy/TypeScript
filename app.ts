let daysWeek: string[] = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

function currentDay(year?: number, month?: number, date?: number): string {
    const now = new Date();

    const y = year !== undefined ? year : now.getFullYear();
    const m = month !== undefined ? month : now.getMonth();
    const d = date !== undefined ? date : now.getDate();

    const desDate = new Date(y, m, d);

    const dayIndex = desDate.getDay();
    
    return daysWeek[dayIndex];
};

console.log(currentDay());
console.log(currentDay(2023, 10, 5));