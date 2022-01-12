function random() {
    return Math.ceil(Math.random() * 6)
}

const startButton = document.getElementById("start")
const dice1 = document.getElementById("dice_A")
const dice2 = document.getElementById("dice_B")
let random1, random2


startButton.onclick = function run() {

    let loop = setInterval(() => dice(), 50);

    setTimeout(() => {
        clearInterval(loop);
        result();
    }, 2000);

    function dice() {
        random1 = random()
        random2 = random()
        dice1.setAttribute("src", `images/dice${random1}.png`)
        dice2.setAttribute("src", `images/dice${random2}.png`)
    }

}

function result() {

    const sonuc = document.querySelector("h1")

    player_1 = document.getElementById("player_1")
    player_2 = document.getElementById("player_2")

    if (random1 > random2) {
        sonuc.innerHTML = `Player 1 Wins!!!`
        player_1.className = "player-win"
        player_2.className = ""
        dice1.className ="imgwin"
        dice2.className ="img"

    } else if (random1 < random2) {
        sonuc.innerHTML = `Player 2 Wins!!!`
        player_2.className = "player-win"
        player_1.className = ""
        dice2.className ="imgwin"
        dice1.className ="img"

    } else {
        sonuc.innerHTML = `Draw!!!`
        player_1.className = ""
        player_2.className = ""
        dice1.className ="img"
        dice2.className ="img"
    }
}