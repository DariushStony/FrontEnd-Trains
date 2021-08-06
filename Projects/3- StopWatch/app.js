const saveButton = document.querySelector("[data-save]");
const loadButton = document.querySelector("[data-load]");
const resetButton = document.querySelector("[data-reset]");
const controlButton = document.querySelector("[data-control]");
const watchHour = document.getElementById("hour");
const watchMinute = document.getElementById("minute");
const watchSecond = document.getElementById("second");

let time = 0;
let isPaused = true;

function formatNumberLength(number, length) {
    let result = "" + number;
    while (result.length < length) {
        result = "0" + result;
    }

    return result;
}

function watchFormatter(_time) {
    let result = {};

    let hour = Math.trunc(_time / 3600);
    let minute = Math.trunc(Math.trunc(_time % 3600) / 60);
    let second = Math.trunc(Math.trunc(Math.trunc(_time % 3600) % 60));

    result.hour = formatNumberLength(hour, 2);
    result.minute = formatNumberLength(minute, 2);
    result.second = formatNumberLength(second, 2);

    return result;
}

function setWatchData(_watchObject) {
    watchHour.innerText = _watchObject.hour;
    watchMinute.innerText = _watchObject.minute;
    watchSecond.innerText = _watchObject.second;
}

let timer = setInterval(() => {
    if (!isPaused) {
        time += 1;
        let watchData = watchFormatter(time);
        setWatchData(watchData);
    }
}, 1000);


saveButton.addEventListener("click", () => {
    sessionStorage.setItem("time", time);
});

loadButton.addEventListener("click", () => {
    time = parseInt(sessionStorage.getItem("time"));
    isPaused = true;
    let watchData = watchFormatter(time);
    setWatchData(watchData);
});

resetButton.addEventListener("click", () => {
    time = 0;
    isPaused = true;
    let watchData = watchFormatter(time);
    setWatchData(watchData);
});

controlButton.addEventListener("click", () => {
    isPaused = !isPaused;
});

