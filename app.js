var daysWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];
function currentDay(year, month, date) {
    var now = new Date();
    var y = year !== undefined ? year : now.getFullYear();
    var m = month !== undefined ? month : now.getMonth();
    var d = date !== undefined ? date : now.getDate();
    var desDate = new Date(y, m, d);
    var dayIndex = desDate.getDay();
    return daysWeek[dayIndex];
}
// Примеры использования:
console.log(currentDay()); // Сегодняшний день
console.log(currentDay(2023, 10, 5)); // 5 ноября 2023
