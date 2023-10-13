document.getElementById('dateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const DayWeek = Math.floor(day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
        + Math.floor((31 * m) / 12)) % 7;

    let daysOfTheWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    document.getElementById('result').textContent= "Результат: " + daysOfTheWeek[DayWeek];
});