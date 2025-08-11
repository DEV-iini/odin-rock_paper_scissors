const choice = ["Rock", "Paper", "Scissor"];
let player = getHumanChoice(choice);
let computer = getComputerChoice(choice);
let humanScore = 0;
let computerScore = 0;


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