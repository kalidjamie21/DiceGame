const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]

const randSelection1 = Math.floor(Math.random() * 6); 
const randSelection2 = Math.floor(Math.random() * 6); 
document.querySelector(".img1").setAttribute("src", diceImages[randSelection1]);
document.querySelector(".img2").setAttribute("src", diceImages[randSelection2]);

if (randSelection1 > randSelection2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randSelection1 === randSelection2) {
    document.querySelector("h1").innerHTML = "It's a Draw!!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
