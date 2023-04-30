const toggleBtn = document.getElementById('start-btn');
const leftBox = document.querySelector('.slider-left-box');
const rightBox = document.querySelector('.slider-right-box');

if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        leftBox.style.transform = 'translateX(-100%)';
        leftBox.addEventListener('transitionend', function () {
            leftBox.style.display = 'none';
            rightBox.style.transform = 'translateX(-100%)';
            rightBox.style.display = 'block';
            setTimeout(function () {
                rightBox.style.transform = 'translateX(0)';
            }, 0);
        });
    });
}

//Rules Modal - opened in welcome div
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

// Rules Modal opened in select level div
if (modalRules) {
    document.getElementById('rules2-btn').addEventListener('click', () => {
        modalRules.classList.add('visible');
    })
}
if (modalRules) {
    modalRulesCloseBtn.addEventListener('click', () => {
        modalRules.classList.remove('visible');
    })
}

// Rules Modal opened in hard mode game area
const modalRulesHard = document.getElementById('modal-rules-hard-game');

if (modalRulesHard) {
    document.getElementById('rules4-btn').addEventListener('click', () => {
        modalRulesHard.classList.add('visible');
    })
}
if (modalRulesHard) {
    modalRulesCloseBtn.addEventListener('click', () => {
        modalRulesHard.classList.remove('visible');
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


