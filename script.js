const startButton = document.getElementById("start")
const dice1 = document.getElementById("dice_A")
const dice2 = document.getElementById("dice_B")
let random1, random2


//1-6 arası random sayı üreten fonksiyon
function random() {
    return Math.ceil(Math.random() * 6)
}

//Basıldığında random sayı alıp resim değiştiren fonksiyon
startButton.onclick = function run() {

    // Her 50ms 1 kere dice() fonksiyonunu çağıran methot
    let loop = setInterval(() => dice(), 50);

    //2 Saniye sonra setInterval durdurarak result() fonksiyonunu çalıştıran methot
    setTimeout(() => {
        clearInterval(loop);
        result();
    }, 2000);

    //Random sayıya göre resim atayan fonksiyon
    function dice() {
        random1 = random()
        random2 = random()
        dice1.setAttribute("src", `images/dice${random1}.png`)
        dice2.setAttribute("src", `images/dice${random2}.png`)
    }
}

//Çıkan sonucu karşılaştırıp yazı ve stil değiştiren fonksiyon
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


//Resim önyükleme fonksiyonu
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