const startButton = document.getElementById("start");
const dice1 = document.getElementById("dice_A");
const dice2 = document.getElementById("dice_B");
let random1, random2;
let button = true

function random() {
    return Math.ceil(Math.random() * 6)
}


startButton.onclick = function run() {

    if (button) {
        button = false

        let loop = setInterval(() => dice(), 100);

        setTimeout(() => {
            clearInterval(loop);
            result();
            button = true
        }, 2000);


        function dice() {
            random1 = random()
            random2 = random()
            dice1.setAttribute("src", `images/dice${random1}.png`)
            dice2.setAttribute("src", `images/dice${random2}.png`)
        }
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
        dice1.className = "imgwin"
        dice2.className = "img"

    } else if (random1 < random2) {
        sonuc.innerHTML = `Player 2 Wins!!!`
        player_2.className = "player-win"
        player_1.className = ""
        dice2.className = "imgwin"
        dice1.className = "img"

    } else {
        sonuc.innerHTML = `Draw!!!`
        player_1.className = ""
        player_2.className = ""
        dice1.className = "img"
        dice2.className = "img"
    }
}



function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();

        img1.src = "images/dice1.png";
        img2.src = "images/dice2.png";
        img3.src = "images/dice3.png";
        img4.src = "images/dice4.png";
        img5.src = "images/dice5.png";
    }
}


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);