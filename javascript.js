/*
const choice = ["Rock", "Paper", "Scissor"];
const rounds = 5;
let player;
let computer;
let humanScore = 0;
let computerScore = 0;

playGame();

// Get user choice

function getHumanChoice(choices) {
    let human;
    do {
    human = parseInt(prompt("Type: 0 (Rock), 1 (Paper) or 2 (Scissor)"));
    } while (Number.isNaN(human) || human < -1 || human > 2);

    return choices[human];
}
// Get computer choice
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}
// See which one won
function playRound(player, computer) {
    player = getHumanChoice(choice);
    computer = getComputerChoice(choice);
    
    // Rock
    if (player === "Rock" && computer === "Rock") {
        console.log("DRAW!");
    }
    if (player === "Rock" && computer === "Paper") {
        console.log("Computer Win!");
        computerScore++;
    }
    if (player === "Rock" && computer === "Scissor") {
        console.log("Player Win!");
        humanScore++;
    }

    // Paper
    if (player === "Paper" && computer === "Rock") {
        console.log("Player Win!");
        humanScore++;
    }
    if (player === "Paper" && computer === "Paper") {
        console.log("DRAW!");
    }
    if (player === "Paper" && computer === "Scissor") {
        console.log("Computer Win!");
        computerScore++;
    }

    // Scissor
    if (player === "Scissor" && computer === "Rock") {
        console.log("Computer Win!");
        computerScore++;
    }
    if (player === "Scissor" && computer === "Paper") {
        console.log("Player Win!");
        humanScore++;
    }
    if (player === "Scissor" && computer === "Scissor") {
        console.log("DRAW!");
    }
}

// play 5 times
function playGame(rounds) {
    for (let i = 0; i < 5; i++) {
        playRound(player, computer);
    }

    if (humanScore > computerScore) {
        console.log("Player won by " + humanScore + " X " + computerScore);
    }
    else {
        console.log("Computer won by " + computerScore + " X " + humanScore);
    }
}

*/