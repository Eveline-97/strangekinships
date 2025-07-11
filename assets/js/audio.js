import WaveSurfer from 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js'

const files = [
    "./assets/audio/1_Introduction_StrangeKinships.wav",
    "./assets/audio/2_Walking_StrangeKinships.wav",
    "./assets/audio/3_Voice_StrangeKinships.wav",
    "./assets/audio/4_Orientation_StrangeKinships.wav",
    "./assets/audio/5_Flight_StrangeKinships.wav"
]

let chapterNumber = pageName.slice(-1);

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(252, 255, 94)',
    progressColor: 'black',
    url: files[chapterNumber-1],
})

const play = document.getElementById('play');
play.onclick = () => togglePlay();
document.getElementById('stop').onclick = () => {
    wavesurfer.stop();
    play.innerHTML = '⏵';
    curr = 'play';
}

let curr = 'play';
const togglePlay = () => {
    if (curr == 'play') {
        wavesurfer.play();
        play.innerHTML = '⏸';
        curr = 'pause';
    } else {
        wavesurfer.pause();
        play.innerHTML = '⏵';
        curr = 'play';
    }
}

wavesurfer.on('interaction', () => {
    wavesurfer.pause();
    play.innerHTML = '⏵';
    curr = 'play';
})