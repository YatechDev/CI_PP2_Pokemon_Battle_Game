/*
* BUTTONS
 */

// Start button - taking to game level choice
const StartButton = document.getElementById('start-btn');

if (StartButton) {
    StartButton.addEventListener('click', function () {
        window.location.href = 'subpages/game_levels.html';
    });
}

// Home Button - taking to index.html
const homeButton = document.getElementById('home-btn');
if (homeButton) {
    homeButton.addEventListener('click', function () {
        window.location.href = '../index.html';
    });
}

/*
* MODALS
 */

//Rules Modal - it will open after click the Rules Button and close after click on red cross
const modalRules = document.getElementById('modal-rules');
const openRules = document.getElementById('rules-btn');
const closeRules = document.getElementById('modal-rules-close');

if (modalRules) {
    openRules.addEventListener('click', () => {
        modalRules.classList.add('visible');
    });

    closeRules.addEventListener('click', () => {
        modalRules.classList.remove('visible');
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalRules.classList.remove('visible');
        }
    });
}

//Author Modal - it will open after click the Author Button and close after click on red cross
const modalAuthor = document.getElementById('modal-author');
const openAuthor = document.getElementById('author-btn');
const closeAuthor = document.getElementById('modal-author-close');

if (modalAuthor) {
    openAuthor.addEventListener('click', () => {
        modalAuthor.classList.add('visible');
    });

    closeAuthor.addEventListener('click', () => {
        modalAuthor.classList.remove('visible');
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalAuthor.classList.remove('visible');
        }
    });
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
