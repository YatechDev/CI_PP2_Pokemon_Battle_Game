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

/*
* GAME FUNCTIONS
*/

// Array with a list of Pokemon (fighters) with a source do the image of that Pokemon
const pokemonList = [
    {
        name: "Fire",
        image: "/assets/images/fire_hard.png",
    },
    {
        name: "Grass",
        image: "/assets/images/grass_hard.png",
    },
    {
        name: "Ice",
        image: "/assets/images/ice_hard.png",
    },
    {
        name: "Ground",
        image: "/assets/images/ground_hard.png",
    },
    {
        name: "Rock",
        image: "/assets/images/rock_hard.png",
    },
];

// Player Choice + start the game
const playerAvatar = document.getElementById('playerAvatar');
const pokemonImgs = document.querySelectorAll('.pokemon');

pokemonImgs.forEach((pokemon) => {
    pokemon.addEventListener('click', () => {
        const src = pokemon.querySelector('img').getAttribute('src');
        playerAvatar.querySelector('img').setAttribute('src', src);
        const computerChoice = computerPick();
        console.log(`Computer choose ${computerChoice.name}`)
    });
})

// Function for Computer Choice
function computerPick() {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const computerPokemon = pokemonList[randomIndex];
    const computerAvatar = document.getElementById('computerAvatar');
    const computerImg = computerAvatar.querySelector('img');
    computerImg.setAttribute('src', computerPokemon.image);
    return computerPokemon;
}
