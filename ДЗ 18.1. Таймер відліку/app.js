const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const headline = document.querySelector('h1');

let timeInSeconds = 65;

function getSeconds(time) {
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    return String(seconds);
}

function getMinutes(time) {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    return String(minutes);
}

minutes.textContent = getMinutes(timeInSeconds);
seconds.textContent = getSeconds(timeInSeconds);
timeInSeconds --;

const interval = setInterval(function() {
    if (timeInSeconds <= 0) {
        minutes.textContent = '00';
        seconds.textContent = '00';
        headline.textContent = 'Кінець відліку';
        clearInterval(interval);
        return;
    }
    minutes.textContent = getMinutes(timeInSeconds);
    seconds.textContent = getSeconds(timeInSeconds);
    timeInSeconds--;
}, 1000);