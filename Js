let hours = document.getElementById(`d-hour`);
let minutes = document.getElementById(`d-min`);
let seconds = document.getElementById(`d-sec`);

function displayDtime() {
    setInterval(() => {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let dayNight = "AM";

        if (hours > 12) {
            dayNight = "PM";
            hours = hours - 12;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }

        let digitalClock = document.getElementById('digital-clock');
        digitalClock.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
    }, 1000);
}
displayDtime();

let ClickToChange = document.getElementById('colour-button');
let bulb1 = document.getElementById('bulb2');
let bulb2 = document.getElementById('bulb');
let isWhite = true;

function changeColour() {
    if (isWhite) {
        document.body.style.backgroundColor = '#1c1b1d';
        ClickToChange.style.backgroundColor = 'white';
        ClickToChange.style.color = '#1c1b1d';
        bulb1.style.display = 'block';
        bulb2.style.display = 'none';
        isWhite = false;
    } else {
        document.body.style.backgroundColor = 'white';
        ClickToChange.style.backgroundColor = '#1c1b1d';
        ClickToChange.style.color = 'white';
        bulb1.style.display = 'none';
        bulb2.style.display = 'block';
        isWhite = true;
    }
}

ClickToChange.addEventListener('click', changeColour);
