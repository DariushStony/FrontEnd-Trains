function dayDifference(day2, day1) {
    let dayMilliSeconds = 1000 * 60 * 60 * 24;
    let date2 = new Date(day2.year, day2.month, day2.day);
    let date1 = new Date(day1.year, day1.month, day1.day);

    let difference = Math.trunc(Math.abs(date2 - date1) / dayMilliSeconds);
    let year = Math.trunc(difference / 365);
    let month = Math.trunc(Math.trunc(difference % 365) / 30);
    let day = Math.trunc(Math.trunc(difference % 365) % 30);

    let dayDifference = {};

    dayDifference.year = year;
    dayDifference.month = month;
    dayDifference.day = day;

    return dayDifference;
}

document.getElementById("calc").addEventListener("click", () => {
    let day1 = {};
    let day2 = {};

    day1.year = parseInt(document.getElementById("year1").value);
    day1.month = parseInt(document.getElementById("month1").value);
    day1.day = parseInt(document.getElementById("day1").value);

    day2.year = parseInt(document.getElementById("year2").value);
    day2.month = parseInt(document.getElementById("month2").value);
    day2.day = parseInt(document.getElementById("day2").value);

    difference = dayDifference(day2, day1);

    document.getElementById("diff-year").innerHTML = difference.year;
    document.getElementById("diff-month").innerHTML = difference.month;
    document.getElementById("diff-day").innerHTML = difference.day;
});

