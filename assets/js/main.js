/*
* MODALS
 */

//Rules Modal
const modalRules = document.getElementById('modal-rules');
const modalRulesCloseBtn = document.getElementById('modal-rules-close');

if (modalRules) {
    document.getElementById('rules-btn').addEventListener('click', () => {
        modalRules.classList.add('visible');
    })
}

if (modalRules) {
    modalRulesCloseBtn.addEventListener('click', () => {
        modalRules.classList.remove('visible');
    })
}

//Author Modal
const modalAuthor = document.getElementById('modal-author');
const modalAuthorCloseBtn = document.getElementById('modal-author-close');

if (modalAuthor) {
    document.getElementById('author-btn').addEventListener('click', () => {
        modalAuthor.classList.add('visible');
    })
}
if (modalAuthor) {
    modalAuthorCloseBtn.addEventListener('click', () => {
        modalAuthor.classList.remove('visible');
    })
}

//Music on the page
let x = document.getElementById("myAudio");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let volumeSlider = document.getElementById("volumeSlider");

const music = document.getElementById('myAudio');

if (music) {

    playBtn.addEventListener("click", playAudio);
    pauseBtn.addEventListener("click", pauseAudio);
    stopBtn.addEventListener("click", stopAudio);
    volumeSlider.addEventListener("input", adjustVolume);

    function playAudio() {
        x.play();
    }

    function pauseAudio() {
        x.pause();
    }

    function stopAudio() {
        x.currentTime = 0;
        x.pause();
    }

    function adjustVolume() {
        x.volume = volumeSlider.value;
    }
}
