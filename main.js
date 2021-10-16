const arenas = document.querySelector(".arenas");
const randomBtn = document.querySelector(".button");

const player1 = {
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    player: 1,
    attack: function() {
        console.log(this.name + " Fight...");
    },
};

const player2 = {
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    player: 2,
    attack: function() {
        console.log(this.name + " Fight...");
    },
};

randomBtn.addEventListener("click", function() {
    changeHP(player1);
    changeHP(player2);
    if (player1.hp <= 0) {
        arenas.appendChild(playerWin(player2.name));
    } else if (player2.hp <= 0) {
        arenas.appendChild(playerWin(player1.name));
    }
});

function changeHP(player) {
    const playerLife = document.querySelector(
        ".player" + player.player + " .life"
    );
    player.hp -= Math.ceil(Math.random() * 20);
    playerLife.style.width = player.hp + "%";

    if (player.hp <= 0) {
        playerLife.style.width = "0%";
    }
}

function playerWin(name) {
    const winTitle = createElement("div", "winTitle");
    randomBtn.disabled = true;
    winTitle.innerText = name + " wins";

    return winTitle;
}

function createElement(tagName, className) {
    const tag = document.createElement(tagName);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}

function createPlayer(character) {
    const player = createElement("div", "player" + character.player);
    const progressbar = createElement("div", "progressbar");
    const life = createElement("div", "life");
    const name = createElement("div", "name");
    const model = createElement("div", "character");
    const imgModel = createElement("img");

    life.style.width = `${character.hp}%`;
    name.innerText = `${character.name}`;
    imgModel.src = `${character.img}`;

    progressbar.append(life);
    progressbar.append(name);
    player.append(progressbar);
    model.append(imgModel);
    player.append(model);
    return player;
}

arenas.append(createPlayer(player1));
arenas.append(createPlayer(player2));