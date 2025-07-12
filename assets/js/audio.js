import WaveSurfer from 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js'

const files = [
    "./assets/audio/1_Introduction_StrangeKinships.mp3",
    "./assets/audio/2_Walking_StrangeKinships.mp3",
    "./assets/audio/3_Voice_StrangeKinships.mp3",
    "./assets/audio/4_Orientation_StrangeKinships.mp3",
    "./assets/audio/5_Flight_StrangeKinships.mp3"
]

const wavFiles = [
    "./assets/audio/1_Introduction_StrangeKinships.wav",
    "./assets/audio/2_Walking_StrangeKinships.wav",
    "./assets/audio/3_Voice_StrangeKinships.wav",
    "./assets/audio/4_Orientation_StrangeKinships.wav",
    "./assets/audio/5_Flight_StrangeKinships.wav"
]

let chapterNumber = pageName.slice(-1);

let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(252, 255, 94)',
    progressColor: 'black',
    url: files[chapterNumber - 1],
});

document.getElementById('high-quality').onclick = () => {
    wavesurfer.stop();
    play.innerHTML = '\u23F5';
    curr = 'play';
    wavesurfer.load(wavFiles[chapterNumber - 1]);
    wavesurfer.on('ready', timeline());
}

const play = document.getElementById('play');
play.onclick = () => togglePlay();
document.getElementById('stop').onclick = () => {
    wavesurfer.stop();
    play.innerHTML = '\u23F5';
    curr = 'play';
    timeline();
}

let curr = 'play';
const togglePlay = () => {
    if (curr == 'play') {
        wavesurfer.play();
        play.innerHTML = '\u23F8';
        curr = 'pause';
    } else {
        wavesurfer.pause();
        play.innerHTML = '\u23F5';
        curr = 'play';
        timeline();
    }
}

wavesurfer.on('interaction', () => {
    wavesurfer.pause();
    play.innerHTML = '\u23F5';
    curr = 'play';
    timeline();
})

wavesurfer.on('audioprocess', function () {
    timeline();
});

/* timeline */
function timeline() {
    let totalMin, totalSec;
    let currentMin, currentSec;
    [totalMin, totalSec] = calculateMinSec(wavesurfer.getDuration());
    [currentMin, currentSec] = calculateMinSec(wavesurfer.getCurrentTime());
    document.getElementById('time-total').innerText = `${totalMin}:${totalSec}`;
    document.getElementById('time-current').innerText = `${currentMin}:${currentSec}`;
}

function calculateMinSec(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - min * 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    return [min, sec];
}