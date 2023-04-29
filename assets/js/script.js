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
//Array of Pokemon
const pokemonList = [
    {
        name: "Charizard",
        type: "Fire",
        image: "assets/images/fire_hard.png",
    },
    {
        name: "Venusaur",
        type: "Grass",
        image: "assets/images/grass_hard.png",
    },
    {
        name: "Vulpix",
        type: "Ice",
        image: "assets/images/ice_hard.png",
    },
    {
        name: "Cubone",
        type: "Ground",
        image: "assets/images/ground_hard.png",
    },
    {
        name: "Graveler",
        type: "Rock",
        image: "assets/images/rock_hard.png",
    },
];

document.addEventListener("DOMContentLoaded", function () {
    let playerAvatar = document.getElementById("playerAvatar");
    let pokemonImgs = document.querySelectorAll(".pokemon");

    pokemonImgs.forEach((pokemon) => {
        pokemon.addEventListener("click", () => {
            let imgSrc = pokemon.querySelector("img").getAttribute("src",);
            let imgSrc2 = pokemon.querySelector("img").getAttribute("data-type")
            playerAvatar.querySelector("img").setAttribute("src", imgSrc);
            playerAvatar.querySelector("img").setAttribute("data-type", imgSrc2)
            computerPick()
        });
    });
});


// Computer choose his pokemon
function computerPick() {
    let randomPokemon = Math.floor(Math.random() * pokemonList.length);
    let computerChoice = pokemonList[randomPokemon];
    let computerAvatar = document.getElementById("computerAvatar");
    let computerImg = computerAvatar.querySelector("img");
    let computerImg2 = computerAvatar.querySelector("img");
    computerImg.setAttribute("src", computerChoice.image);
    computerImg2.setAttribute("data-type", computerChoice.type)
    battle()
}

function battle() {
    let playerChoice = document.querySelector("#playerAvatar").dataset.type;
    let computerChoice = document.querySelector("#computerAvatar").dataset.type;

    if (playerChoice === computerChoice) {
        console.log("Same Pokemons!");
    } else if (
        playerChoice === "Fire" && (computerChoice === "Grass" || computerChoice === "Ice") ||
        playerChoice === "Grass" && (computerChoice === "Rock" || computerChoice === "Ground") ||
        playerChoice === "Rock" && (computerChoice === "Ice" || computerChoice === "Fire") ||
        playerChoice === "Ice" && (computerChoice === "Grass" || computerChoice === "Ground") ||
        playerChoice === "Ground" && (computerChoice === "Fire" || computerChoice === "Rock")
    ) {
        console.log("Player Win!")
    } else {
        console.log("Computer Win!")
    }
}

