/*
* GAME FUNCTIONS
*/
//Array of Pokemon
const pokemonList = [
    {
        name: "Charmander",
        type: "Fire",
        image: "assets/images/fire_easy.png",
    },
    {
        name: "Squirtle",
        type: "Water",
        image: "assets/images/water_easy.png",
    },
    {
        name: "Bulbasaur",
        type: "Grass",
        image: "assets/images/grass_easy.png",
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
            playerAvatar.querySelector("img").setAttribute("data-type", imgSrc2);
            computerPick()
            battle()
        });
    });
});


// Computer choose his pokemon
function computerPick() {
    let randomPokemon = Math.floor(Math.random() * pokemonList.length);
    let computerChoice = pokemonList[randomPokemon];
    let computerAvatar = document.getElementById("computerAvatar");

    let computerImg = computerAvatar.querySelector("img");
    computerImg.setAttribute("src", computerChoice.image);
    computerImg.setAttribute("data-type", computerChoice.type);

    computerAvatar.setAttribute("src", computerChoice.image);
    computerAvatar.setAttribute("data-type", computerChoice.type);

    return computerChoice;
}

function battle() {
    let playerChoice = document.querySelector("#playerAvatar > img").getAttribute("data-type");
    let computerChoice = document.querySelector("#computerAvatar").getAttribute("data-type");

    if (playerChoice === computerChoice) {
        console.log("Same Pokemons!");
        noWinner()
    } else if (
        playerChoice === "Fire" && computerChoice === "Grass" ||
        playerChoice === "Grass" && computerChoice === "Water" ||
        playerChoice === "Water" && computerChoice === "Fire"
    ) {
        console.log("Player Win!")
        playerWin();
    } else {
        console.log("Computer Win!")
        computerWin();
    }
}

function noWinner() {
    document.getElementById("battleResult").innerText = "DRAW!";
    document.getElementById("battleResult").style.color = "#fbdb04";
}

function playerWin () {
    let playerScore = parseInt(document.getElementById("playerScore").innerText);
    document.getElementById("playerScore").innerText = ++playerScore;
    document.getElementById("battleResult").innerText = "YOU WIN!";
    document.getElementById("battleResult").style.color = "#41dc0d";
    checkScores()
}

function computerWin () {
    let computerScore = parseInt(document.getElementById("computerScore").innerText);
    document.getElementById("computerScore").innerText = ++computerScore;
    document.getElementById("battleResult").innerText = "COMPUTER WIN!";
    document.getElementById("battleResult").style.color = "#9d0202";
    checkScores()
}

function checkScores () {
    const modalWon = document.getElementById('modal-won-game');
    const modalLost = document.getElementById('modal-lost-game');

    if (document.getElementById('playerScore').innerText === "20") {
        modalWon.classList.add('visible');
    } else if (document.getElementById('computerScore').innerText === "20") {
        modalLost.classList.add('visible');
    }
}