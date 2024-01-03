const HourEl = document.getElementById("Hour");
const MinuteEl = document.getElementById("Minutes");
const SecondEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");


function updateClock(){
    let H = new Date().getHours()
    let M = new Date().getMinutes()
    let S = new Date().getSeconds()
    let ampm = "AM"

    if(H > 12){
        H = H - 12
        ampm = "PM"
    }

    H = H < 10 ? "0" + H : H;
    M = M < 10 ? "0" + M : M;
    S = S < 10 ? "0" + S : S;

    HourEl.innerText = H;
    MinuteEl.innerText = M;
    SecondEl.innerText = S;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock()
    }, 1000);
}
document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var playIcon = document.getElementById('playIcon');
    var myAudio = document.getElementById('myAudio');

    playButton.addEventListener('click', function () {
        if (myAudio.paused) {
            myAudio.play();
            playIcon.classList.remove('fa-thin fa-play');
            playIcon.classList.add('da-thin fa-pause');
            playButton.classList.add('fa-thin fa-play');
        } else {
            myAudio.pause();
            playIcon.classList.remove('fa-thin fa-pause');
            playIcon.classList.add('fa-thin fa-play');
            playButton.classList.remove('fa-thin fa-play');
        }
    });
});

updateClock()