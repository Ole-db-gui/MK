const kitana = {
    name: "Kitana",
    hp: 88,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack: function() {
        console.log(this.name + " Fight...");
    },
};

const subZero = {
    name: "Sub-Zero",
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    attack: function() {
        console.log(this.name + " Fight...");
    },
};

function createPlayer(playerNumber, character) {
    const player = document.createElement("div");
    const progressbar = document.createElement("div");
    const life = document.createElement("div");
    const name = document.createElement("div");
    const model = document.createElement("div");
    const imgModel = document.createElement("img");

    player.classList.add(`${playerNumber}`);
    progressbar.classList.add("progressbar");
    life.classList.add("life");
    life.style.width = `${character.hp}%`;
    name.classList.add("name");
    name.innerText = `${character.name}`;
    model.classList.add("character");
    imgModel.src = `${character.img}`;

    progressbar.append(life);
    progressbar.append(name);
    player.append(progressbar);
    model.append(imgModel);
    player.append(model);
    document.querySelector(".arenas").appendChild(player);
}

createPlayer("player1", kitana);
createPlayer("player2", subZero);